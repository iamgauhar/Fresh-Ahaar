let userBase = JSON.parse(localStorage.getItem("userInfo")) || []

document.getElementById("register_btn").addEventListener("click", (e)=>{
    e.preventDefault()
    const reg_form = document.getElementById("reg_form")

    const name = reg_form.name.value
    const email = reg_form.email.value
    const username = reg_form.username.value
    const password = reg_form.password.value

    let user = {
        name, 
        email, 
        username, 
        password,
    }

    userBase.push(user)
    localStorage.setItem("userInfo", JSON.stringify(userBase))
    document.getElementById("reg_form").reset()
    alert("Sign Up successful \n Login Now")
    location.href = "./index.html"
    // document.getElementById("member_login").style.top="50%"

})