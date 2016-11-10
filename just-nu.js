#! /usr/bin/env node

/* eslint-env node */
/* eslint no-console: 0 */

const justNu = require('just-nu');
const colour = require('colour');

console.log(colour.yellow('  ---------------------  '));
console.log(colour.yellow('  A F T O N B L A D E T  '));
console.log(colour.yellow('  ---------------------  '));
console.log('\n');

/**
 * Prints to console.
 *
 * @param {Number} count - Number of "JUST NU :"s to reportAndClose
 * @param {String[]} topics - Array of topics as strings to list in console.
 */
function writeAndClose (data) {
  const { count, topics } = data;

  console.log(colour.white(`  Antal ${'JUST NU'.bold} just nu:`), colour.cyan(count));
  console.log('\n');

  for (let topic of topics) {
    let header = 'JUST NU:'.red.bold;

    console.log(`  ${header} ${topic.header}`);

    for (let subtitle of topic.subtitles) {
      let symbol = colour.red(subtitle.symbol);

      console.log(`    ${symbol} ${subtitle.subtitle}`);
    }
  }

  process.exit(0);
}

justNu(data => writeAndClose(data));
