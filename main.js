import readline from 'readline'

import evaluate from './lib/evaluate.js'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '-> hey mom '
})

rl.write('hello welcom e to mom please get zucchine thax. please start  program ok\n')
rl.prompt()

let state

rl.on('line', line => {
  if (!state) state = evaluate(line)
  else state = evaluate(line, state)
  rl.prompt()
})
