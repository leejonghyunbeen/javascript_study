let number1 = 10;
let number2 = 20;
let result;
number1--;// 9
console.log(number1)
number1++; // 10
console.log(number1);
result=number2++; //20  number2 21
console.log(result)
result=++number2;//22
console.log(result);
console.log('---------------------------------------')
result =  result++  // 22
console.log (result)
number2 = number1 +result++  //
console.log(number2)// 32
//복합대입연산자
let number  = 10 ; 
number += 5; // number = number+5
console.log(`변경값${number}`)
number -= 5; // number = number-5
console.log(`변경값${number}`)
number *= 5; // number = number*5
console.log(`변경값${number}`)
number /= 5; // number = number/5
console.log(`변경값${number}`)
number %= 2; // number = number%2
console.log(`변경값${number}`)
//삼항연산자
// 조건 ? 조건값 참일 때 실행 결과 : 조건값 거짓일때 실행 결과
//조건의 따라 참 과 거짓을 구분하는데 사용 되는 연산자
//= 대입연산자
// ==비교연산자 (같다)
let x = 5;
let y = 10;
x=y
let restlt_xy = x==y ?'x와y는 같다':'x와y는 다르다';
console.log(restlt_xy)
console.log('-----------------------')
let age = window.prompt('몇살이세요')
// age 입력받은 데이터가 18살 이상이면 성인 아니면 미성년자 콘솔값 출력
let result_age = age >= 18 ? '성인':'미성년자'
console.log(result_age)
//객체 + 상향연산자
let user = [
    {
        name:'lee',
        score:80, //조건
    },{
        name:'kim',
        score:90, //조건
    }
]
// 최고점수 받은 학생의 이름 저장 변수
const max_scroe_name = user[0].score > user[1].score ?user[0].name :user[1].name;
console.log(`이번 달 1등 학생은 ${max_scroe_name}님입니다.`)
