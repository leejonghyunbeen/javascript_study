//Q . 4개 버튼 클릭시 '접근불가 '공통 메세지 띄우기
// 로그인 (콘솔) 구매하기 (팝업)장바구니(body) 관리자페이지 (팝업)
const login_btn = document.querySelector('#loginBtn')
const buyBtn=document.querySelector('#buyBtn')
const cartBtn=document.querySelector('#cartBtn')
const adminBtn= document.querySelector('#adminBtn')
console.log(login_btn,buyBtn,cartBtn,adminBtn)
function inaccessible (str) {
    return str + "접근불가 !!이건 어떤가 헤헤 나는 불사신이라네~"
}
login_btn.addEventListener('click',function(){
    console.log(inaccessible('로그인'))
})
buyBtn.addEventListener('click',function(){
    window.alert(inaccessible('구매하기'))
})
cartBtn.addEventListener('click',function(){
    document.write(inaccessible('장바구니'))
})
adminBtn.addEventListener('click',function(){
    window.alert(inaccessible('페이지'))
})
