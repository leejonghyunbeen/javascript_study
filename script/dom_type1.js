// let price = 1000
// let num = Number(window.prompt('구입수량은?','숫자만 입력하세요 '));
// console.log(`구입수량은${num}개 입니다`);
// console.log(`구입수량에 +1 이벤트행사중 총 수량은 ${num+1}입니다`);
// console.log(`총 가격은 ${price*num}원 입니다`);


//변수 만들기
const textInput = document.querySelector ('#text')
const numInpuut = document.querySelector ('#number')  
const resultBtn = document.querySelector ('#btn')
console.log(textInput,numInpuut,resultBtn)                                                                                                      
//함수 만들기
function func1(){
    console.log('test') 
    console.log(textInput.value)
    console.log(Number(numInpuut.value))

    console.log(typeof textInput)
    console.log(typeof textInput.value)
    console.log(typeof numInpuut)
    console.log(typeof numInpuut.value)
    console.log(Number(numInpuut.value)+1)

    let result = Number(numInpuut.value)
    console.log(typeof result)
    console.log(result+1)
}