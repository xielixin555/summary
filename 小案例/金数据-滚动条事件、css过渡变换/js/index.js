function listA() {
    document.getElementById('ul-a').style.color = 'rgba(250,110,0,1)';
    document.getElementById('spans').innerHTML = '支付订单';
    document.getElementById('spans').style.color = 'rgba(250,110,0,1)';
    document.getElementById('rotateimg').src = 'image/l1.PNG';
}

function listB() {
    document.getElementById('ul-b').style.color = 'gray';
    document.getElementById('spans').innerHTML = '线上预约';
    document.getElementById('spans').style.color = 'gray'
    document.getElementById('rotateimg').src = 'image/online.PNG';
}

function listC() {
    document.getElementById('ul-c').style.color = 'rgba(0,0,255,1)';
    document.getElementById('spans').innerHTML = '在线考试';
    document.getElementById('spans').style.color = 'rgba(0,0,255,1)';
    document.getElementById('rotateimg').src = 'image/online2.PNG';
}

function listD() {
    document.getElementById('ul-d').style.color = 'rgba(0,255,0,1)';
    document.getElementById('spans').innerHTML = '活动报名';
    document.getElementById('spans').style.color = 'rgba(0,255,0,1)';
    document.getElementById('rotateimg').src = 'image/onl3.PNG';
}

/////////////////////////////////////////////////////////////////////////
window.onscroll = function () {
    var i = document.documentElement.scrollTop || document.body.scrollTop;
    var listTitle = document.getElementById('listH1');//h1
    var liOne = document.getElementById('li-1');
    var liTwo = document.getElementById('li-2');
    var liThree = document.getElementById('li-3');
    var liFour = document.getElementById('li-4');
    var h1El=document.getElementById('elseh1');
    var h1P=document.getElementById('elsep');
    var figureOne=document.getElementById('figurea');
    var figureTwo=document.getElementById('figureb');
    var figureThree=document.getElementById('figurec');
    var figureFour=document.getElementById('figured');
    var elF1=document.getElementById('efigure1');
    var elF2=document.getElementById('efigure2');
    var elF3=document.getElementById('efigure3');
    var ff1=document.getElementById('f1');
    var ff2=document.getElementById('f2');
    var ff3=document.getElementById('f3');
    var ff4=document.getElementById('f4');
    var ff5=document.getElementById('f5');
    var ff6=document.getElementById('f6');

    if (i > 300 && i < 500) {
        listTitle.style.display = 'block';
        listTitle.className = 'listH1';
        liOne.className = 'li-1';
        liTwo.className = 'li-2';
        liThree.className = 'li-3';
        liFour.className = 'li-4';
    }
    if (i > 650 && i < 740) {
        h1El.className='elseh1';
        h1P.className='elsep';
    }
    if (i>1700&&i<2000) {
        figureOne.className='figurea';
        figureTwo.className='figureb';
        figureThree.className='figurec';
        figureFour.className='figured';
    }
   if (i>2300&&i<2800){
        elF1.className='efigure1';
        elF2.className='efigure2';
        elF3.className='efigure3';
   }
   if (i>2800&&i<3000) {
        ff1.className='f1';
        ff2.className='f2';
        ff3.className='f3';
        ff4.className='f4';
        ff5.className='f5';
        ff6.className='f6';
   }
}