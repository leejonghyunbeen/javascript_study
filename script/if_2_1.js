//조건문 if (조건식){조건식 참 실행결과}else{조건식 거짓 실행결과}
// const qa = prompt('이동 방향을 입력하세요','왼쪽,오른쪽,가운데 중 하나로 입력')
//논리연산자(&&(and),||(or),!(not)) 활용 조건식 단축하기
// 비교 && 비교 =둘다 참이여야 참 결과
//비교 || 비교 =둘 중 하나만 참이어도 참 결과
// if(qa=='왼쪽'||qa=='가운데'||qa=='오른쪽'){
//     alert(`${qa}1칸 이동`)
// }else{
//     alert('잘못입력하였소')
// }
//if ~else if ~else 다양한 조건식으로 구분하기 ㅎㅎ
// if(qa == '왼쪽'){
//     alert('왼쪽 1칸 이동')
// }else if(qa == '오른쪽'){
//     alert('오른쪽으로 1칸 이동')
// }else if(qa == '가운데'){
//     alert('가운데로 1칸 이동')
// }

//케쳡 ,머스터드 ,설탕 ,소스중 하나 선택
// const haha =prompt('소스 뭐먹을래?','케쳡,머스터드,설탕')
// if(haha == '케쳡' || haha == '머스터드' || haha == '설탕'){
//     alert(`${haha}선택하셧군요`)
// }
// if (haha == '케쳡'){
//     alert('케쳡을 선택하셧군요')
// }else if(haha == '머스타드'){
//     alert('머스타드를 선택하셧군요허허')
// }else if(haha =='설탕'){
//     alert('설탕을 선택하셧군요 허허..')
// }else{
//     alert('소스 선택 안했다 놀줄아는놈인가?')
// }
// 100~90A
// 89~80 B
//79~ 70 C
//69~ 60 D
//59이하면 F
// const score = prompt('시험점수를 입력하세용!','0~100점 사이값')
// let score_result = ''
// if(score >=0 && score <101){//0~100조건
//     if(score >=90){
//         score_result = 'A'
//     }
//     else if (score >=80){
//         score_result='B'
//     }else if (score >=70){
//         score_result='C'
//     }else if (score >=60){
//         score_result='D'
//     }else{
//         score_result='F'
//     }
//     alert(`당신의 점수는 ${score_result}학점 입니다`)
// }else{
//     alert('잘못입력하셧소잉?')
// }   
//if조건안에서  uf를 추가 작성하는 경우 > 중첩 if문(조건에서 추가조건이 더 필요한 경우 0~100 참조건으로 만든 후 그사이 50점수를 알고 싶을 떄)

const birthday_flower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애,자존심,외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손,양보'
    },{
        month:3,
        flower:'수선화',
        content:'자기애,자존심,외로움',
    },{
        month:4,
        flower:'스위트피',
        content:'추억,즐거움',
    },{
        month:5,
        flower:'은망울꽃',
        content:'희망,섬세함',
    },{
        month:6,
        flower:'백합',
        content:'순결',
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움,인격',
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀,상상,견고함',
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑',
    },{
        month:10,
        flower:'금잔화',
        content:'실망,비애',
    },{
        month:11,
        flower:'국화',
        content:'성실,진실',
    },{
        month:12,
        flower:'포인세티아',
        content:'축하,감사',
    }
]
//Q.당신의 생일은 몇월인가요?
//@@월라고 작성했다면 
//@@월의 탄생화는 @@이고 꽃말은@@@@입니다
const haha =Number(prompt('당신의 생일은 몇월 인가요'))
let flower_result = ''
let user_birthday_month = ''; //중첩 if문에서 사용자가 입력한 달과 탄생화 배열객체를 연결해주는 전역변수
if (haha > 0 && haha < 13 ){
    //위 조건이 참일때 추가세부조건 중첩 if문 쓰기
    if(haha == 1||2||3||4||5||6||7||8||9||10||11||12){
        user_birthday_month = birthday_flower[haha - 1]
    }
    // if(haha == 1){
    //     user_birthday_month = birthday_flower[haha-1]
    // }
    // flower_result =`
    // ${user_birthday_month.}월의 탄생화는${user_birthday_month}이고 꽃말은${user_birthday_month}입니다`
    // flower_result = ``
    // alert(flower_result)
}else{
    alert('잘못썻데이 단디써라')
}

// if (haha == `1월`){
//     alert(`${birthday_flower[0].month}월의 탄생화는${birthday_flower[0].flower}이고 꽃말은${birthday_flower[0].content}입니다`)
// }else if(haha =='2월'){
//     alert(`${birthday_flower[1].month}월의 탄생화는${birthday_flower[1].flower}이고 꽃말은${birthday_flower[1].content}입니다`)
// }else if(haha =='4월'){
//     alert(`${birthday_flower[3].month}월의 탄생화는${birthday_flower[3].flower}이고 꽃말은${birthday_flower[3].content}입니다`)
// }else if(haha =='5월'){
//     alert(`${birthday_flower[4].month}월의 탄생화는${birthday_flower[4].flower}이고 꽃말은${birthday_flower[4].content}입니다`)
// }else if(haha =='6월'){
//     alert(`${birthday_flower[5].month}월의 탄생화는${birthday_flower[5].flower}이고 꽃말은${birthday_flower[5].content}입니다`)
// }else if(haha =='7월'){
//     alert(`${birthday_flower[6].month}월의 탄생화는${birthday_flower[6].flower}이고 꽃말은${birthday_flower[6].content}입니다`)
// }else if(haha =='8월'){
//     alert(`${birthday_flower[7].month}월의 탄생화는${birthday_flower[7].flower}이고 꽃말은${birthday_flower[7].content}입니다`)
// }else if(haha =='9월'){
//     alert(`${birthday_flower[8].month}월의 탄생화는${birthday_flower[8].flower}이고 꽃말은${birthday_flower[8].content}입니다`)
// }else if(haha =='10월'){
//     alert(`${birthday_flower[9].month}월의 탄생화는${birthday_flower[9].flower}이고 꽃말은${birthday_flower[9].content}입니다`)
// }else if(haha =='11월'){
//     alert(`${birthday_flower[10].month}월의 탄생화는${birthday_flower[10].flower}이고 꽃말은${birthday_flower[10].content}입니다`)
// }else if(haha =='12월'){
//     alert(`${birthday_flower[11].month}월의 탄생화는${birthday_flower[11].flower}이고 꽃말은${birthday_flower[11].content}입니다`)
// }else{
//     alert('똑바로적어')
// }


// else if(haha == 2){
//     flower_result= `${birthday_flower[haha-1].month}월의 탄생화는 ${birthday_flower[haha-1].flower}이고 꽃말은 ${birthday_flower[haha-1].content}입니다.`
// }
// else if(haha == 3){
//     flower_result= `${birthday_flower[haha-1].month}월의 탄생화는 ${birthday_flower[haha-1].flower}이고 꽃말은 ${birthday_flower[haha-1].content}입니다.`
// }
// else if(haha == 4){
//     flower_result= `${birthday_flower[haha-1].month}월의 탄생화는 ${birthday_flower[haha-1].flower}이고 꽃말은 ${birthday_flower[haha-1].content}입니다.`
// }
// else if(haha == 5){
//     flower_result= `${birthday_flower[haha-1].month}월의 탄생화는 ${birthday_flower[haha-1].flower}이고 꽃말은 ${birthday_flower[haha-1].content}입니다.`
// }
// else if(haha == 6){
//     flower_result= `${birthday_flower[haha-1].month}월의 탄생화는 ${birthday_flower[haha-1].flower}이고 꽃말은 ${birthday_flower[haha-1].content}입니다.`
// }
// else if(haha == 7){
//     flower_result= `${birthday_flower[haha-1].month}월의 탄생화는 ${birthday_flower[haha-1].flower}이고 꽃말은 ${birthday_flower[haha-1].content}입니다.`
// }
// else if(haha == 8){
//     flower_result= `${birthday_flower[haha-1].month}월의 탄생화는 ${birthday_flower[haha-1].flower}이고 꽃말은 ${birthday_flower[haha-1].content}입니다.`
// }
// else if(haha == 9){
//     flower_result= `${birthday_flower[haha-1].month}월의 탄생화는 ${birthday_flower[haha-1].flower}이고 꽃말은 ${birthday_flower[haha-1].content}입니다.`
// }
// else if(haha == 10){
//     flower_result= `${birthday_flower[haha-1].month}월의 탄생화는 ${birthday_flower[haha-1].flower}이고 꽃말은 ${birthday_flower[haha-1].content}입니다.`
// }
// else if(haha == 11){
//     flower_result= `${birthday_flower[haha-1].month}월의 탄생화는 ${birthday_flower[haha-1].flower}이고 꽃말은 ${birthday_flower[haha-1].content}입니다.`
// }
// else if(haha == 12){
//     flower_result= `${birthday_flower[haha-1].month}월의 탄생화는 ${birthday_flower[haha-1].flower}이고 꽃말은 ${birthday_flower[haha-1].content}입니다.`
// }