const { log } = require("console");
const fs = require("fs");
const { EOL } = require("os");

function read() {
  const txt = fs.readFileSync(`${__dirname}/puzzles.txt`, "utf-8").match(/.{9}/g)
  // const txt1 = txt.map((el) => el.split(EOL)).join('')
       
   const newarr = txt.map((el) => el.split(''))
   


  }

console.log(read());




function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}





//   const txt = fs.readFileSync(`${__dirname}/puzzles.txt`, "utf-8").split('')

// const newarr = txt.match(/\.{9}/g);

// console.log(newarr);


