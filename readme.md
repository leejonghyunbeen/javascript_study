# javascript
* 프로그래밍 언어란? : 소프트웨어의 동작(알고리즘)을 설명하기 위한 언어
프로그래밍 언어로 프로그럄을 개발하는 것 -> 프로그래밍
프로그래밍 언어로 작성한 프로그램 -> 소스코드 or 코드
* 프로그래밍 언어 유형
절차를 순서대로 작성해 나가는- 절차적 언어
데이터와 절차를 묶어 객체 단위로 관리하는 - 객체 지향 언어(<-가장 java랑 어울린다)
프로그램 함수를 조합하여 구현해 나가는 - 함수형 언어
데이터 사이의 관계와 논리를 설명해가는 - 논리형 언어
* object (객체) :사용자가 컨트롤 할 수 있는 객체대상  ex 버튼,링크,텍스트 박스등 
* propertyt : (속성) 객체가 가지는 속성 
* event (이벤트) :인터넷 브라우저에서 발생할 수 있는 사건 ex 클릭 ,드래그,키보드,입력등
* method (메소드) :객체의 실행  ex확인,삭제,취소,이동,애니메이션등
*  EX   A에 마우스를 올리면 B가나타난다 ->객체 이벤트 객체 메소드
# javascript(ECMAScript)
* 자바스크립트는 절차적언어, 객체지향언어이다.
## 자바스크립트 작성위치
* <head><body> 내에 <script> 작성가능
* 내부스크립트 '<script>...</script>
* 외부스크립트 '<script src ="url">...</script>
* 자바스크립트성능 향상 추가 옵션 'defer','async'
## 자바스크립트 변수
* `변수생성키워드 생성변수명 대입연산자 대입값;`
### 변수생성 키워드 종류
1. `var`: 중복선언 거르지 못함.  ECMA script 구버전의 오래된 변수 선언문
2. `let`: 중복선언 불가능하고 대입된 값을 언제든 변경할 수 있다.
3. `const`: 상수(변하지 않는 값),선언과 동시에 대입이 이루어져야 한다.
### 기초 연산자
1. `+` :대입연산자 `let x = data `
2. `=` :연결연산자 `x +'1'`
3. `+-`:복합대입연산자 `x += y` -> `x = x+y`
---------------------------------------------------
## 배열
1. 타입 결과값 숫자냐 글자인가 알려주는 식 -> typeof
2. () 괄호는 두개 이상 있을 때 써야한다 .
3. 배열은 0부터 시작하며 대표적으로 [] 대괄호가 있다 ex. 포도 딸기 김 에서 포도를 출력하려면 [0]
4. length -> 배열의 총 개수 나타낸다
5. push -> 배열 끝에 새로운 값을 추가
6. unshitf ->배열의 시작에 새로운 값을 추가
7. pop ->배열 끝에 있는 값을 제거
8. shift ->배열 시작값 제거
9. 최대치를 정하고 싶다면 ex) const movue =new Array(8)
## 함수값
* 함수값은 function으로 출력한다 () 꼮쓰기
---------------------------
## DOM
* getElementsByTagName
* HTML에 TagNode가 2개 이상일 떄 그 중 1개만 동적인 기능이 적용되어 DOM 으로 등록이 필요한 거라면 변수 지정시 [index] 설정하고 대입하기
* HTML에 TagNode가 2개 이상일 때 그 중 여러개에 동적인 기능이 적용되어 DOM이된다면 변수 지정 시는 [index]
없이 대입하고 해당 DOM 변수 호출 시 필요한 경우 [index]사용하기

* DOM Node 변수 지정 시 
* HTMLCollection 결과는 변수가 정상인지 오류인지 간단한 확인 시에만 사용하고 실제로 DOM Node 변수를  
*  이용한 동적인 결고라를 만들어야 할때는 직접적인 접근으로 대상을 하나씩 개별인식하게 만들어야 한다..

* getElementsById
* 지정된 아이디 이름을 가진 모든 html요소를 찾아 html 노드로 반환합니다
*  const container = document.getElementById('container')
   console.log(container)
-----------------------------------------

* number -> 문자값을 숫자로 변환 시켜주는것 
ex)let age = Number(window.prompt('당신의 나이는?')) ;

* value
* form 태그에 삽입되는 값 속성 (input,option,select,button,textarea)
* javascript의 DOM속성 `ex)DOM.value` 로 처리했을 땐 해당 DOM의 미리 입력된 값부터 사용자가 입력하는 신규 값까지 모두 인식할 수 있다.
1. 쇼핑몰의 상품 수량
2. 쇼핑몰의 총 주문 가격
3. 예약페이지의 여행 인원 수 등등...
* 주의사항 ->value 속성은 form전용이므로 다른태그일때 해당 값을 알고 싶다면 다른속성 및 메서드를 사용해야 한다
* 주의사항 -> `DOM.value`로 값 처리시 숫자를 쓰더라도 문자열 (string)으로 인식하기 때문에 필요한 경우
`number()` 메서드를 활용해 (number)데이터 타입으로 변환해야 한다 `Number(객체.value())`
## DOM 관계속성
* toLocaleString -> 숫자에 단위마다 , 붙이기 ex) 10,000 이렇게 ->
   계산을 마친 후 마지막 출력 경우에만 toLocaleString()사용한다
   

* 자식노드
childNodes, children,childElementCount
* 1.parentNode 부모 노드 , parentElement 부모요소
    - parentNode.parentNode 연속사용 ( 부모의 부모 잡기)
    - 자식 또는 자손노드 .parentElement (특정 자식의 부모 잡기)

   다양하게 출력하는법
   console.log(headerText)  //텍스트 노드 인덱스 출력
   console.log(headerText[0]);//"header"
   console.log(headerText[0].data);
   console.log(headerText[0].length);//글자수
   console.log(headerText[0].baseURI);// 경로
2.  javascript 에서  css 제어하기 -> style 속성
    DOM.관계.style
    -DOM.관계.style = "속성:값; 속성:값 ; 속성:값;"  
    *(위)style 2번이상 생성 시 이전 속성 :값 제거됨
    -DOM.관계.관계.style.속성 = "값";
    *(위)style 2번 이상 생성 시 기존 속성값에 이어서 추가됨
    -DOM.style.속성 = "값"
    -위 관계는 필요에 따라 선택 속성
    24/1/3 자식노드 제어하기 
   childNodes, children,childElementCount
* 첫번째 자식, 마지막 자식 노드잡기
   firstChild  -> 첫번째 자식 노드 공백포함
   firstElementChild -> 첫번째자식 요소 노드
   lastChild - > 마지막 자식 노드
   lastElementChild - >마지막 자식 요소
# 객체.innerHTML;
*  `객체 .innerHTML;` 특정 객체의 자식,자손html 읽기
*  `객체.innterHTML=값;`HTML 삽입 및 변경
# innerText
* `객체.innerTEXT;` 객체의 가식, 자손 텍스트 노드 읽기 (HTML x )
* `객체.innerTEXT = 값;` 텍스트 노드 삽입 및 변경 (HTML x )
# appendChild
* `객체.appendChild()`
* `객체.속성.appendChild()`
* `객체.객체.appendChild()`
* `객체.속성.속성.Child()`
* 객체의 마지막 자식 노드 위치에 `()` 괄호 안 값 추가
# createElement
* `document.createElement()`
* 요소 노드 자바스크립트 내에서 동적인 용도로 생성할 경우