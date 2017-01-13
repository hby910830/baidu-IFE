/** * getData方法 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量 * 返回一个数组: *           data = [                 ["北京", 90],                 ["北京", 90]                 ……             ] */function getData() {    var source = document.getElementById("source");    var arrLi = source.getElementsByTagName("li");    var data = [];    var str = "";    for (var i = 0; i < arrLi.length; i++) {        data[i] = [];        str = arrLi[i].innerHTML;        data[i][0] = str.substring(0, 2);        data[i].push(parseInt(arrLi[i].getElementsByTagName("b")[0].innerHTML));    }    return data;}/** * sortAqiData * 按空气质量对data进行从小到大的排序 * 返回一个排序后的数组 */function sortApiData(data) {    function compare(value1, value2) {        return value1[1] - value2[1];    }    data.sort(compare);    return data;}/** * render * 将排好序的城市及空气质量指数，输出显示到id为resort的列表中 * 格式见ul中的注释的部分 */function render(data){    var resort = document.getElementById('resort'),        str = '';    for(var i = 0; i < data.length; i++){        str += '<li>第' + transfer((i + 1).toString()) + '名:' + data[i][0] + "空气质量：" + "<b>" + data[i][1] + "</b></li>";    }    resort.innerHTML = str;}function transfer(num) {    var input = String(num),        unit = ['', '十', '百', '千', '万', '十', '百', '千', '亿'],        chineseNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'],        l = input.length,        a = [],        b = [],        result = '';    for(var i = 0; i < l; i++){        a[i] = input.substr(i, 1);        b[i] = chineseNum[a[i]];        result += b[i] + unit[l - i - 1];    }    return result;}function btnHandle() {    var aqiData = getData();    aqiData = sortApiData(aqiData);    render(aqiData);}function init() {    var btn = document.getElementById("sort-btn");    addEvent(btn, "click", function () {        btnHandle();    });}function addEvent(element, type, handler) {    if (element.addEventListener) {        element.addEventListener(type, handler, false);    } else if (element.attachEvent) {        element.attachEvent("on" + type, handler);    } else {        element["on" + type] = handler;    }}init();