const target = document.querySelector('.target')
const ul =document.createElement('ul') //태그 생성
let li = document.createElement('li')
let span = document.createElement('span')
console.log(target,ul,li)

for(let i=0;i<3;i++){
    li =document.createElement('li')
    li.innerHTML +=`list${i+1}`
    console.log(li)
    for(let j=0;j<2;j++){
        li.innerHTML += `<span>상품${j+1}</span>`

/*      span = document.createElement('span')
        span.innerHTML += `상품${j+1}`
        console.log(span)
        li.appendChild(span) */
    }
    ul.appendChild(li)
}
target.appendChild(ul)

//tarher-ul-<li>-<span>상품<span>*2-</li>
let dt =document.createElement('dt')
let dd = document.createElement('dd')
const target2 = document.querySelector('.target2')
// console.log(target2)
// dt.innerHTML = '연희'
// target2.appendChild(dt)
// for(let n=0; n<2 ;n++){
    //     dd = document.createElement('dd')
    //     dd.innerHTML += '허허,,,,'
    //     target2.appendChild(dd)
    // }
for(let j=0;j<2;j++){
    dt = document.createElement('dt')
    dt.innerText = '헤헤'
    target2.appendChild(dt)
    for(let m=0;m<2;m++){
        dd = document.createElement('dd')
        dd.innerHTML = '후후'
        target2.appendChild(dd)
    }
}

