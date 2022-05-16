export type Story = {
  id: number;
  deleted?: boolean;
  type: string;
  by?: string;
  time?: number;
  dead?: boolean;
  kids?: Array<number>;
  descendants?: number;
  score?: number;
  title?: string;
  url?: string;
};
