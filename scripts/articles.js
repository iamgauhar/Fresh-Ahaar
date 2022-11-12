
let art_data_hard_coded=[
    {
        'url':'https://www.kindmeal.my/photos/article/20/20233-l.jpg',
        'title':'Tornado Potatoes',
        'web_name':'by KindMeal.my',
        'description':'Peri Peri Tornado Potato — a fantastic, fun, tasty way to cook potatoes!',
        'date':'11:nov:2022',
        
        "articles":`Food is one of the basic necessities of life. Food contains nutrients—substances essential for the growth, 
            repair, and maintenance of body tissues and for the regulation of vital processes. Nutrients provide the energy our 
            bodies need to function.
            The energy in food is measured in units called calories. Age, sex, weight, height, and level of activity determine 
            the number of calories a person needs each day. Depending on age, sex, and activity level, the recommended daily caloric 
            intake for a child aged 11 to 14 can range anywhere from 1,600 to 2,600 calories per day, with sedentary girls 
            needing the fewest calories and active boys needing the most. For adults, this can range from 1,800 to about 3,000.`
    },
    {
        "url": "https://www.kindmeal.my/photos/article/20/20206-l.jpg",
        "title": " Satay Stir Fry",
        "web_name": "by KindMeal.my",
        "description": "Whip up this delicious satay stir fry — quick, protein-packed with delicious peanutty umami flavour!",
        "date": "02 November 2022",
        
        "articles":`Food is one of the basic necessities of life. Food contains nutrients—substances essential for the growth, 
            repair, and maintenance of body tissues and for the regulation of vital processes. Nutrients provide the energy our 
            bodies need to function.
            The energy in food is measured in units called calories. Age, sex, weight, height, and level of activity determine 
            the number of calories a person needs each day. Depending on age, sex, and activity level, the recommended daily caloric 
            intake for a child aged 11 to 14 can range anywhere from 1,600 to 2,600 calories per day, with sedentary girls 
            needing the fewest calories and active boys needing the most. For adults, this can range from 1,800 to about 3,000.`
    },
    {
        "url": "https://www.kindmeal.my/photos/article/20/20238-l.jpg",
        "title": "Have You Ever Wondered Why You Hear So Much About Cruelty In Animal Agriculture ..",
        "web_name": "by Animal Equality",
        "description": "Have you ever wondered why you hear so much about cruelty in animal agriculture but rarely hear about justice for this abuse ?",
        "date": "12 November 2022",
        "articles": " In the UK, there are over 180 taxpayer-funded bodies responsible for overseeing animal welfare on farms. However, only one inspector is assigned to every 205 farms. That number is likely to be even less in practice, as this includes part-time workers and those with farm welfare duties as a part of a wider role.  In addition to a lack of inspections, there is a severe lack of enforcement when animal welfare violations occur. Based on data collected directly from the responsible entities only half of the complaints they received in recent years were followed up with an inspection.   Of those inspected, illegalities were found in approximately one-third of cases. Only one in 300 farms were prosecuted following the initial complaint.  As The Guardian reported, “even when investigations by animal protection organizations such as Animal Equality, Animal Aid, Compassion in World Farming and Open Cages uncovered alleged evidence of illegal activity or substandard practices, more often than not it went unpunished.”  Across 65 investigation releases by animal protection organizations, including Animal Equality, from 2016 to 2021, illegal activity or poor practices were discovered in every facility. Yet there was no formal enforcement action taken in over 60% of cases, to our knowledge.  Non-compliance is endemic, evidenced time and again through undercover investigations and now further bolstered by the data revealed in this report. Pigs are having their tails cut off, cows are unable to walk or stand and hens are crammed into overcrowded cages, yet farms are typically receiving little more than a slap on the wrist. These findings are disturbing and should be alarming to any consumer. Animal abusers need to truly be held accountable.  -Abigail Penny, Executive Director for Animal Equality UK"
    },
    {
        "url": "https://www.kindmeal.my/photos/article/20/20204-l.jpg",
        "title": `Vegan Potions - Animal Outlook`,
        "web_name": "by Compassion Over Killing",
        "description": "Happy Halloween 👻 Read our newest blog on whether of not the potions from Halloween classic Hocus Pocus are vegan. Plus a list of some great vegan candies and treats:",
        "date": "01 November 2022",

        "articles":"Food is one of the basic necessities of life. Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes. Nutrients provide the energy our  bodies need to function. The energy in food is measured in units called calories. Age, sex, weight, height, and level of activity determin the number of calories a person needs each day. Depending on age, sex, and activity level, the recommended daily caloric intake for a child aged 11 to 14 can range anywhere from 1,600 to 2,600 calories per day, with sedentary girls needing the fewest calories and active boys needing the most. For adults, this can range from 1,800 to about 3,000"
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
let art_data=JSON.parse(localStorage.getItem('Create_Articles_Data'));

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
                viewVideo.innerText='View Articles';

                viewVideo.onclick=()=>{

                    location.href='readArticles.html'
                    localStorage.setItem('Articles_Data',JSON.stringify(el));
                }
            let date=document.createElement('p');
                date.innerText=el.date;

           

                div2_2.append(viewVideo, date);
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
