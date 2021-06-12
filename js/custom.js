jQuery( document ).ready(function() {
  jQuery('.log').click(function() {
    jQuery('.loginer.seccond').removeClass('visible');
    jQuery('.loginer.first').addClass('visible');
    jQuery('.reg').removeClass('active');
    jQuery('.log').addClass('active');
  });

  jQuery('.reg').click(function() {
    jQuery('.loginer.first').removeClass('visible');
    jQuery('.loginer.seccond').addClass('visible');
    jQuery('.log').removeClass('active');
    jQuery('.reg').addClass('active');
  }) 
});

let registration = [{name: 'edgar',login: 'redgar',password: '123456'}];
console.log(registration);

function checker (){
  let userName = document.getElementById("username").value;
  let userLogin = document.getElementById("login").value;
  let userPassword = document.getElementById("password").value;
  // registration.forEach(element => {
  //   registration.find
  // });
  console.log(userLogin);
  console.log(userPassword);
  
}
