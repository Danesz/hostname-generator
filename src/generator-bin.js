#!/usr/bin/env node

const generate = require('./generator')
const program = require('commander')

program
    .version('1.0.0')
    .option('-w, --words [num]', 'number of words [2]', 2)
    .option('-n, --numbers', 'use numbers')
    .option('-a, --alliterative', 'use alliterative')
    .option('-o, --output [output]', 'output type [raw|dashed|spaced]', /^(raw|dashed|spaced)$/i)
    .parse(process.argv)

const options = program.opts();
let project_name = generate({words: options.words, number: options.numbers, alliterative: options.alliterative});

if (options.output == "dashed"){
    console.log(project_name.dashed);
} else if (options.output == "raw") {
    console.log(project_name.raw);
} else if (options.output == "spaced") {
    console.log(project_name.spaced);
} else {
    console.log(project_name);
}