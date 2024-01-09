// 이항연산자
let x = 5;
let y = x+10;
console.log(`x=${x},y=${y}`) 

// 목표 ) 이항연산 피연산자를 2개 적고 "=" 버튼을 클릭하면 결과값 출력하기
//1. 변수선언(va1,va2,calcBtn,restlt)
//2. calcBtn 클릭 이벤트
//2-1 val1,val2 값 가져옥 
//2-2 위 값을 더하기
//2-3 result 잡기
//2-4 위 대상 결과 출력
const calc1 = document.querySelector('#calc1')
const val1 =calc1.querySelector('#val1')
const val2=calc1.querySelector('#val2')
const calcBtn = calc1.querySelector('#calcBtn')
const result =calc1.querySelector('.result')
let total = 0
console.log(val1,val2,calcBtn)
calcBtn.addEventListener('click',function(){
    //위값더하기
    total = Number(val1.value)+Number(val2.value)
    result.innerHTML=total.toLocaleString('kr-ko')
})
console.log('----------------------------------------------------------')
console.log(6/2)
console.log(6%2)

const num1 = 10;
let num2 = 3;
let total1 = num1 / num2
/* 나머지는 0또는 1로 이 대부분 */
console.log(total1)

let a = 10
let b = 20
let c = 30
let d = 40
console.log(a,b,c,d)
a++//11
b--//19
c++//31
d--//39
console.log(a,b,c,d)
a = ++b // 21 ,20
b = a++//  31 ,39
console.log(a,b,c,d)
c = a+b//  c= 42
d = ++c//  d= 42
console.log(a,b,c,d)
a = ++c +10 //   53 42 
b = --d + 1 //   43 41 
console.log(a,b,c,d)
/* let a = 5;
let b = a--;
console.log(`a=${a},b=${b}`) // 
 */