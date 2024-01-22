//채팅창 숨기기
//챗봇 상담 클릭하면 채팅창 나타나기(아래->위로 자연스럽게 나타나기)
//챗봇 상담 클릭 시 보이면 숨기기 / 안보이면 보이기
const chat_container = document.querySelector('#chat_container');
const chatMessages = document.querySelector('#chat_message');
const userInput = document.querySelector('#user_input input');
const chatBtn = document.querySelector('#chat_btn');
const robotBtn = document.querySelector('#robot');
const apiEndpoint = 'https://api.openai.com/v1/chat/completions'
const apiKey = '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';

chat_container.classList.add('hide')
robotBtn.addEventListener('click',()=>{
    chat_container.classList.toggle('hide')
    chat_container.classList.toggle('show')
})

// api ai 연결
async function fetchAIResponse(prompt) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: prompt
            }, ],
            temperature: 0.3,
            max_tokens: 400,
            top_p: 0.3,
            frequency_penalty: 0.5,
            presence_penalty: 0.5,
            stop: ["Human"],
        }),
    };
    try {
        const response = await fetch(apiEndpoint, requestOptions);
        const data = await response.json();
        const aiResponse = data.choices[0].message.content;
        return aiResponse;
    } catch (error) {
		console.error('OpenAI API 호출 중 오류 발생:', error);
        return 'OpenAI API 호출 중 오류 발생';
    }
}

//질문 입력 후 전송 버튼 클릭 하면 자바스크립트
chatBtn.addEventListener('click', async()=>{
    let message = userInput.value
    addMessage('you',message)
    userInput.value = ''
    //AI쪽
    let aiMessage = await fetchAIResponse(message)
    addMessage('AI',aiMessage)
})

//enter event
userInput.addEventListener('keydown',(e)=>{
    if(e.keyCode === 13){
        chatBtn.click(); //버튼 강제 클릭
    }
})
//value 값으로 받은 메세지가 처리되는 함수
function addMessage(target, contents){
    const messageElement = document.createElement('div')
    messageElement.classList.add('message')
    messageElement.innerHTML = `${target} : ${contents}`
    chatMessages.appendChild(messageElement)
}