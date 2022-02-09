var body = {
    setColor : function(color){
        document.body.style.color = color;
    },
    setBackgroundcolor : function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}       
var link = {
    setcolor : function(color){
        var i = 0;
        var list = document.querySelectorAll('a');
        while(i < list.length){
        list[i].style.color= color;
        i = i+1;
        }
    }
}  

var border = {
    bottom : function(color){
        document.querySelector('h1').style.borderBottomColor = color;
    },
    right : function(color){
        document.querySelector('#grid ul').style.borderRightColor = color;
    }
}

function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value==='night'){
        body.setBackgroundcolor('black')
        body.setColor('white');
        link.setcolor('powderblue');
        border.bottom('white');
        border.right('white');
        self.value = 'day';
    } else{
        body.setBackgroundcolor('white')
        body.setColor('black');
        link.setcolor('blue');
        border.bottom('black');
        border.right('black');
        self.value = 'night';
    }
}

