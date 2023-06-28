import { suma, multiplica } from './controller.js';
import chalk from 'chalk';

const log = console.log;
let sum = suma(2,10);
let mul = multiplica(2,5);

log(chalk.gray.underline.bold('Hello world!'));
log(chalk.blue(`2 + 10 = ${chalk.green.underline.bold(sum)}`));
log(chalk.red(`2 * 5  = ${chalk.green.underline.bold(mul)}`));
