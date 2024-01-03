//첫번째 자식,마지막 자식 노드 잡기
//firstChild, firstElementChild
//lastChild, lastElementChild
const items = document.querySelectorAll('.item')
console.log(items)
console.log(items[0]);
console.log(items[0].firstChild);//첫번쨰 자식 노드 공백포함
console.log(items[0].firstElementChild);//첫번째 요소 노드 
console.log(items[0].lastChild); /* 마지막 자식 노드 (공백)*/
console.log(items[0].lastElementChild); /* 마지막 자식 요소 */
//---------형제노드잡기
//이전 형제 previousSibling,previousElementSibling
//다음 형제 nextSibling, nextElementSibling
const item_h2 = items[0].querySelector('h2');
console.log(item_h2)
console.log(item_h2.nextSibling.nextSibling)
console.log(item_h2.nextElementSibling)//요소만 체크하는 다음형제
console.log(item_h2.previousSibling)
console.log(item_h2.previousSibling)
console.log(item_h2.previousElementSibling)