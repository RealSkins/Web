function getAndSetLabel() {
    var label;
    var head;
    var i;
    var tmp, tmp_a;
    var subtop;
    var topic;
    var side = document.getElementById("sidebar");
    var area = document.getElementById("main");
    for (i = 1; i <= 4; i++) {
        head = area.getElementsByTagName('h' + i);
        for (let j = 0; j < head.length; j++) {
            head[j].setAttribute('name', 'h');
        }
    }
    head = document.getElementsByName('h');
    for (i = 0; i < head.length; i++) {
        label = 'topic-' + (i + 1);
        tmp = document.createElement("a");
        tmp.setAttribute("class", "target-fix");
        tmp.setAttribute('id', label);
        head[i].parentNode.insertBefore(tmp, head[i]);
    }
    // var test = document.getElementById("text");
    for (i = 0; i < head.length; i++) {
        anchor = document.getElementById('topic-' + (i + 1));
        tmp = document.createElement("li");//创建一个列表元素li。
        tmp_a = document.createElement("a");//创建一个超链接元素a等会放到li里面。
        
        tmp.appendChild(tmp_a);//添加到目录下面
        tmp_a.setAttribute('href', "#" + anchor.id);//设置定位
        tmp_a.setAttribute('target', "_self");
        tmp_a.setAttribute('name', "link");
        if (head[i].tagName == 'H3') {
            // test.innerHTML += topic.innerHTML;
            side.appendChild(tmp);
            tmp.setAttribute('name', 'topic-list');
            tmp_a.innerHTML = '&nbsp' + head[i].innerHTML;//填写内容
            tmp = document.createElement("li");
            subtop = document.createElement("ul");
            side.appendChild(tmp);
            tmp.appendChild(subtop);
            // text.innerHTML = topic.innerHTML;
        }
        else {
            subtop.appendChild(tmp);
            tmp.setAttribute('name', 'sub-topic-list');
            tmp_a.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp' + head[i].innerHTML;//填写内容
        }
    }
};

function interesting(){
    var rand = Math.floor(Math.random()*30000);
    var target = document.getElementById("interesting");
    if(rand < 10000){
        target.innerHTML = "HTML";
    }
    else if(rand >= 10000 && rand < 20000){
        target.innerHTML = "CSS";
    }
    else{
        target.innerHTML = "JS";
    }
}

function sideInit(){
    getAndSetLabel();
    interesting();
}