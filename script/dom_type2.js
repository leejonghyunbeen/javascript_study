const num = document.querySelector ('#num')
const numBtn = document.querySelector('#numBtn')
console.log(num,numBtn)
function plus () {
    // console.log(num.value) //값출력확인
    // console.log(num.value+1) //더하기 출력 확인
    // console.log(typeof num.value) //데이터 확인 
    // console.log(Number(num.value)+1) //더하기 확인
    // num.value = Number(num.value)+1
    let result = Number(num.value)
    num.value = result +1
}