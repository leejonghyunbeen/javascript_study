//ES6 for
//forEach 인덱스,객체 모두출력
//for~in  index 객체의 출력
//for~of 객체 자체 출력
//const array = new Array ('html','css','javascript')
// const array = ['html','css','javascript']
const array = 'abcdefg'
const cat = {
    color:'white',
    age:2,
    name:'nabi',
}
for(let i=0; i<array.length;i++){
    console.log(i,array[i])
}
//-----------------------------------------------
// for(let i in cat){
//     console.log(i)
// }
// for(let i of cat){
//     console.log(i)
// }
// ---------------DOM메뉴 제어하기
const menu =document.querySelectorAll('nav > ul >li')
console.log(menu)

//for~in 자바스크립트 객체
//forEach, for~of 자바스크립트 DOM 
for(let i of menu){
    i.addEventListener('mouseover',()=>{
        i.style.backgroundColor = ' green'
        console.log(i.childNodes)
        i.childNodes[0].style.color = 'red'
        i.parentElement.style.border = '1px solid red'
        console.log(i.children)
    })
    i.addEventListener('mouseout',()=>{
        i.style.backgroundColor = 'white'
        i.children[0].style.color = 'skyblue'
    })
}