//DOM 관계속성
/* 
1.parentNode 부모 노드 , parentElement 부모요소
    - parentNode.parentNode 연속사용 ( 부모의 부모 잡기)
    - 자식 또는 자손노드 .parentElement (특정 자식의 부모 잡기)
2.  javascript 에서  css 제어하기 -> style 속성
    DOM.관계.style
    -DOM.관계.style = "속성:값; 속성:값 ; 속성:값;"  
    *(위)style 2번이상 생성 시 이전 속성 :값 제거됨
    -DOM.관계.관계.style.속성 = "값";
    *(위)style 2번 이상 생성 시 기존 속성값에 이어서 추가됨
    -DOM.style.속성 = "값"
    -위 관계는 필요에 따라 선택 속성
*/
//24/1/3 자식노드 제어하기 
//childNodes, children,childElementCount
const header = document.querySelector('header')
const main = document.querySelector('main')
const footer = document.querySelector('footer')
console.log(header,main,footer)
//변수 정상 작동 확인
//빨강 error,undefined,null 출력 없이 올바른 Node 출력이 되는지!
const headerText = header.childNodes;

console.log(headerText)  //텍스트 노드 인덱스 출력
console.log(headerText[0]);//"header"
console.log(headerText[0].data);
console.log(headerText[0].length);//글자수
console.log(headerText[0].baseURI);// 경로

//main

const maintext = main.childNodes;

console.log(maintext);
console.log(maintext[0]);
console.log(maintext[0].baseURI);
console.log(maintext.length);