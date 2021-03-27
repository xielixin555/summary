window.onload = function () {
    //行数
    var rows = null;

    //列数
    var cols = null;

    //雷数
    var bombs = null;

    var reg = /^[+]{0,1}(\d+)$/;

    var rosandcol = prompt('请输入行列数(默认10×10)');
    if (rosandcol == ''){
        rows=10;
        cols=10;
        bombs=20;
    }else if (reg.test(rosandcol)) {
        rows=rosandcol;
        cols=rosandcol;
        bombs=rosandcol*2;
    }else{
        alert("请输入非0正整数");
    }

    //存放所有td的二维数组
    var tdArr = [];

    //存放所有td的普通数组
    var alltd = [];

    var isOver = false;

    //找到table元素
    var gameTable = document.getElementById("game-table");

    //第一层for循环，创建10个tr
    for (var i = 0; i < rows; i++) {
        var tr = document.createElement("tr");
        var temp = [];
        //里层for循环用于创建10个td
        for (var j = 0; j < cols; j++) {
            var td = document.createElement("td");
            td.classList.add("grid");
            td.setAttribute("state", "normal");
            tr.appendChild(td);
            temp.push(td);
            alltd.push(td);
            td.onmousedown = tdClick;
            td.row = i;
            td.col = j;
        }
        tdArr.push(temp);
        gameTable.appendChild(tr);
    }

    // Math.random(),生成一个[0,1)的随机数
    //var num = Math.floor(Math.random()*100);

    //随机生成每颗雷的位置

    for (var i = 0; i < bombs; i++) {
        var index = Math.floor(Math.random() * alltd.length);
        alltd[index].setAttribute("is-bomb", "yes");
        alltd.splice(index,1);
    }

    //td点击事件绑定
    function tdClick(e) {
        if (isOver){
            return;
        }
        if (e.button == 0) {
            //左键
            if (e.target.getAttribute("state") == "normal") {
                if (e.target.getAttribute("is-bomb")=="yes"){
                    gameOver(e.target);
                    return;
                }
                openGrid(e.target);
                if (alltd.every(function (el) {
                    if (el.getAttribute("state")=="normal"||el.getAttribute("state")=="flag"){
                        return false;
                    }else {
                        return true;
                    }
                })) {
                    isOver = true;
                    alert("胜利");
                }

            }
        } else if (e.button == 2) {
            //右键
            if (e.target.getAttribute("state") == "normal") {
                e.target.setAttribute("state", "flag");
            } else if (e.target.getAttribute("state") == "flag") {
                e.target.setAttribute("state", "normal");
            }
        }
    }

    //计算某个td周围有几颗雷
    function bombsArround(td) {
        var num = 0;
        for (var i = td.row - 1; i <= td.row + 1; i++) {
            for (var j = td.col - 1; j <= td.col + 1; j++) {
                //排除自身
                if (i == td.row && j == td.col) {
                    continue;
                }
                //排除边界之外的坐标
                if (i < 0 || i > rows - 1 || j < 0 || j > cols - 1) {
                    continue;
                }
                var tar = tdArr[i][j];
                if (tar.getAttribute("is-bomb") == "yes") {
                    num++;
                }
            }
        }
        return num;
    }

    //游戏结束函数
    function gameOver(td){
        isOver = true;
        var bomtds = document.querySelectorAll("[is-bomb=yes]");
        for (var i = 0;i<bomtds.length;i++){
            bomtds[i].setAttribute("state","bomb");
        }
        td.setAttribute("state","bomb-ex");
        alert("GAME OVER");
    }

    //打开某个td的函数
    function openGrid(td){
        var bombNum = bombsArround(td);
        td.setAttribute("state",bombNum);
        if (bombNum==0){
            for (var i = td.row - 1; i <= td.row + 1; i++) {
                for (var j = td.col - 1; j <= td.col + 1; j++) {
                    //排除自身
                    if (i == td.row && j == td.col) {
                        continue;
                    }
                    //排除边界之外的坐标
                    if (i < 0 || i > rows - 1 || j < 0 || j > cols - 1) {
                        continue;
                    }
                    var tar = tdArr[i][j];
                    if (tar.getAttribute("state") == "normal") {
                        openGrid(tar);
                    }
                }
            }
        }
    }
    //阻止右键弹出菜单
    document.body.oncontextmenu = function (e) {
        e.preventDefault();
    }

}