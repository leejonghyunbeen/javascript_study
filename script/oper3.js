//문자열 연산자 (피연산자 중 하나라도 문자일 경우)
console.log('hello'+'world')
console.log('1'+2)
console.log(10+'Number()')
console.log('nun'+(2+2)+'ber')
console.log('안녕하세요'.length)
//문자열 +삼항연산자
//textarea 영역에 100자 이상을 쓰고 리뷰 등록 버튼 클릭 하면 '등록'팝업 출력
//textarea 영역에 100자 이하를 쓰고 리뷰 등록 버튼 클릭시 100자이상 쓰세요 팝업 출력
const re = document.querySelector('#reiew #re')
const reiviewBtn = document.querySelector('#reiew #reiviewBtn')
let result;
console.log(re,reiviewBtn)
reiviewBtn.addEventListener('click',function(){
    console.log(re.value)
    console.log(re.value.length)
    result = re.value.length >100  ? '등록':'100자이상입력하세요'
    window.alert(result)
})