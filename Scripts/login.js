let form = document.querySelector("form");
  let signupLS = JSON.parse(localStorage.getItem("register")) || []

  form.addEventListener("submit",function(event){
     event.preventDefault();
    if(signupLS.length === 0){
      alert("No user till Now");
      return;
    }
    let obj={
      username:form.username.value,
      password:form.password.value
    }

    let flag=false;
    signupLS.forEach(function(ele){
      if(ele.username===obj.username && ele.password===obj.password){
        flag=true;
        localStorage.setItem("register",JSON.stringify(ele));
        alert("Login Sucessfully");
         window.location.href="./search.html";

      }
    })
    if(flag===false){
      alert("User Doesnot Exist");

    }

  })