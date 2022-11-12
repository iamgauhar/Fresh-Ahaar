


class create_articles_data{
    constructor(url,title,web_name,description,date){
        this.url=url;
        this.title=title;
        this.web_name=web_name;
        this.description=description;
        this.date=date;
    }
 }



  art_data =JSON.parse(localStorage.getItem('Articles_Data')) || []

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
    alert('Your Post is Generated Successfully')
 }
