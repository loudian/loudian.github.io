function myFunction() {
  var x = document.getElementById("myInput").value;

  if (x > 4) {
    if (x <= 18) {
    } else {
      alert("人数限制不能少于4个，多于18个");
    }
  }

  document.getElementById("demo").innerHTML = "你输入的是：" + x;
}
