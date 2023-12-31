const fs = require("fs");
const { EOL } = require("os");
/**
 * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
 */
function read() {
  const puz = fs
    .readFileSync(`${__dirname}/puzzles.txt`, "utf-8")
    .trim()
    .split(EOL)
    .map((el) => el.split(""));

  let puzRes = puz.map((el) => {
    let res = [];
    for (let i = 0; i < el.length; i += 9) {
      res.push(el.slice(i, i + 9));
    }
    return res;
  });
  console.table(puzRes[0]);
}
read();
function solve() {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции read.
 * Возвращает игровое поле после попытки его решить.
 */

function isSolved() {
  const p = read();
  function isEmpty(el) {
    if (el === "-") {
      return true;
    }
    return false;
  }
  console.log(isEmpty(p));
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}
isSolved();

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
