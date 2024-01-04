//왼쪽 썸네일 이미지 js
//1. small_thimnail_a 마우스를 올리면
//2. big_thumnail -img(src) 값이 변경된다. (ex) big1 이 big 2 이미지 변경
const item_detail = document.querySelector ('.item_detail')
const small_thum =item_detail.querySelectorAll('.small_thumnail a')
const big_thum = item_detail.querySelector('.big_thumnail img')
console.log(item_detail,small_thum,big_thum)

small_thum[0].addEventListener('mouseover',function(){
    big_thum.src = "./dog_img/big1.jpg";
})
small_thum[1].addEventListener('mouseover',function(){
    big_thum.src = "./dog_img/big2.jpg";
})