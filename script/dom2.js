const titleCls = document.getElementsByClassName ('title')
console.log(titleCls)
console.log(titleCls[0])
console.log(titleCls[1]) 
const listCls = document.getElementsByClassName('list')
console.log(listCls);
//list 클래스를 가지고 있는 li 만 인식하는 변수
const liCls = document.getElementsByTagName ('ul')[0];
const lilist = liCls.getElementsByClassName('list');
console.log (lilist);
//  Q. gnb 1개 잡기
//  Q. gnb-li 2개 잡기
//  Q. gnb-li-lnb 2개 잡기
//  Q. gnb-li-lnb 첫번째 lnb만 잡기
//  Q. gnb-li-lnb 두번째 lnb만 잡기
const gnbCls = document.getElementsByClassName ('gnb')[0];
console.log(gnbCls)

const liTag_menu1 = gnbCls.getElementsByTagName ('li') [0];
console.log(liTag_menu1)
const liTag_menu2 = gnbCls.getElementsByTagName ('li') [3];
console.log(liTag_menu2)

const lnbCls = gnbCls.getElementsByClassName ('lnb');
console.log(lnbCls);

const lnbClas1= gnbCls.getElementsByClassName ('lnb')[0]
console.log(lnbClas1)
const lnbClas2= gnbCls.getElementsByClassName ('lnb')[1]
console.log(lnbClas2)