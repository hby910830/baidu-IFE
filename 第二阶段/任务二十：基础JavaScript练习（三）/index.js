var txt = document.getElementById('inputText');
var content = document.getElementById('content');

//左进按钮
function inputLeftIn() {
    getRegExp();
    var liNum = content.childNodes.length;
    for(var i = 0; i < value.length; i++){
        if(value[i] !== false){
            if(liNum < 60){
                var newItem = document.createElement('li');
                var textnode = document.createTextNode(value[i]);
                newItem.appendChild(textnode);
                content.insertBefore(newItem, content.childNodes[0]);
                newItem.setAttribute('title', value[i]);
            }else{
                alert('最多输入60个哦。。。')
            }
        }
    }
}

//右进按钮
function inputRightIn(){
    getRegExp();
    var liNum = content.childNodes.length;
    if(value !== false){//排除空元素
        for(var i = 0; i < value.length; i++){
            if(liNum < 60){
                var newItem = document.createElement('li');
                var textnode = document.createTextNode(value[i]);
                newItem.appendChild(textnode);
                content.appendChild(newItem);
                newItem.setAttribute('title', value[i]);
            }else{
                alert('最多输入60个哦。。。');
            }
        }
    }
}

//左出按钮
function inputLeftOut(){
    alert('删除的最左侧节点： '+ content.firstChild.innerHTML);
    content.removeChild(content.firstChild);
}

//右出按钮
function inputRightOut(){
    alert('删除的最右侧节点： '+ content.childNodes[content.childNodes.length - 1].innerHTML);
    content.removeChild(content.childNodes[content.childNodes.length - 1]);
}

//给已出现的LI都添加点击事件
content.addEventListener('click', function(e){
    content.removeChild(e.target);
}, false);

//正则过滤
function getRegExp(){
    value = txt.value.replace(/[^\d\u4e00-\u9fa5a-zA-Z]+/g, " ").split(' ');
    if(value[0] !== ''){
        return value;
    }else{
        alert('请先输入点东西。。。');
        return false;
    }
}

//查询按钮
function searchItem(){
    var childLi = content.childNodes;
    var inputTxt = document.getElementById('searchInput').value;
    for(var i = 0; i < childLi.length; i++){
        childLi[i].style.backgroundColor = '';
        childLi[i].style.color = '';
        if(inputTxt === childLi[i].innerHTML){
            childLi[i].style.backgroundColor = '#FFFF00';
            childLi[i].style.color = '#000';
        }
    }
}

//重置清空按钮
function reset(){
    content.innerHTML = '';
    txt.value = '';
}

document.getElementById("inputLeftIn").addEventListener("click", inputLeftIn, false);
document.getElementById("inputRightIn").addEventListener("click", inputRightIn, false);
document.getElementById("inputLeftOut").addEventListener("click", inputLeftOut, false);
document.getElementById("inputRightOut").addEventListener("click", inputRightOut, false);
document.getElementById('searchBtn').addEventListener("click", searchItem, false);
document.getElementById('resetBtn').addEventListener("click", reset, false)
