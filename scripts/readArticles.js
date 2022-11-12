


let read_articles= JSON.parse(localStorage.getItem('Articles_Data'));

console.log(read_articles)

const appendData= ({url,title,web_name,description,date,articles})=>{

    let img_container=document.getElementById('img_container');
        let img=document.createElement('img');
            img.src=url

        img_container.append(img);

    let article_container=document.getElementById('article_container');
        let h2=document.createElement('h2');
            h2.innerText=title;

        let p=document.createElement('p');
            p.innerText=articles;

        let aurther_name=document.createElement('p');
            aurther_name.innerText=web_name;

        let p3= document.createElement('p');
            p3.innerText=date;
    
        article_container.append(h2,p,aurther_name,p3)
}

