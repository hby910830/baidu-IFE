var tag_text = document.getElementById('tag_text');
var interest_text = document.getElementById('interest_text');
var tag_content = document.getElementById("tag_content");
var area_content = document.getElementById('area_content');
//添加TAG
var tag_arr = [];
function addTag(event){
    var e = e || event;
    var lastChar = tag_text.value.charAt(tag_text.value.length - 1);
    if((e.keyCode === 13) || (e.keyCode ===32) || (lastChar === ',') || (lastChar === '， ')){
        var value = tag_text.value;
        tag_arr.push(value);
        var tag_li_num = tag_content.childNodes;
        tag_content.innerHTML = '';
        tag_arr = tag_arr.unique();
        for(var i = 0; i < tag_arr.length; i++){
            //消除逗号输入后逗号残留的BUG
            if(tag_arr[i].charAt(tag_arr[i].length - 1).toString() === ','){
                tag_arr[i] = tag_arr[i].slice(0, tag_arr[i].length - 1);
            }
            if(tag_arr[i] !== false){
                //防止输入框为空
                var newItem = document.createElement('li');
                var textnode = document.createTextNode(tag_arr[i]);
                newItem.appendChild(textnode);
                tag_content.appendChild(newItem, tag_content.childNodes[0]);
                newItem.setAttribute('title', tag_arr[i]);
                newItem.setAttribute('onmouseover', 'showDelInfo()'); //添加hover效果
                newItem.setAttribute('onmouseout', 'hideDelInfo()'); //添加hover效果
                tag_text.value = '';
                tag_content.childNodes[i].addEventListener('click', remove, false);
            }
        }
        if(tag_li_num.length > 10){
            //超过10个就call删除最早的函数
            deleteOld(tag_content);
        }
    }
}

//添加兴趣爱好
function addInterest(){
    var area_li_num = area_content.childNodes;
    for (var i = 0; i < value.length; i++) {
        if (value != false) { //防止输入框为空
            var newItem = document.createElement("li");
            var textnode = document.createTextNode(value[i]);
            newItem.appendChild(textnode);
            area_content.appendChild(newItem, area_content.childNodes[0]);
            newItem.setAttribute('title', value[i]);
            newItem.setAttribute('onmouseover', 'showDelInfo()'); //添加hover效果
            newItem.setAttribute('onmouseout', 'hideDelInfo()'); //添加hover效果
            interest_text.value = "";
            area_content.childNodes[i].addEventListener("click", remove, false);
        }
    }
    if (area_li_num.length > 10) { //超过10个就call删除最早的函数
        deleteOld(area_content);
    }
}

//删除最左端，最早的Tag
function deleteOld(e) {
    e.removeChild(e.firstChild);
    console.log("delete success");
    console.log(e.firstChild);
}

//hover效果
function showDelInfo(e) {
    var e = e || event;
    e.target.style.backgroundColor = 'rgba(0, 255, 0, .5)';
    e.target.innerHTML = '点击删除' + e.target.innerHTML;
}
function hideDelInfo(e){
    var e = e || event;
    e.target.style.backgroundColor = "rgba(255, 0, 0, .5)";
    e.target.innerHTML = e.target.innerHTML.slice(4, e.target.innerHTML.length);
}

//给UL添加点击事件
var remove = function(e){
    var e = e || event;
    e.target.parentNode.removeChild(e.target);
};

//正则过滤
function getRegExp(){
    var inputTxt = trim(document.getElementById('interest_text').value);
    value = inputTxt.replace(/[^\d\u4e00-\u9fa5a-zA-Z]+/g, " ").split(' ').unique();
    if(value[0] !== ''){
        addInterest();
        var area_content_li = area_content.getElementsByTagName('li');
        var temp_arr = [];
        for(var i = 0; i < area_content_li.length; i++){
            temp_arr.push(area_content_li[i].innerHTML);
            value = temp_arr.unique();
        }
        area_content.innerHTML = '';
        addInterest();
    }else{
        alert('请先输入内容');
        return false;
    }
}

//去掉数组中重复的项
Array.prototype.unique = function(){
    var temp = [];
    for(var i = 0; i < this.length; i++){
        if(temp.indexOf(this[i]) === -1){
            temp.push(this[i]);
        }
    }
    return temp;
};

//trim删除左右两端的空格
function trim(str){
    var regex1 = /^\s*/;
    var regex2 = /\s*$/;
    return (str.replace(regex1, '')).replace(regex2, '');
}

//重置清空函数
function reset(){
    tag_content.innerHTML = '';
    tag_text.value = '';
    interest_text.value = '';
    area_content.innerHTML = '';
}

document.getElementById('confirBtn').addEventListener('click', getRegExp, false);
document.getElementById('resetBtn').addEventListener('click', reset, false);
