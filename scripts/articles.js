
let art_data_hard_coded=[
    {
        'url':'https://www.kindmeal.my/photos/article/20/20233-l.jpg',
        'title':'Tornado Potatoes',
        'web_name':'by KindMeal.my',
        'description':'Peri Peri Tornado Potato — a fantastic, fun, tasty way to cook potatoes!',
        'date':'11:nov:2022',
    },
    {
        "url": "https://www.kindmeal.my/photos/article/20/20206-l.jpg",
        "title": " Satay Stir Fry",
        "web_name": "by KindMeal.my",
        "description": "Whip up this delicious satay stir fry — quick, protein-packed with delicious peanutty umami flavour!",
        "date": "02 November 2022"
    },
    {
        "url": "https://www.kindmeal.my/photos/article/20/20204-l.jpg",
        "title": "",
        "web_name": "by Compassion Over Killing",
        "description": "Happy Halloween 👻 Read our newest blog on whether of not the potions from Halloween classic Hocus Pocus are vegan. Plus a list of some great vegan candies and treats:",
        "date": "01 November 2022"
    }
]

art_data_hard_coded.forEach((el,i,event)=>{
    create_cards(el,i,event)
})
// <------------------------------------------------------pagination--------------------------------->
const createBtn = (btn_container) => {

    for (let i = 1; i <= 13; i++) {
        let btn = document.createElement('button');
        btn.innerText = i;
        btn_container.append(btn)
    }
}
let btn_container = document.querySelector(".art_upper_btn")

createBtn(btn_container);

// <-------------------------------------------------------------------------------------------------->




//<-------------------------------------------------------appending------------------------------------------->
let art_data=JSON.parse(localStorage.getItem('Articles_Data'));

art_data.forEach((el,i,event)=>{
    create_cards(el,i,event)
})


function create_cards(el,i){

    let wrap= document.createElement('div');
        wrap.className='wrap';

    let div1=document.createElement('div');
    let image=document.createElement('img');
        image.className='art_img';
        image.src=el.url;
        div1.append(image);

    let div2=document.createElement('div');
``
        let div2_1=document.createElement('div');
    

            let h2=document.createElement('h2');
                h2.innerText=el.title;
            let p1=document.createElement('p');
                p1.className='paira';
                p1.innerText=el.web_name;

            let p2=document.createElement('p');
            p2.innerText=el.description;
    
            div2_1.append(h2,p1,p2)

        let div2_2=document.createElement('div');
            let viewVideo=document.createElement('div');
                viewVideo.className='viewVideo';
                viewVideo.innerText='View Videos';
            let date=document.createElement('p');
                date.innerText=el.date;

            let btn= document.createElement('button');
                btn.innerText='Remove';
                btn.addEventListener('click', function(){
                    
                    remove(i)
                });

                div2_2.append(viewVideo, date,btn);
                div2.append(div2_1,div2_2);

        

    wrap.append(div1,div2);
    document.getElementById('art_container').append(wrap);
}

//<--------------------------------------------------------------------------------------------------------------->

function remove(i){
    let art_data=JSON.parse(localStorage.getItem('Articles_Data'));
        art_data.splice(i,1);

        localStorage.setItem('Articles_Data',JSON.stringify(art_data))
        location.reload()
    
}
