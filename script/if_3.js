const userId = document.querySelector('#userId  ')
console.log(userId)

userId.addEventListener('blur',()=>{
    //조건 : id 가 admin 이면 관리자 환영 ,아니면 일반회원화녕
    if(userId.value =='admin'){
        console.log('관리자환영')
    }else{
        console.log('허허 일반회원이시군?')
    }
})