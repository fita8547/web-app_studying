const conHello = "안녕하새요";
const fnPlusNumbers = (pNum1, pNum2) => pNum1 + pNum2;

export { conHello, fnPlusNumbers };

import * as mylibrary from './library_name.js';
console.log(mylibrary.conHello,'*을 사용한 이름으로 내보내기입니다!');
//import * as 라이브러리 이름 from 라이브러리 경로 방식

