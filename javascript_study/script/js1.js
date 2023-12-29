// 객체는 반드시 변수에 저장하고 진행해야만 한다!
let a = 10
let b = '10' ;
let c= 1;

a = b+c // 101
a += a //101101

b= c //1
a += b //1011011

b= a+b+c //10110111
const array = [1,2,3,4,5]
c = c+array[2] 

const x = 10
const y = 5

function ca () {
    console.log(c+array[4]+array[0])
}

//함수생성
function xy() {
    console.log(x+(y-1)); 
    ca()
}
//함수여도 다른 함수값에 호출하면 값이 나온다
//함수  호출
xy()     

const cart = {
        img:'./img/model.jpg',
        sale:'50% OFF',
        name:'Crop top',
        fit_size:'fit_size',
        cololr:['Mineral | Black','Chocolate Brown','Cobalt Blue/Iris Blue','Evening Blue','Jewel Green','Dusk Green/Light Sage Green'],
        size:['XS','S','M','L','XL','XXL'],
        price:27.50,
        price_original:55,
        num:1
}
console.log (cart)
console.log(cart.name)
console.log(cart.cololr[2])
 //함수는 생성하고 호출을 따로 해줘야 한다.
/* 
자바스크립트에서 사용하는 괄호 개념
1. ():메서드 , 연산자 우선순위 , 배열 빈공간 ,이벤트 onclick 옆에 ,배열선언 , 객체
    메서드 :객체.메서드 ()
    연산자 : 1+(1-2)
    배열 빈공간 : new Array(2) 값이 하나일때 빈공간으로 인식
    배열 선언 :new Array (1,2) 
    함수: funtion ()
2. {} : 함수실행값, 객체선언, 
    함수 실행값 : function () {실행}
    객체선언 : let object = {속성,값,속성,값[값1,값2,값3,값4]}
3. [] : 배열생성 ,배열인덱스호출 , 불러온 DOM 객채거2갸아성알 때 인덱스 호출용
    배열생성: let 변수명 =[배열값 ,배열값,]
    배열인덱스호출: 변수명[인덱스
    DOM: (2개이상의 DOM선언후 )DOM변수명[인덱스]
*/
