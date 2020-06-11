function myFunction() {
  //这里是获取键盘事件的内容
  var x = document.getElementById("myInput").value;

  //这里是设置输入人数
  if (x > 4) {
    if (x <= 18) {
    } else {
      alert("人数限制不能少于4个，多于18个");
    }
  } else {
    alert("人数限制不能少于4个，多于18个");
  }

  document.getElementById("demo").innerHTML = "你输入的是：" + x;

  var people = document.getElementById("people");
  var killer = document.getElementById("killer");
  if (x == 4) {
    people.innerHTML = 3;
    killer.innerHTML = 1;
  } else if (x == 5) {
    people.innerHTML = 4;
    killer.innerHTML = 1;
  } else if (x == 6) {
    people.innerHTML = 4;
    killer.innerHTML = 2;
  } else if (x == 7) {
    people.innerHTML = 5;
    killer.innerHTML = 2;
  } else if (x == 8) {
    people.innerHTML = 6;
    killer.innerHTML = 2;
  } else if (x == 9) {
    people.innerHTML = 6;
    killer.innerHTML = 3;
  } else if (x == 10) {
    people.innerHTML = 7;
    killer.innerHTML = 3;
  } else if (x == 11) {
    people.innerHTML = 8;
    killer.innerHTML = 3;
  } else if (x == 12) {
    people.innerHTML = 8;
    killer.innerHTML = 4;
  } else if (x == 13) {
    people.innerHTML = 9;
    killer.innerHTML = 4;
  } else if (x == 14) {
    people.innerHTML = 10;
    killer.innerHTML = 4;
  } else if (x == 15) {
    people.innerHTML = 11;
    killer.innerHTML = 4;
  } else if (x == 16) {
    people.innerHTML = 11;
    killer.innerHTML = 5;
  } else if (x == 17) {
    people.innerHTML = 12;
    killer.innerHTML = 5;
  } else if (x == 18) {
    people.innerHTML = 5;
    killer.innerHTML = 13;
  }
}
