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

