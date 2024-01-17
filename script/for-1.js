//반복문 for
//for(초기값; 조건식;증감식){괄호 안 조건식이 참일때 반복실행결과}
//1~10 반복문
//for 지역함수 안에서 작성되는 변수명 = i , j , m , n
for(let i =1; i<=10; i++){console.log(`i=${i}`)}
for(let j = 5; j <=10; j++){console.log(j)}
for(let m =5; m >= 0; m--){console.log(m)}
for(let n =1; n<=10; n++){
    if(n%2==1){
        console.log(`홀수${n}`)
    }else{
        console.log(`짝수${n}`)
    }
}
//--------------------------------------------
//반복문 활용하여  study 배열값 한번에 출력
const study = ['illustor','photoshop','figma','html','css','javascript']
//i. illistor 공부
// for(let i =0; i<study.length;  i++){
//     console.log(`${i+1}.${study[i]}공부`)
// }
for(let i=study.length; i>0;i--){
    console.log(`${i}.${study[i-1]}공부`)
}
console.log('================')
const menuAll = document.querySelectorAll('nav a')
for(let i=0;i<menuAll.length; i++){
    if((i+1)%2 == 1){
        menuAll[i].classList.add('bg1')
    }else{
        menuAll[i].classList.add('bg2')
    }
}
// console.log(menuAll[i]) 
