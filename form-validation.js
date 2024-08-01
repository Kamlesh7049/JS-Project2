function savedata() {
  let name = document.getElementById("nm").value;
  let phone = document.getElementById("phn").value;
  let email = document.getElementById("em").value;
  let pass = document.getElementById("pss").value;
  let cpass = document.getElementById("cpss").value;
  // document.write(name)
  if (name == "") {
    alert("plese fill name !");
    document.getElementById("nm").focus();
    return false;
  } else if (phone == "") {
    alert("plese fill phone no !");
    document.getElementById("phn").focus();
    return false;
  } else if (email == "") {
    alert("plese fill email !");
    document.getElementById("em").focus();
    return false;
  } else if (pass == "") {
    alert("plese fill pass !");
    document.getElementById("pass").focus();
    return false;
  } else if (cpass == "") {
    alert("plese fill cpass !");
    document.getElementById("cpass").focus();
    return false;
  }
}
