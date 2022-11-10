
import { header } from "../components/utility.js";

let navbar=document.getElementById('navbar');
navbar.innerHTML=header();

const createBtn= ()=>{

    for(let i=1; i<=10; i++){
        let btn=document.createElement('button');
        btn.innerText=i;
        document.getElementById('btn').append(btn)
    }
}
createBtn()