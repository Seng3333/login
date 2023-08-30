function myFunction() {
  var x = document.getElementById("myPassword");
  var y = document.getElementById("hide1");
  var z = document.getElementById("hide2");

  if (x.type === "password") {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
  }
}

const validation = () => {
  var password = document.getElementById("myPassword").value;
  var p = document.querySelector("p");

  if (!password) {
    document.getElementById("alert").innerHTML = "password reruired!";
  } else if (password.length < 8) {
    document.getElementById("alert").innerHTML =
      "The password you've entered is incorrect";
  } else {
    document.getElementById("alert").innerHTML = "The password is correct";
    p.style.color = "green";
  }
};
