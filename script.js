function nav() {
    var x = document.getElementById("navigation");
    if (x.className === "table") {
      x.className += " responsive";
    } else {
      x.className = "table";
    }
    console.log(x);
  }