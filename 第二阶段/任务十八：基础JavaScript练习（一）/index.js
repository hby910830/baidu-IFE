/*有一个input输入框，以及4个操作按钮点击"左侧入"，将input中输入的数字从左侧插入队列中；点击"右侧入"，将input中输入的数字从右侧插入队列中；点击"左侧出"，读取并删除队列左侧第一个元素，并弹窗显示元素中数值；点击"右侧出"，读取并删除队列又侧第一个元素，并弹窗显示元素中数值； */window.onload = function(){  var text = document.getElementById("text");  var leftIn = document.getElementById("left-in");  var leftOut = document.getElementById("left-out");  var rightIn = document.getElementById("right-in");  var rightOut = document.getElementById("right-out");  var display = document.getElementById("display");  function addEvent(el, type, handler){    if (el.addEventListener) {      el.addEventListener(type, handler, false);    } else if (el.attachEvent) {      el.attachEvent("on" + type, handler);    } else {      el["on" + type] = handler;    }  }  addEvent(leftIn, 'click', function(){    var li = document.createElement('li');    li.innerHTML = text.value;    display.insertBefore(li, display.firstChild);  });  addEvent(leftOut, 'click', function(){    if(display.firstChild !== null){      display.removeChild(display.firstChild);    }else{      alert('已经空了，没有可以移出的了！');    }  });  addEvent(rightIn, 'click', function(){    var li = document.createElement('li');    li.innerHTML = text.value;    display.appendChild(li);  });  addEvent(rightOut, 'click', function(){    if(display.lastChild !== null){      display.removeChild(display.lastChild);    }else{      alert('已经空了，没有可以移出的了！')    }  });  addEvent(text, 'focus', function(){    text.value = '';  })};