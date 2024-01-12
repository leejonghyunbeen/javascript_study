const btn =document.querySelector('#btn')
console.log(btn)

btn.addEventListener('click',function(){
    console.log(this)
    console.log(this.type)
    console.log(this.id)
    // this.style ='background-color:yellow'
    // btn.style = 'border:1px soild red'
    this.style.backgroundColor = 'yellow'
    this.style.border= '1px soild red'
    this.innerText='클릭'
})

//객체, 변수 ,선언과 this
const ob =[{
    w:50,
    h:100,
    func:function(){
        // return `w:${ob[0].w},h${ob[0].h}`
        return `w:${this.w},h${this.h}`
    }
},{
    w:80,
    h:40,
    func:function(){
        return `${this.w+this.h}입니당`
    }
}]
console.log(ob[0])
console.log(ob[0].w)
console.log(ob[0].func())
console.log(ob[1].func())
console.log('==================================')
//ES6 화살표 함수
function japangi(){
    return'음료수 출력'
}
console.log(japangi())
const japangi_v2 = ()=>{
    return`음료수 v2 `
}
console.log(japangi_v2   )
//화살표 함수 atter
//function 생략
//const 익명함수  = () => {함수 실행값} 
//DOM.addEventListener('이벤트,()=>{함수 실행 값})
btn.addEventListener('mouseover',()=>{
    console.log('over')
    btn.style.color = 'red'
})

const bab = (target)=>{
    return target+'밥'
}
console.log(bab('녹두'))
console.log(bab('녹미'))
console.log(bab('찰'))