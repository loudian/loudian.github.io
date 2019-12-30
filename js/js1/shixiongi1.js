window.onload = function() {


    var button1 = document.getElementById("b1");

    var bb = document.getElementById("box").getElementsByTagName("div")
    var button2 = document.getElementById("b2");
    var begin3


  //随机数函数 
  function ramdoms(){
    var num = new Array();
    for (var i = 0; i < 3; i++) {
    var number = Math.floor(Math.random() * 9);
    if (num.indexOf(number) < 0) {
    num.push(number);
    } else {
    i--;
    }
    }
  }

 
//这一个是师兄的版本






 function begin() {
    
    //生成随机数开始
        var num = new Array();
        for (var i = 0; i < 3; i++) {
        var number = Math.floor(Math.random() * 9);
        if (num.indexOf(number) < 0) {
        num.push(number);
        } else {
        i--;
        }
        }
    //生成随机数结束

          
    // 下面是随机数颜色开始
    var r = Math.ceil(Math.random()*256);
    var g = Math.ceil(Math.random()*256);
    var b = Math.ceil(Math.random()*256);
    var r1 = Math.ceil(Math.random()*256);
    var g1 = Math.ceil(Math.random()*256);
    var b1 = Math.ceil(Math.random()*256);
    var r2 = Math.ceil(Math.random()*256);
    var g2 = Math.ceil(Math.random()*256);
    var b2 = Math.ceil(Math.random()*256);
    //随机数结束颜色结束

    //把格子全部变为黄色
    for( var k=0; k < bb.length; k++) {
        bb[k].style.backgroundColor = "orange";
    }
    //把格子全部变为黄色结束

    bb[num[0]].style.backgroundColor ="rgb("+r+","+g+","+b+")";
    bb[num[1]].style.backgroundColor ="rgb("+r1+","+g1+","+b1+")";
    bb[num[2]].style.backgroundColor ="rgb("+r2+","+g2+","+b2+")";
}




button1.onclick = function(){
     
     clearInterval(begin3);

   begin3= setInterval(function(){
       
         //把格子全部变为黄色
    for( var k=0; k < bb.length; k++) {
        bb[k].style.backgroundColor = "orange";
     
    }
   
    begin()

    //把格子全部变为黄色结束
   },1000)
 
}




button2.onclick = function(){
      //把格子全部变为黄色结束
     clearInterval(begin3); 
      //把格子全部变为黄色
      for( var k=0; k < bb.length; k++) {
        bb[k].style.backgroundColor = "orange";
    }
    
    
}











   

 

 

}

