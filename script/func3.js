// function japang1 (){
//     console.log('콜라')
// }
// function japang2 (){
//     console.log('사이다')
// }
// japang1()
// japang1()
// japang2()

//콜라와 사이다  필요한 음료수를 자유롭게 뽑을 수 있는 자판기! 
function japang1(drink){//드링크라는 매개변수 생성 let drink;와 동일
    console.log(drink)
}

japang1("콜라")
japang1("사이다")
japang1("환타")

function japang1_v2(drink,num){
    console.log(drink+num+'개 나왔습니다')
}
japang1_v2("탄산수",2)
japang1_v2("콜라",15)

//Q. 피연산자 2개가 항상 더해져서 결과가 나오는 함수 만들기
function cale1 (num1,num2) {
    console.log(num1+num2)
}
cale1(50,50)
//피연산자 2개와 산술연산자를 설정해서자유로운 계산이 가능한 함수만들기
let result 
function cale2 (num1,num2,oper){
    result = oper=='*'? num1*num2 :null;
    console.log(`${num1}${oper}${num2} = ${result}`)
}
cale2(50,50,'*')

console.log('--------------------------------')
//함수의 return 함수의 데이터값 반환
let total = 0
function func1 (num){
    return total
    total = num+1
}
console.log(total)
console.log(func1(5))
window.alert(func1(10))
