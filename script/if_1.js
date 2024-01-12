console.log(true) // true == '참' ==1
console.log(false) //flase =='거짓' ==0
console.log('false')
console.log(true+1)// 
console.log(true+true) 
console.log(true+false)
console.log(true+true+'true')
console.log(typeof true) //boolean 
console.log(typeof(true+true))
console.log(typeof (false+10))
console.log('===========================')
console.log("42"== 42) //true
console.log("42"=== 42) //flase (데이터 타입이 다르기 떄문)
console.log(10 != "10")//flase(자료가 같기 때문에 데이터타입 무시)
console.log(10 !== "10")//true(데이터 타입이 다르기 떄문)
console.log(5 < 7)//true
console.log(5 > 7)//flase
console.log('a' < 7)//
console.log(10 <=20 ) //true
console.log(10 >=20 ) //false
console.log('===========================')
let a = true
let b = false

let result



//논리연산자란?
//비교연산 또는 논리데이터를  좌우 두 값으로 두고 논리적으로 비교하는 연산자
result = a && b//true && false = false
console.log(result)
result = a || b//true||false =true
console.log(result)

console.log(!a)//반전  true ->반전 false
console.log(!b)//반전 false ->반전 true
console.log(a,b) //원본데이터 영향 x
//논리연산자 우선순위
//NOT>>AND>>OR
result = !(true || false) && !false;
console.log(result)
console.log("=======================")
//조건문
//1.목표새우기 (날씨가 맑으면 산책 간다)
//1-1 세부 목표 나누기
//1-2 조건 :날씨가 맑으면
//1-3 조건 참일 때 실행 :산책간다
//2.조건문 문법 정리
//2-1 .조건 :if (날씨가 맑으면)
//2-1-1 .조건 결과가 논리데이터로 나오도록 비교연산자 사용 : if(날씨 == 맑다)
//2-2 조건 참일 때 실행 :실행 매서드 결정
//2-2-1 window.arert(산책)
//=====================================
//1.목표 세우기 (날씨가 흐리지 않으면 운동 한다)
//1-1 세부 목표 나누기
//1-2 조건 :날씨가 흐리지않으면
//1-3 참일때 : 운동한다
//2 조건문 문법 정리
//2-1 조건 if(날씨가 흐리지 않으면)
//2-1-1조건 if (날씨 != 흐림)
//2-2조건이 거짓일때 실행
//2-2-1 window.arert (운동)
//========================================
//1.목표 세우기 (하루 걸음 수가 5천 걸음이상이면 간식을 먹는다)
//조건:하루 걸음수가 5천걸음 이상이면
//실행 :간식을 먹는다.
//조건 if (하루 걸음수 >= 5000)
// window.arert (간식을 먹는다)
const x = 20;
const y = '20';

//1.x는 y보다 작을때 참
if(x<y){
    console.log('x는y보다 작다  ')
}

//2.x가y와 다를 때 
if(x!==y){
    console.log('x는 y와 다르다')
}
//3. x와y가 같으면 참!
if(x == y){
    console.log('x는y와 같다')
}