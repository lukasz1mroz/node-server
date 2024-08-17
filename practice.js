// // Event loop

// import fs from 'fs'

// setTimeout(() => {
//   return new Promise((resolve, reject) => {
//     console.log('testTimout')
//     resolve('test')
//   })
// }, 1000)

// console.log('console test 1')

// setImmediate(() => {
//   return new Promise((resolve, reject) => {
//     console.log('testImmediate')
//     resolve('test')
//   })
// }, 1000)

// console.log('console test 2')

// new Promise((resolve, reject) => {
//   console.log('testPromise')
//   resolve('test')
// })

// fs.readFile('test.js', (err, data) => {
//   console.log('fs.readFile')
// })

// // Types

// const testNum = 1
// const testNumStr = '1'
// const testBinNumStr = '0001'

// const numToStrBin = testNum.toString(2)
// const numToStr = testNum.toString(10)
// const strToNum = parseInt(testNumStr)
// const binStrToNum = parseInt(testBinNumStr, 2)

// console.log('nums: ', numToStrBin, numToStr, strToNum, binStrToNum)

// const testStr = 'test 123'
// const regex = /\w*/gi

// console.log('regex: ', regex.test(testStr), testStr.match(regex), regex.exec(testStr))

// // Copying

// const testObj = {
//   a: 1,
//   b: {
//     c: 2,
//   },
// }
// const testObj2 = {...testObj}
// const testObj3 = JSON.parse(JSON.stringify(testObj))

// testObj2.b.c = 3
// testObj3.b.c = 4

// console.log('objs: ', testObj, testObj2, testObj3)

// // Scopes

// var a = 5
// var a = 7

// function test1() {
//   if (true) {
//     var a = 8
//     var x = 10
//     let y = 20
//   }
//   console.log('var: ', x, 'var-out: ', a)
//   //console.log('let: ', y)
// }

// test1()
// // console.log('var-in: ', x)

// console.log('var-hoised: ', c)
// //console.log('let-hoised: ', d)
// var c = 3
// let d = 4
// const e = 3
// //e = 4
// console.log('const-hoisted: ', e)

// // Context

// console.log('this-glob: ', this)

// function test2() {
//   console.log('this-func: ', this)
// }

// const obj = {
//   a: 1,
//   func: () => console.log('this-obj: ', this, this.a),
// }

// test2()
// obj.func()

// // Async

// function fetchData(callback) {
//   setTimeout(() => {
//     callback('data fetched')
//   }, 1000)
// }

// function handleData(data) {
//   console.log(data)
// }

// const testPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log('promise-ok')
//     res('promise-ok')
//   }, 1000)
// })

// async function awaitProm() {
//   await testPromise
//   console.log('prom awaited')
// }

// fetchData(handleData)
// awaitProm()

// // Closures - data privacy, func factories, async state

// function outerFunc() {
//   const outer = 'outer'

//   function innerFunction() {
//     console.log('outer: ', outer)
//   }

//   return innerFunction
// }

// const inner = outerFunc()
// inner()

// // Browser vs node  - DOM, APIs, env control, modules

// import {test} from './module.js'
// const module = require('./module.js')

// console.log('module-tst: ', test)
