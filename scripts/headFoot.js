import { header, footer } from "../components/utility.js";

document.querySelector("header").innerHTML = header()
document.querySelector("footer").innerHTML = footer()

document.getElementById("signup").addEventListener("click", ()=>{
    document.getElementById("login_form").style.left="50%"

})
document.getElementById("not_member").addEventListener("click", ()=>{
    document.getElementById("login_form").style.left="50%"
    document.getElementById("member_login").style.top="-50%"

})
document.getElementById("cross").addEventListener("click", ()=>{
    document.getElementById("login_form").style.left="-50%"
})
document.getElementById("login_cross").addEventListener("click", ()=>{
    document.getElementById("member_login").style.top="-50%"
})
document.getElementById("logind").addEventListener("click", ()=>{
    document.getElementById("member_login").style.top="50%"
    document.getElementById("login_form").style.left="-50%"

})



// class User{
//     constructor(){

//     }

//     validateUsername(username){
//         return username.includes('@') ? false : true;

//     }

//     validatePassword(password){
//         return password.length < 8? false : true;

//     }

//     async signUP(n, e, u, p){
//         let validated = this.validateUsername(u) && this.validatePassword(p);

//         if(validated){
//             this.name = n
//             this.email = e
//             this.username = u
//             this.password = p

//             const register_api = "https://masai-api-mocker.herokuapp.com/auth/register"
//             const response = await fetch(register_api, {
//                 method: 'POST',
//                 body: JSON.stringify(this),
//                 header: {
//                     'Content-Type': 'application/json',
//                 },
//             })

//             const data = await response.json();
//             console.log(data)
//         }


//     }
// }

// let user = new User()

// document.getElementById("register_btn").addEventListener("click", (e)=>{
//     e.preventDefault()
//     const reg_form = document.getElementById("reg_form")

//     const name = reg_form.name.value
//     const email = reg_form.email.value
//     const username = reg_form.username.value
//     const password = reg_form.password.value

//     user.signUP(name, email, username, password)
// })