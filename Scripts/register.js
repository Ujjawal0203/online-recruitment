let form = document.querySelector("form");
let signupLS = JSON.parse(localStorage.getItem("register")) || []
form.addEventListener("submit",function(event){
    event.preventDefault();
    let obj={
        username: form.username.value,
        password: form.password.value,
        confPass: form.confPass.value,
    }
    if(obj.username == "" || obj.password == "" || obj.confPass == "" ){
        alert("Field Empty")
        return
    }
    signupLS.push(obj);
    localStorage.setItem("register",JSON.stringify(signupLS));
    window.location.href="login.html";
})