
let kindMomentData= {'png':`https://www.kindmeal.my/photos/member/35/35238-s.jpg`,'name':'CindyChang','img':`https://www.kindmeal.my/photos/moment/24/24585-47620-m.jpg`,'des':'感谢朋友的邀请我出席 亚洲美食天王陈鸿 x 海南乡新闻发布会】 第一次踏足位于蒲种的海南乡旗舰店，人潮满满，非.'}
    


const appendData= ()=>{
    let div1_1= document.createElement('div');
    let div1_2= document.createElement('div');
    let div1_3= document.createElement('div');

    let div1= document.createElement('div');
    let div2= document.createElement('div');
    let div3= document.createElement('div');
    let divWrap= document.createElement('div');
        divWrap.className='card';

    let png= document.createElement('img');
        png.src=kindMomentData.png;
        png.className='png'
    let name= document.createElement('he');
        name.innerText=kindMomentData.name;

    let img= document.createElement('img'); 
        img.src=kindMomentData.img;
        img.className='image'
    let des= document.createElement('p');
        des.innerText=kindMomentData.des;

        
        

     div1.append(div1_1,div1_2,div1_3);

    //  div1_1.append(png)
    // div2.append(img);
    // div3.append(des);
    divWrap.append(div1,div2,div3);
    document.getElementById('body').append(divWrap);
}

appendData()