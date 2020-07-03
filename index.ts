/**
 * Mission 01 - Detect Capital
 *
 * Given a word, you need to judge whether the usage of capitals in it is right or not.
 *
 * We define the usage of capitals in a word to be right when one of the following cases holds:
 *
 * 1. All letters in this word are capitals, like "USA".
 * 2. All letters in this word are not capitals, like "leetcode".
 * 3. Only the first letter in this word is capital if it has more than one letter, like "Google".
 *
 * Otherwise, we define that this word doesn't use capitals in a right way.
 *
 * Example 1:
 *
 * Input: "USA"
 * Output: True
 *
 * Example 2:
 * Input: "FlaG"
 * Output: False
 *
 * Develop the arrow function to perform the 3 conditions.
 *
 * Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.
 *
 * Create your own fork from the exercise "Mission 01"
 *
 */

/*let inputElement = <HTMLInputElement>document.getElementById('txtIntro');
let result = document.getElementById('result');
let isCapitalOnly = (value) => String(value.toUpperCase() === value);

inputElement.addEventListener('input', function(e) {
   (this.value.length)? result.innerHTML = isCapitalOnly(this.value): false;
});*/

/*const materials = ["USA", "Flag", "Lithium"];
materials.map(material =>
  console.log(material + "=" + String(material.toUpperCase() === material))
);*/
let str = 'USA';
console.log(str.toUpperCase() === str);

/**
 * Valid Perfect Square
 *
 * Given a positive integer num, write a function which returns True if num is a perfect square else False.
 *
 * Note: Do not use any built-in library function such as sqrt.
 *
 * Example 1:
 *
 * Input: 16
 * Output: true
 * Example 2:
 *
 * Input: 14
 * Output: false
 */

/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = num => {
  let lo = 0;
  let hi = num;

  while (lo <= hi) {
    const mid = (lo + hi) >>> 1;

    if (mid * mid === num) {
      return true;
    } else if (mid * mid < num) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return false;
};

export { isPerfectSquare };