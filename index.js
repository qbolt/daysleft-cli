#!/usr/bin/env node

const daysleft = require('daysleft')
const meow = require('meow')

const cli = meow(`
	Usage
	  $ daysleft [input]

	Example1 (assuming today is 12-24-2017
	  $ daysleft 12-25-2017
	  1
`)

module.exports = getDaysLeft = input => {
  try {
    return daysleft(input)
  } catch (err) {
    return err.message
  }
}

const input = cli.input
  .join('-')
  .replace('th', '')
  .replace('st', '')
  .replace('nd', '')

console.log(getDaysLeft(input))
