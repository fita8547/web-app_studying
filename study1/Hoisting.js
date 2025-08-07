//호이스팅 예시
fnSayHello();//함수 선언 보다 먼저 실행하지만 OK동작!
function fnSayHello(){
    console.log("안녕하세요1!");
}

//함수 표현식
fnSayHello2();//fnSayHello2 is not defined
const fnSayHello2 = function(){
    console.log("안녕하세요2!");
}

