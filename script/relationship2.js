const header = document.querySelector('header');
const headerchild = header.childNodes;
console.log(header,headerchild);

console.log(headerchild[1])
console.log(headerchild[3])
console.log(headerchild[1].innerText);
console.log(headerchild[1].innerHTML);
console.log(headerchild[3].innerText);
console.log(headerchild[3].innerHTML);

// headerchild[0].innerText = "로고";
console.log(headerchild[1].childNodes[0]);
headerchild[1].childNodes[0].innerText = '로고';
headerchild[1].childNodes[0].innerHTML = '로고로고';

// menu1 마우스 올리면 menu1 -> 메뉴1 글자변경
/* 
1. MENU1 변수 생성 (h1-a가 아닌 nav-a만 잡는 방법 (콘솔 체크))
2.1-1. (위 변수 생성이유) 마우스 올리는 대상 ,변경글자
2.변수 이용 이벤트 핸들러 addEventLishtener
2-1. 마우스 올리면 이벤트 종류 찾기
2-2 마우스 올렸을 때 실행 결과 이벤트 내 function 안에 작성 준비
3.글자를 변경하는 속성이 뭔지 체크 문법에 맞춰서 작성
3-1 객체 ,속성 = "값" 속성 값 변경하는 문법
*/
const nav = document.querySelector('nav')
const navchild = nav.childNodes;
console.log(nav,navchild);
console.log(nav.childElementCount) // lenght와 동일하게 1부터 셈
console.log(navchild[1].childNodes[0])
navchild[1].addEventListener('mouseover',function(){
    navchild[1].innerText='히히';
})

// menu2 마우스 올리면 menu2 -> 메뉴2 글자변경
console.log(nav,navchild);
console.log(navchild[3].childNodes[0])
navchild[3].addEventListener('mouseover',function(){
    navchild[3].innerText='히히';
})
//main - 장바구니 아이템의 개수를 자동으로 측정하여 main span .all 노드에 해당 개수 출력하기

//1. main-cart 변수생성
//2. span.all변수 생성하기
//3. main-cart 의 자식 item 개수 체크
//4. span.all 변수에 위(3)번 값 대입하기

const main =document.querySelector('main')
const cart = document.querySelector('.cart')
console.log(cart)
const all = document.querySelector('span.all')
console.log(all)
const cart_item_count = cart.childElementCount
console.log(cart_item_count)
all.innerText = cart_item_count;


