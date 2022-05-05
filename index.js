var globalVar = 'global';

// globalVar Console 로 찍어 봄
// 개발자 도구에서 globalVar 는 Window 객체에 속하게 됨
console.log(globalVar);
// window 객체에 속하여 있어 window.globalVar 로 콘솔에 찍히게 도미
console.log(window.globalVar);

// 헤더
// 파일을 나누면 코드 스코프도 나뉘는게 아닌가 ?
// 파일을 나누어도 스코프는 나뉘지 않음

// setTimeout 을 콘솔에 찍힐 시 window 객체를 건드려
// browser API 이기에 코드 에러를 내뱉지 않음
// 나중에 찾기 까다로움
// var setTimeout = 'setTimeout';

// 변수도 만들 수 있고 함수도 만들 수 있지만 에러가 안난
// 찾기 굉장히 까다로움 --> 전역 공간을 나도 모르게 더럽힘
// 밑에 윈도 객체 작동 안함 !!
// function setTimeout() {
//     console.log('setTime Func !');
// }

window.setTimeout(() => {
    console.log('1 초후에 콘솔 작동');
}, 1000);

setTimeout(() => {
    console.log('set Time Out 3 초')
}, 3000)

const array = [10, 20, 30];

// var 를 사용시 전역 공간을 헷갈리게 되므로 let 과 채ㅜㄴㅅ tkdyd rnjswkd
for(var index=0; index<array.length; index++) {
    const element = array[index];
}


// IIFE --> 즉시 실행 함수
// Module
// Closure
// const / let 으로만 바꾸어 줘도 전역공간을 지켜줄 수있음



