var button1 = document.getElementById("b1");

 var bb = document.getElementById("box").getElementsByTagName("div")
 var button2 = document.getElementById("b2");

 












button1.onclick = function stop(){
    clearInterval(stop1);
    var stop1 = setInterval(function(){
        for( var k=0; k < bb.length; k++) {
            bb[k].style.backgroundColor = "orange";
        }
        
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
    
    
    // 随机数开始
    var num = new Array();
    for (var i = 0; i < 3; i++) {
    var number = Math.floor(Math.random() * 9);
    if (num.indexOf(number) < 0) {
    num.push(number);
    } else {
    i--;
    }
    }
    
    //随机数结束
    
    
     bb[num[0]].style.backgroundColor = "rgb("+r+","+g+","+b+")";
     bb[num[1]].style.backgroundColor = "rgb("+r1+","+g1+","+b1+")";
     bb[num[2]].style.backgroundColor = "rgb("+r2+","+g2+","+b2+")";
    
    
    
    
     
       
    
    },800); var stop1 = setInterval(function(){
        for( var k=0; k < bb.length; k++) {
            bb[k].style.backgroundColor = "orange";
        }
        
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
    
    
    // 随机数开始
    var num = new Array();
    for (var i = 0; i < 3; i++) {
    var number = Math.floor(Math.random() * 9);
    if (num.indexOf(number) < 0) {
    num.push(number);
    } else {
    i--;
    }
    }
    
    //随机数结束
    
    
     bb[num[0]].style.backgroundColor = "rgb("+r+","+g+","+b+")";
     bb[num[1]].style.backgroundColor = "rgb("+r1+","+g1+","+b1+")";
     bb[num[2]].style.backgroundColor = "rgb("+r2+","+g2+","+b2+")";
      
    
    },800);

   

}



    









    button2.onclick=function my2(){
        clearInterval(stop);
    for( var k=0; k < bb.length; k++) {
        bb[k].style.backgroundColor = "red";
    }
    
}
 

 
