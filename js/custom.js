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
  });
  jQuery('#close').click(function() {
    jQuery('.reg').removeClass('active');
    jQuery('.loginer.seccond').removeClass('visible');
    jQuery('.loginer.hello').removeClass('visible');
    jQuery('.loginer.first').addClass('visible');
    jQuery('.log').addClass('active');
    
  });

});

let registration = [];
console.log(registration);

function register(){
  let userName = document.getElementById('username').value;
  let userLogin = document.getElementById('login').value;
  let userPassword = document.getElementById('password').value;
  let userPasswordConfirm = document.getElementById('password-confirm').value;
  if(userPassword === userPasswordConfirm){
  registration.push({name: userName,login: userLogin,password: userPassword});
  console.log(registration);
  document.getElementById('login').value='';
  document.getElementById('password').value='';
  document.getElementById('password-confirm').value='';
  document.getElementById('username').value='';
  document.getElementById('greeting').innerHTML ='Регистрация пошла успешно!';
  jQuery('.loginer.seccond').removeClass('visible');
  jQuery('.loginer.hello').addClass('visible');
  }else{
    alert('Ваши пароли не совпадают!');
    document.getElementById('password').value='';
    document.getElementById('password-confirm').value='';
  }
};

function loger(){
  let currentLogin = document.getElementById('cur-login').value;
  let currentPassword = document.getElementById('cur-password').value;

  let exists = registration.find(function(element){
  return element.login === currentLogin && element.password === currentPassword;

  });
  if(exists !== undefined){
    jQuery('.loginer.seccond').removeClass('visible');
    jQuery('.loginer.first').removeClass('visible');
    jQuery('.loginer.hello').addClass('visible');
    document.getElementById('greeting').innerHTML =`Здравствуйте, ${exists.name}! Вы успешно авторизованы на нашем сайте!`;
    document.getElementById('cur-login').value='';
    document.getElementById('cur-password').value=''; 
  }else{
    jQuery('.loginer.seccond').removeClass('visible');
    jQuery('.loginer.first').removeClass('visible');
    jQuery('.loginer.hello').addClass('visible');
    document.getElementById('greeting').innerHTML ='Ошибка авторизации!';
    document.getElementById('cur-login').value='';
    document.getElementById('cur-password').value=''; 
  }
};



