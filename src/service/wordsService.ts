import { CustomError } from '../types/errors';
import { Story } from '../types/story';
import { UnixDateDetails } from '../types/date';
import axios from 'axios';

// Connection strings in config files

const LOG_SOURCE = 'wordsService';
const HACKERNEWS_URL = 'https://hacker-news.firebaseio.com/v0';
const KEY = 0;
const ENTRY = 1;

// Helper functions

const getUnixDateDetails = (date: Date): UnixDateDetails => {
  const formattedDateStartString = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}T00:00:00.000Z`;
  const formattedDateStartUnix = new Date(formattedDateStartString).getTime();
  const oneDayUnix = 86400000;

  return {
    formattedDateStartUnix,
    oneDayUnix,
  };
};

const binarySearch = async (array: Array<number>): Promise<Story | undefined> => {
  const middle = Math.floor(array.length / 2);
  const { formattedDateStartUnix, oneDayUnix } = getUnixDateDetails(new Date());

  const midStoryDetails = (await getStoryOrTitle(array[middle])) as Story;

  if (middle === 0 || middle === array.length)
    throw new CustomError({ description: "Couldn't fetch required item", logSource: LOG_SOURCE, httpCode: 500 });
  if ((midStoryDetails.time as number) >= formattedDateStartUnix - oneDayUnix * 6)
    return binarySearch(array.slice(0, middle));
  if ((midStoryDetails.time as number) < formattedDateStartUnix - oneDayUnix * 7)
    return binarySearch(array.slice(middle, array.length));
  if (
    (midStoryDetails.time as number) > formattedDateStartUnix - oneDayUnix * 7 &&
    (midStoryDetails.time as number) < formattedDateStartUnix - oneDayUnix * 6
  )
    return midStoryDetails;
};

const getStoryOrTitle = async (storyId: number, property?: string): Promise<string | Story> => {
  const story = await axios.get(`${HACKERNEWS_URL}/item/${storyId}.json`);
  return property === 'title' ? story.data.title : story.data;
};

const topTenWords = (input: Array<string>): Array<string> => {
  const words = {};

  // How to consider word?
  input.forEach((word) => {
    if (Object.keys(words).find((key) => key.toLocaleLowerCase() === word.toLocaleLowerCase())) {
      words[word]++;
    } else {
      words[word] = 1;
    }
  });

  const sortedWordsEntries = Object.entries(words).sort((a, b) => (b[ENTRY] as number) - (a[ENTRY] as number));
  return sortedWordsEntries.slice(0, 10).map((entry) => entry[KEY]);
};

// Endpoint handling

export const findWords = async (filter) => {
  if (!['twentyFive', 'week'].includes(filter)) {
    throw new CustomError({
      description: "Please provide any of available filtering paremeters: 'twentyFive' or 'week'",
      logSource: LOG_SOURCE,
      httpCode: 400,
    });
  }

  let tenWordsResult: Array<string> = [];
  const latest500stories = await axios.get(`${HACKERNEWS_URL}/newstories.json`);

  if (filter === 'twentyFive') {
    const latest25Stories = latest500stories.data.slice(0, 25);
    const storyTitlesPromises = await Promise.all(latest25Stories.map((story) => getStoryOrTitle(story, 'title')))
      .then((titles) => titles)
      .catch((e) => {
        throw new CustomError({ description: "Error fetching stories' titles", logSource: LOG_SOURCE, httpCode: 500 });
      });
    tenWordsResult = topTenWords(storyTitlesPromises.join(' ').split(' '));
  }

  if (filter === 'week') {
    const reversedLatest500stories = latest500stories.data.reverse();

    const result = await binarySearch(reversedLatest500stories);
    if (result) tenWordsResult = topTenWords((result.title as string).split(' '));
  }

  return {
    body: tenWordsResult,
    status: 200,
  };
};
