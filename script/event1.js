const btn1 = document.querySelector('#btn1')
console.log(btn1); //변수가 정상적으로 등록됬는가 확인

btn1.addEventListener('mousemove',function(){
    console.log('hello btn1');
}) 
//btn2 클릭시 윈도우 답변창으로 1+1을 물어보고 그결과 팝업으로 출력
const btn2 = document.querySelector ('#btn2')
console.log(btn2)

btn2.addEventListener('click',function(){
    const pq = Number(window.prompt('1+1'));
    window.alert(pq+1)
})
//btn3 누를 시 구글 주소로 바로가기
const btn3 = document.querySelector('#btn3')
console.log(btn3)
btn3.addEventListener('mousedown',function(){
    window.location.href='https://google.com'
})
// 저기 funtion은 익명함수 ,콜백함수 
// 인증확인 버튼 클릭 시  input 에서 입력한 값이 팝업창으로 출력
// 출력 메세지 예) 0000입력 확인 되었습니다!
const certied_btn = document.querySelector('#certied_btn')
const text = document.querySelector('#text')
console.log(certied_btn,text);

certied_btn.addEventListener('click',function(){
    console.log('.')
    console.log(text.value)
    window.alert(`${text.value} 입력 확인 되었습니다.`)
})

//총 수입 버튼을 클릭시 월급 + 보너스 더한 결과가 팝업으로 출력
const answer_btn = document.querySelector('#answer_btn')
const result = document.querySelector('#result1')
const result2 = document.querySelector('#result2')
console.log(answer_btn,result,result2)

answer_btn.addEventListener('click',function(){
    console.log('')
    console.log(result.value,result2.value) // 계산이 안되는 이유? -> type of() ->string -< 문제해결 numver
    let total = Number(result.value)+Number(result2.value);
    console.log(total) //결과 변수 정상 작동 확인
    window.alert(`총수입은${total} 원 입니다`)
})
//자바스크립트 은행
//입금전 잔액 : 10000원  버튼 클릭전 보이는 값
//입금액은 자유 입금시 마다 + 100원이 더해져서 총 잔액에 포함
//입금 시 잔액 포함은 버튼 클릭 시 시행되는 구조

const in_money = document.querySelector('#bank_input')
const all_money = document.querySelector('#bank_total')
const bank_btn = document.querySelector('#bank_btn')
console.log(in_money,all_money,bank_btn)
let total  = 10000
bank_total.value = total
bank_btn.addEventListener('click',function(){
    console.log('.')//버튼 동작 확인
    console.log(Number(in_money.value)+100)//더하기 결과 확인
    console.log(total+Number(in_money.value)+100) // 총잔액 더하기 결과
    let input_total = Number(in_money.value)+100 //입금액 + 이자
    total += input_total; //total= total +innput_total
    bank_total.value =total;
    in_money.value='';
















    
})