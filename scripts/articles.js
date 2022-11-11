
//<---------------------------------------------data_business--------------------------------------------->
let art_data=[
    {
        'url':'https://www.kindmeal.my/photos/article/20/20233-l.jpg',
        'title':'Tornado Potatoes',
        'web_name':'by KindMeal.my',
        'description':'Peri Peri Tornado Potato — a fantastic, fun, tasty way to cook potatoes!',
        'date':'11:nov:2022',
    }
   
 
]

class create_articles_data{
    constructor(url,title,web_name,description,date){
        this.url=url;
        this.title=title;
        this.web_name=web_name;
        this.description=description;
        this.date=date;
    }
 }

 let d2= new create_articles_data(`https://www.kindmeal.my/photos/article/20/20230-l.jpg`,`
 Animals Are Not Meals. They''re Living Beings And They Deserve Freedom And Respec..`,
 `by Compassion Over Killing`,`Animals are not meals. They're living beings and they 
 deserve freedom and respect. Leave animals off your plates. #govegan`,
 `08 November 2022`)

 

 document.getElementById('create').onclick=() =>{
    let input_url= document.getElementById('url').value;
    let input_title= document.getElementById('title').value;
    let input_web_name= document.getElementById('web_name').value;
    let input_description= document.getElementById('description').value;
    let input_date= document.getElementById('date').value;
    
    let d2= new create_articles_data(input_url,input_title,input_web_name,input_description,input_date);
    
    art_data.push(d2);
    localStorage.setItem('Articles_Data',JSON.stringify(art_data));
    
    location.reload();
 }

 
art_data=JSON.parse(localStorage.getItem('Articles_Data'));
console.log(art_data)



 //<--------------------------------------------------------------------------------------------------->




 

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
art_data.forEach((el)=>{
    create_cards(el)
})


function create_cards(el){

    let wrap= document.createElement('div');
        wrap.className='wrap';

    let div1=document.createElement('div');
    let image=document.createElement('img');
        image.className='art_img';
        image.src=el.url;
        div1.append(image);

    let div2=document.createElement('div');

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

                div2_2.append(viewVideo, date);
                div2.append(div2_1,div2_2);

    wrap.append(div1,div2);
    document.getElementById('art_container').append(wrap);
}


//<--------------------------------------------------------------------------------------------------------------->


