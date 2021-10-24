function validateForm() {
  let x = document.forms["blog"]["comment"].value;
  if (x == "") {
    alert("Please don't fill this page with empty comments it barely works already!");
    return false;
  }
  else{
    document.getElementById("frm1").submit();
  }
}