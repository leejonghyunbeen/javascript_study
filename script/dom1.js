const h1Tag = document.getElementsByTagName('h1'); 
console.log(h1Tag);
/* 
* getElementsByTagName
* HTML에 TagNode가 2개 이상일 떄 그 중 1개만 동적인 기능이 적용되어 DOM 으로 등록이 필요한 거라면 변수 지정시 [index] 설정하고 대입하기
* HTML에 TagNode가 2개 이상일 때 그 중 여러개에 동적인 기능이 적용되어 DOM이된다면 변수 지정 시는 [index]
없이 대입하고 해당 DOM 변수 호출 시 필요한 경우 [index]사용하기 */

//상황0. ul에 동적이 기능이 필요한 경우
//상황1 . ul-li 3개 모두에 동적인 기능이 필요한 경우
//상황2 . ul -li중 두번째 a만 동적인 기능이 필요한경우
//상황3 . ul-li 중 3개의 a에 동적인 기능이 필요한 경우
const ulTag = document.getElementsByTagName('ul')[0];
console.log(ulTag)

const liTag = ulTag.getElementsByTagName('li');
console.log(liTag[0])
console.log(liTag[1])
console.log(liTag[2])

const situation2 = liTag[1].getElementsByTagName('a');
console.log(situation2)

const situation3 = document.getElementsByTagName('a');
console.log(situation3[0])
console.log(situation3[1])
console.log(situation3[2])
/* 
    DOM Node 변수 지정 시 
    HTMLCollection 결과는 변수가 정상인지 오류인지 간단한 확인 시에만 사용하고 실제로 DOM Node 변수를 이용한 동적인 결고라를 만들어야 할때는 직접적인 접근으로 대상을 하나씩 개별인식하게 만들어야 한다..
*/
