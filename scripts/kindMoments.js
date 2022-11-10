
import { header,footer } from "../components/utility.js";

let navbar=document.getElementById('navbar');
navbar.innerHTML=header();

let KM_footer=document.getElementById('KM_footer');
    KM_footer.innerHTML=footer();

const createBtn= (btn_container)=>{

    for(let i=1; i<=10; i++){
        let btn=document.createElement('button');
        btn.innerText=i;
       btn_container.append(btn)
    }
}
let btn_container= document.querySelector(".btn")
let lower_container= document.querySelector(".lower_btn")
createBtn(btn_container)
createBtn(lower_container)


let slidingImage=[
    "https://www.kindmeal.my/images/ads/banner_janegoodall_message.jpg",
    "https://www.kindmeal.my/photos/moment/24/24589-47636-m.jpg",
    "https://www.kindmeal.my/photos/moment/24/24580-47603-m.jpg",
    "https://www.kindmeal.my/photos/moment/24/24580-47604-m.jpg",
    "https://www.kindmeal.my/photos/moment/24/24550-47504-m.jpg",
    "https://www.kindmeal.my/photos/moment/24/24585-47622-m.jpg",
    "https://www.kindmeal.my/photos/moment/24/24585-47623-m.jpg",
    "https://www.kindmeal.my/photos/moment/24/24585-47621-m.jpg",
    "https://www.kindmeal.my/photos/moment/24/24604-47677-m.jpg",
    "https://www.kindmeal.my/photos/moment/24/24604-47676-m.jpg",
    "https://www.kindmeal.my/photos/moment/24/24553-47520-m.jpg",
    "https://www.kindmeal.my/photos/moment/24/24586-47627-m.jpg",
    "https://www.kindmeal.my/photos/moment/24/24586-47627-m.jpg",
    "https://www.kindmeal.my/photos/moment/24/24604-47680-m.jpg",
    "https://www.kindmeal.my/photos/moment/24/24553-47519-m.jpg"

]




let kindMomentData= [{'png':`https://www.kindmeal.my/photos/member/35/35238-s.jpg`,
                    'name':'CindyChang :',
                    "date":"Nov 10th 2022",
                    'img':`https://www.kindmeal.my/photos/moment/24/24589-47637-m.jpg`,
                    'des':'感谢朋友的邀请我出席 亚洲美食天王陈鸿 x 海南乡新闻发布会】 第一次踏足位于蒲种的海南乡旗舰店，人潮满满，非.'},

                    {'png':`https://www.kindmeal.my/photos/member/22/22038-s.jpg`,
                    'name':'JasonFong :',
                    "date":"Nov 10th 2022",
                    'img':`https://www.kindmeal.my/photos/moment/24/24580-47604-m.jpg`,
                    'des':'感谢朋友的邀请我出席 亚洲美食天王陈鸿 x 海南乡新闻发布会】 第一次踏足位于蒲种的海南乡旗舰店，人潮满满，非.'},

                    {'png':`https://www.kindmeal.my/photos/member/14/14287-s.jpg`,
                    'name':'Bvelyn :',
                    "date":"Nov 9th 2022",
                    'img':`https://www.kindmeal.my/photos/moment/24/24550-47505-m.jpg`,
                    'des':'感谢朋友的邀请我出席 亚洲美食天王陈鸿 x 海南乡新闻发布会】 第一次踏足位于蒲种的海南乡旗舰店，人潮满满，非.'},

                    {'png':`https://www.kindmeal.my/photos/member/11/11542-s.jpg`,
                    'name':'TaiSiewLee: ',
                    "date":"Nov 9th 2022",
                    'img':`https://www.kindmeal.my/photos/moment/24/24589-47640-m.jpg`,
                    'des':'感谢朋友的邀请我出席 亚洲美食天王陈鸿 x 海南乡新闻发布会】 第一次踏足位于蒲种的海南乡旗舰店，人潮满满，非.'},

                    {'png':`https://www.kindmeal.my/photos/member/23/23028-s.jpg`,
                    'name':'YinYinBoey :',
                    "date":"Nov 10th 2022",
                    'img':`https://www.kindmeal.my/photos/moment/24/24560-47541-m.jpg`,
                    'des':'Today’s salad. Having a salad today as I know I’m gonna hav.'},
                
                    {'png':`https://www.kindmeal.my/photos/member/23/23028-s.jpg`,
                    'name':'YinYinBoey :',
                    "date":"Nov 8th 2022",
                    'img':`https://www.kindmeal.my/photos/moment/24/24592-47650-m.jpg`,
                    'des':'Raw vegan falafel balls going into the dehydrator!.'},               
                ];
    
let body=document.getElementById('body')
let lower_body=document.getElementById('lower_body')

kindMomentData.forEach((el)=>{
    createCards(el,body)   
})

kindMomentData.forEach((el)=>{
    createCards(el,lower_body)   
})


function createCards(el,container){
    
    let div1_1= document.createElement('div');
    let div1_2= document.createElement('div');
    

    let div1_3= document.createElement('div');
    let text= document.createElement('h3');
        text.innerText="View"
    let view= document.createElement('div');
        view.className='view';
        view.append(text)
        

    let div1= document.createElement('div');
    let div2= document.createElement('div');
    let div3= document.createElement('div');
    let divWrap= document.createElement('div');
        divWrap.className='card';

    let png= document.createElement('img');
        png.src=el.png;
        png.className='png'
    let name= document.createElement('h4');
        name.innerText=el.name;
        
    let img= document.createElement('img'); 
        img.src=el.img;
        img.className='image';
       
        
    let des= document.createElement('p');
        des.innerText=el.des;

        
     div1.append(div1_1,div1_2,div1_3);

     div1_1.append(png)
     div1_2.append(name);
     div1_2.append(el.date);
     
     div1_3.append(view);
     div2.append(img);
     div3.append(des);
    divWrap.append(div1,div2,div3);
    container.append(divWrap);
}


let i=0;
let s_image= document.querySelector(".image");

let mid_body_img=document.getElementById('mid_body_img');
imageSlide(3000, mid_body_img)
imageSlide(5000, s_image)

function imageSlide(delay,image){
    setInterval(()=>{
       
         image.src=slidingImage[i];
     if(i==slidingImage.length-1){
         i=0;
     }
     
         i++;
         
      },delay)
}

