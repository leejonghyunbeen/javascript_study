//반복문 for
//for (초기값; 조건식;증감식){조건이 참일 때 실행 반복결과} 조건거짓일때 종료되는 for문 위치
let data = [10,20,30,40,50]
let result = 0;
for(let i=0 ; i<data.length; i++){
    console.log(data[i])//배열 값 반복출력
    result += data[i]
}
console.log('총 배열의 합은'+result)
//continue, break 
for(var j=1;j<=10; j++){
    continue /* 얘는 for를 중지시키는게 아니라 continue 아래있는것만 비활성화 */
    console.log(`j:${j}`)
}console.log(`for 조건식이 거짓으로 나오는 순간 결과는 ${j}`)
//다중 반복문 for -for  2단 for문 
let total = 0
for(let i=1; i<6; i++){  //1에서 5로 반복하는 1단 반복문 
    console.log(`i=${i}`)
    //2단for 시작
    console.log('-----------------------------------')
    for(let m=1; m<4;m++){
        console.log(`m=${m}`)
        total += m
    }
    console.log(`total=${total}`)
    console.log('-----------------------------------')
}//2단 for 종료