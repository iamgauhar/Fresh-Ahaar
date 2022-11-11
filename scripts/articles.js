

const createBtn = (btn_container) => {

    for (let i = 1; i <= 13; i++) {
        let btn = document.createElement('button');
        btn.innerText = i;
        btn_container.append(btn)
    }
}
let btn_container = document.querySelector(".art_upper_btn")

createBtn(btn_container);




