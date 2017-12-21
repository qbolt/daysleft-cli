#!/usr/bin/env node
const meow = require('meow');
const daysleftCli = require('.');

const cli = meow(`
	Usage
	  $ daysleft [input]

	Example1 (assuming today is 12-24-2017
	  $ daysleft 12-25-2017
	  1
`);

console.log(daysleftCli(cli.input[0]));
