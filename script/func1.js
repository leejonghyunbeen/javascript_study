/* //함수 스코프
//지역변수와 전역변수
let b =20
let c =30
let a = '';
function scope1(){
    a += 10
    console.log(a,b,c)
    scope1() //함수 호출 위치는 생성위치와 관계없다
}
console.log(a+b+c) //함수 호출전 :nudefind+ 20+ 30 =NaN */

//함수 스코프 연습
let x = 1
let y
function func1() {
    y =5
    console.log(x+y)
}
function func2(){
    let z = 10
    console.log(x+y+z)
}
func1()
func2()
console.log('-------------------')
const btn =document.querySelector('#btn')
const btn2 =document.querySelector('#btn2')
console.log(btn)
/* btn.addEventListener('click',function(){
    console.log('결과 테스트')
}) */
function testFunc () {
    console.log ('결과테스트')
}
btn.addEventListener('click',testFunc)
btn2.addEventListener('click',testFunc)
//이벤트 함수 개별 선언 연습
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const num = document.querySelector('#num')
const priceResult = document.querySelector('.price')
let number = 1
let price =4000

function minus1 (){
    number > 1 ? number -- : alert('최소 구매 수량입니다')
    num.value = number
    priceResult.innerHTML = (number*price).toLocaleString('ko-kr')+'원'
}
function pls (){
    number < 10 ? number++ : alert('최소 구매 수량입니다')
    num.value = number
    priceResult.innerHTML = (number*price).toLocaleString('ko-kr')+'원'
}
minus1()
pls()
minus.addEventListener('click',minus1)
plus.addEventListener('click',pls)
