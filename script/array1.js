//외부스크립트
let a = 'ABC';
console.log(`a=> ${a},a의 type은 ${typeof a}`); /*  tpye of > 타입 결과값 숫자냐 글자냐 알려주기 */
let b = `DEF`;
console.log (`b=> ${b},b+a의 type은 ${typeof (b+a)}`); /*  괄호는 ? 두개이상 있을떄 써야지 나온다 */
const alpa = ['ABC','DEF']
console.log(`alpa배열의 값은 ${alpa}`)
console.log(`배열은 0부터 시작하기 때문에 ABC를 출력하고 싶으면 ${alpa[0]}`);/* 출력값 [0] 배열은 0부터시작  /index */
console.log(`배열의 개수 확인 => ${alpa.length}`); /* 총 개수 length */

const yoil = new Array('월','화','수','목','금','토','일');
const weather = new Array('맑음','흐림','비','눈');
//월 (맑음)
//화 (눈)
//수 (비)
//목 (흐림)
//금 (맑음)
//토 (맑음)
//일 (눈)
console.log (`${yoil[0]}(${weather[0]})`);
console.log (`${yoil[1]}(${weather[3]})`);
console.log (`${yoil[2]}(${weather[2]})`);
console.log (`${yoil[3]}(${weather[1]})`);
console.log (`${yoil[4]}(${weather[0]})`);
console.log (`${yoil[5]}(${weather[0]})`);
console.log (`${yoil[6]}(${weather[3]})`);
// --------------------------------------
const nameArray = ['김','이','박','최']
console.log(nameArray)
// 배열 값 추가, 삭제 메서드(자주 사용하는 종류)
nameArray.push('수'); /* push ->배열 끝에 새로운 값을 추가 */ 
console.log(nameArray)
nameArray.unshift('방'); /*  unshift -> 배열의 시작에 새로운값을 추가한다 */
console.log(nameArray); 
nameArray.pop();
console.log(nameArray); /*  pop -> 배열 끝에 있는 값을 제거 */
nameArray.shift();
console.log(nameArray); /* 시작 값 제거 */
nameArray.pop ();
console.log (nameArray)
const movie = new Array(8) ;
console.log(movie);
/* movie.push('A1');
console.log(movie);
movie.unshift('a1_');
console.log(movie); */
movie[0] = 'A1' 
console.log(movie);
movie[1] = 'B3';
console.log(movie) ;
console.log ('------------------------')
const megabox = new Array ();
console.log(megabox);
megabox.push('a1');
console.log(megabox);
megabox.push ('b3');
console.log(megabox);
megabox.pop();
console.log(megabox);