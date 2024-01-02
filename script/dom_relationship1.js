//DOM의 부모잡기 : parentNode, parentElement
const aNode = document.querySelectorAll('nav a') 
console.log(aNode, aNode[0],aNode[1]);
console.log(aNode[0].parentNode);
console.log(aNode[1].parentNode);//nav
console.log(aNode[0].parentElement)//nav
console.log(aNode[0].parentElement.parentElement)//haeder
console.log(aNode[1].parentNode.parentNode)//header

aNode[0].addEventListener('mouseover',function(){
    //nav 배경색 노랑
    aNode[0].parentNode.style='background-Color:yellow';
    aNode[0].parentNode.parentNode.style='background-Color:skyblue';
    //header 배경색 하늘
})
aNode[0].addEventListener('mouseout',function(){
    aNode[0].parentNode.style.background = 'none'
    aNode[0].parentNode.parentNode.style.background = 'none';
})
//-------------------------------javascript에서  CSS 동적 설정 
//객체 속성(css) 이벤트 메서드
//객체.속성
//자바스크립트에서 css를 적용할 땐 인라인 스타일로 적용된다
//인라인스타일은 모든 스타일 기준 가장 우선수위가 높으므로 기존 css 파일에 디자인 되어있는 속성이 있을때 그값보다 우선 적용된다
//  
//객체.객체.속성 = '속성:값;' 속성:값; 속성:값;'
// aNode[1].parentNode.style.backgroundColor = 'aqua';
// aNode[1].parentNode.style.border = '3px soild blue';
// aNode[1].parentNode.style.transform = 'rotate(10deg)';
//객체.객체.속성.속성 = '값'         한가지값만쓸수있다
