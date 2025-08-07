const fnPlusNumbers = (pNum1, pNum2) => {
    return pNum1 + pNum2;
}
console.log(fnPlusNumbers3(1, 3));

const fnPlusNumbers2 = (pNum1, pNum2) =>{
    return pNum1 + pNum2;
}
console.log(fnPlusNumbers2(1, 3));

const fnPlusNumbers3 = (pNum1, pNum2) => pNum1 + pNum2;
console.log(fnPlusNumbers3(1, 3));

const fnPlusNumbers4 = pNum1 => pNum1 + 1;
console.log(fnPlusNumbers4(1));

const fnPlusNumbers5 = () =>"안녕하세요!";
console.log(fnPlusNumbers5());
