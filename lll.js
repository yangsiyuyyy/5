function form(){
if(document.form2.password.value.length<1)
{    alert("密码为空");  
document.form2.password.focus();    
return false;    
}    
if(document.form2.username.value.length<1)
{    alert("用户名不能为空");
document.form2.username.focus();    
return false;
}   
  
return true;}
