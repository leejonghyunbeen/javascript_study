//"안녕" chat_txt에 입력 후 send_btn을 클릭하면
// chat_list 에 <li>태그로 chat_txt에 입력한 "안녕"값을 출력하기
const contents = document.querySelector("#chat .chat_list")
const btn = document.querySelector("#chat .chat_send #send_btn")
const mola = document.querySelector('#chat .chat_send #chat_txt')
const send_create = document.createElement('ul')
console.log(contents,btn)
btn.addEventListener('click',function(){
    send_create.innerHTML +=`<li>${mola.value}</li>`
    contents.appendChild(send_create)
    mola.value='';
})