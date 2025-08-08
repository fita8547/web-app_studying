import { conHello, fnPlusNumbers } from './library_name.js';

console.log(conHello,'이름으로 내보내기입니다.');
console.log('1+1=',fnPlusNumbers(1,2));


import fnMyFunction from './library_default.js';
console.log('5+6=',fnMyFunction(5,6));