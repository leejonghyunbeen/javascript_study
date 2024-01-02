let price = 10000
//계산을 마친 후 마지막 출력 경우에만 toLocaleString()사용한다
console.log(price.toLocaleString('ko-kr'))
//
const in_money = document.querySelector('#bank_input')
const all_money = document.querySelector('#bank_total')
const bank_btn = document.querySelector('#bank_btn')
console.log(in_money,all_money,bank_btn)
let total = 10000
bank_total.value = total.toLocaleString('ko-kr')
bank_btn.addEventListener('click',function(){
    console.log(Number(in_money.value)+100)
    console.log(total+Number(in_money.value)+100)
    let input_total =Number(in_money.value)+100
    total += input_total
    bank_total.value =total.toLocaleString('ko-kr');
    console.log(total.toLocaleString('ko-kr'))
    in_money.value='';
})