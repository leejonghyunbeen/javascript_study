//1. 'admin' 아이디만 접근할 수 있는 페이지
let userId= 'admin'
if(userId == 'admin'){
    console.log('관리자님 어서오세요')
}

//2 'admin' 아이디 '1234' 비번관리자만 접근할 수 있는 페이지
let userPw= '1234'
if(userId=='admin' && userPw =='1234'){
    console.log('관리자님 이랴쎼마쎼!')
}
//3.사용자의 아이디를 입력받고 admin 이 아니면 '일반회원입니다' 출력
// const userIdInput =prompt ('아이디를 입력하세요')
// if(userIdInput != 'admin'){
//     console.log('일반회원입니다')
// }
// const userNum = prompt('숫자를 써주시면 짝수인지 홀수인지 맞춰볼게요')
// if(userNum%2 == 0){
//     console.log('짝수')
// }
// if(userNum%2 ){
//     console.log('홀수')
// }
// if(true){
    
// }
// if(true) >무조건 실행 해라 if(false) >무조건 하지마라

//5.10 살 이상만 탈 수 있는 놀이기구 ,나이를 물어보고  10살이하면 탑승불가

// const age = prompt('나이가 몇살이십니까')
// if(age < 10){
//     window.alert('못타용')
// }
//10살 이상이면서 키가 120 이상인 애만탈수 있는 놀이기구
// let age = prompt ('당신의나이는!')
// let height = prompt('당신의 키는!?')
// if(age>=10 && height >=120){
//     window.alert('탈수있어용~')
// }
const prinBtn =document.querySelector('#prinBtn')
prinBtn.addEventListener('click',()=>{
    let prinyQ = confirm('인쇄할까요?')
    if(prinyQ){print()}
})
//최소 구매 수량 1 , 최대 구매 수량 10
//10개 이상 구매하려고 하면 '최대 구매 수량' 입니다
const numInput =document.querySelector('#num')
const minusBtn =document.querySelector('#minus')
const plusBtn =document.querySelector('#plus')
const contents = document.querySelector('.price')
let num =1  
let price = 1000
let total = 0
//초기 수량 1 설정
numInput.value = num

//버튼 클릭시 수량 최대 10개까지 증가
plusBtn.addEventListener('click',()=>{
    if(num < 10){
        num++
        numInput.value = num        
        total =num*price
        contents.innerHTML =total.toLocaleString('ko-kr')+'원'
    }
    if(num === 10 ){
        alert('최대구매수량입니다')
    }
})
minusBtn.addEventListener('click',()=>{
    if(num>1){
        num--
        numInput.value=num
        total =num*price
        contents.innerHTML =total.toLocaleString('ko-kr')+'원'
    }

})