#!/usr/bin/env node

const justNu = require('just-nu');
const colour = require('colour');

console.log(colour.yellow('  ---------------------  '));
console.log(colour.yellow('  A F T O N B L A D E T  '));
console.log(colour.yellow('  ---------------------  '));
console.log('\n');

async function doTheStuff () {
  const { count, topics } = await justNu();

  console.log(colour.white(`  Antal ${'JUST NU'.bold} just nu:`), colour.cyan(count));
  console.log('\n');

  for (let topic of topics) {
    let header = 'JUST NU:'.red.bold;

    console.log(`  ${header} ${topic.split(': ')[1]}`);
  }

  console.log('\n');

  process.exit(0);
}

doTheStuff();
