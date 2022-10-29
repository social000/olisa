function show(){
  menu_btn.style.display = "none";
  cancel_btn.style.display = "block";
  popNav.style.display = "block";
  console.log('Nav is open');
 }
 function hide(){
  cancel_btn.style.display = "none";
  menu_btn.style.display = "block";
  popNav.style.display = "none";
  console.log('Nav is closed');
 }