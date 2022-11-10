import { header, footer } from "../components/utility.js";
let head = document.getElementById("header")
head.innerHTML = header()
let KM_footer = document.getElementById('footer');
KM_footer.innerHTML = footer();


const data1 = [
    {
        img: `https://www.kindmeal.my/photos/deal/7/720-5195-l.jpg`,
        h: `Yishenshu Groceries`,
        name: ` Yishensu Groceries Ipoh `,
        location: `Ipoh, Perak`,
        desc: `Yishensu Groceries, Ipoh offers you a wide range of healthy, nutritious and tasty vegetarian products! We develop our own exclus..`
    },
    {
        img: `https://www.kindmeal.my/photos/deal/6/610-3386-l.jpg`,
        h: `Authentic Asian Experience`,
        name: `Cameleon Vegetarian Restaurant `,
        location: ` Kuala Lumpur, Wilayah `,
        desc: `Indulge yourself in healthy, authentic Asian cuisines within a traditional dinning environment. Enjoy any items from our ala cart..`
    },
    {
        img: `https://www.kindmeal.my/photos/deal/7/704-4734-l.jpg`,
        h: `Vegan Ice-Cream Indulgence`,
        name: `Negative 12 Degrees Negative 12 Degrees  `,
        location: `  Bangsar, Kuala Lumpur `,
        desc: `Indulge in our rich, flavorful selection of vegan ice-creams, crafted with healthy, natural ingredients. Enjoy any ice-creams fr..`
    },
    {
        img: `https://www.kindmeal.my/photos/deal/6/682-4370-l.jpg`,
        h: `Smooth Teas And Cold Brews`,
        name: `Fulleaf Tea Store `,
        location: `Bandar Sunway, Selangor `,
        desc: ` Chill out with our ready-to-drink Cold Brew Teas! Invigorate yourself with our healthy, refreshing selection of Pure and Smooth T..`
    },

]

const data2 = [
    {
        img: `https://www.kindmeal.my/photos/deal/6/698-4639-l.jpg`,
        h: `Nutritious Meets Delicious`,
        name: `Wise Crafters`,
        location: `Petaling Jaya, Selangor`,
        desc: `Wise Crafters offers freshly-prepared meals, developed by a team of chefs and nutritionists. Let us invigorate your body and mind..`,

    },

    {
        img: `https://www.kindmeal.my/photos/deal/4/467-2796-l.jpg`,
        h: `Churros, Coffee & Meals`,
        name: `PCLO Cafe  `,
        location: `Kuala Lumpur, Wilayah Persekutuan`,
        desc: `Think of Churros, think of PCLO Cafe! Each batch of eggless Churros is made with passion and from scratch in our kitchen. Which ..`,

    },
    {
        img: `https://www.kindmeal.my/photos/deal/5/529-2478-l.jpg`,
        h: `Scrumptious Croutons`,
        name: `Croutons Cafe`,
        location: `Seri Kembangan, Selangor`,
        desc: `Croutons brings you a sumptuous variety of international cuisines. Indulge in any of the meat-free items from our menu below: `,

    },
    {
        img: `https://www.kindmeal.my/photos/deal/4/457-2109-l.jpg`,
        h: `Flavours Around The World`,
        name: ` The Black Cat Cafe `,
        location: `Kuala Lumpur, Wilayah Persekutuan`,
        desc: `Western and Asian cuisine, all prepared in our humble kitchen with utmost passion and love. On Weekdays, select ANY items from ..`,

    },
    {
        img: `https://www.kindmeal.my/photos/deal/6/698-4639-l.jpg`,
        h: `Nutritious Meets Delicious`,
        name: `Wise Crafters`,
        location: `Petaling Jaya, Selangor`,
        desc: `Wise Crafters offers freshly-prepared meals, developed by a team of chefs and nutritionists. Let us invigorate your body and mind..`,

    },

    {
        img: `https://www.kindmeal.my/photos/deal/4/467-2796-l.jpg`,
        h: `Churros, Coffee & Meals`,
        name: `PCLO Cafe  `,
        location: `Kuala Lumpur, Wilayah Persekutuan`,
        desc: `Think of Churros, think of PCLO Cafe! Each batch of eggless Churros is made with passion and from scratch in our kitchen. Which ..`,

    },
    {
        img: `https://www.kindmeal.my/photos/deal/5/529-2478-l.jpg`,
        h: `Scrumptious Croutons`,
        name: `Croutons Cafe`,
        location: `Seri Kembangan, Selangor`,
        desc: `Croutons brings you a sumptuous variety of international cuisines. Indulge in any of the meat-free items from our menu below: `,

    },
    {
        img: `https://www.kindmeal.my/photos/deal/4/457-2109-l.jpg`,
        h: `Flavours Around The World`,
        name: ` The Black Cat Cafe `,
        location: `Kuala Lumpur, Wilayah Persekutuan`,
        desc: `Western and Asian cuisine, all prepared in our humble kitchen with utmost passion and love. On Weekdays, select ANY items from ..`,

    },
    {
        img: `https://www.kindmeal.my/photos/deal/7/720-5195-l.jpg`,
        h: `Yishenshu Groceries`,
        name: ` Yishensu Groceries Ipoh `,
        location: `Ipoh, Perak`,
        desc: `Yishensu Groceries, Ipoh offers you a wide range of healthy, nutritious and tasty vegetarian products! We develop our own exclus..`
    },
    {
        img: `https://www.kindmeal.my/photos/deal/6/610-3386-l.jpg`,
        h: `Authentic Asian Experience`,
        name: `Cameleon Vegetarian Restaurant `,
        location: ` Kuala Lumpur, Wilayah `,
        desc: `Indulge yourself in healthy, authentic Asian cuisines within a traditional dinning environment. Enjoy any items from our ala cart..`
    },
    {
        img: `https://www.kindmeal.my/photos/deal/7/704-4734-l.jpg`,
        h: `Vegan Ice-Cream Indulgence`,
        name: `Negative 12 Degrees Negative 12 Degrees  `,
        location: `  Bangsar, Kuala Lumpur `,
        desc: `Indulge in our rich, flavorful selection of vegan ice-creams, crafted with healthy, natural ingredients. Enjoy any ice-creams fr..`
    },
    {
        img: `https://www.kindmeal.my/photos/deal/6/682-4370-l.jpg`,
        h: `Smooth Teas And Cold Brews`,
        name: `Fulleaf Tea Store `,
        location: `Bandar Sunway, Selangor `,
        desc: ` Chill out with our ready-to-drink Cold Brew Teas! Invigorate yourself with our healthy, refreshing selection of Pure and Smooth T..`
    },

]
const data3 = [
    {
        img: `https://www.kindmeal.my/photos/deal/6/698-4639-l.jpg`,
        h: `Nutritious Meets Delicious`,
        name: `Wise Crafters`,
        location: `Petaling Jaya, Selangor`,
        desc: `Wise Crafters offers freshly-prepared meals, developed by a team of chefs and nutritionists. Let us invigorate your body and mind..`,

    },

    {
        img: `https://www.kindmeal.my/photos/deal/6/682-4370-l.jpg`,
        h: `Smooth Teas And Cold Brews`,
        name: `Fulleaf Tea Store `,
        location: `Bandar Sunway, Selangor `,
        desc: ` Chill out with our ready-to-drink Cold Brew Teas! Invigorate yourself with our healthy, refreshing selection of Pure and Smooth T..`
    },
    {
        img: `https://www.kindmeal.my/photos/deal/4/467-2796-l.jpg`,
        h: `Churros, Coffee & Meals`,
        name: `PCLO Cafe  `,
        location: `Kuala Lumpur, Wilayah Persekutuan`,
        desc: `Think of Churros, think of PCLO Cafe! Each batch of eggless Churros is made with passion and from scratch in our kitchen. Which ..`,

    },
    {
        img: `https://www.kindmeal.my/photos/deal/6/610-3386-l.jpg`,
        h: `Authentic Asian Experience`,
        name: `Cameleon Vegetarian Restaurant `,
        location: ` Kuala Lumpur, Wilayah `,
        desc: `Indulge yourself in healthy, authentic Asian cuisines within a traditional dinning environment. Enjoy any items from our ala cart..`
    },
    {
        img: `https://www.kindmeal.my/photos/deal/7/704-4734-l.jpg`,
        h: `Vegan Ice-Cream Indulgence`,
        name: `Negative 12 Degrees Negative 12 Degrees  `,
        location: `  Bangsar, Kuala Lumpur `,
        desc: `Indulge in our rich, flavorful selection of vegan ice-creams, crafted with healthy, natural ingredients. Enjoy any ice-creams fr..`
    },
    {
        img: `https://www.kindmeal.my/photos/deal/5/529-2478-l.jpg`,
        h: `Scrumptious Croutons`,
        name: `Croutons Cafe`,
        location: `Seri Kembangan, Selangor`,
        desc: `Croutons brings you a sumptuous variety of international cuisines. Indulge in any of the meat-free items from our menu below: `,

    },
    {
        img: `https://www.kindmeal.my/photos/deal/4/457-2109-l.jpg`,
        h: `Flavours Around The World`,
        name: ` The Black Cat Cafe `,
        location: `Kuala Lumpur, Wilayah Persekutuan`,
        desc: `Western and Asian cuisine, all prepared in our humble kitchen with utmost passion and love. On Weekdays, select ANY items from ..`,

    },
    {
        img: `https://www.kindmeal.my/photos/deal/7/720-5195-l.jpg`,
        h: `Yishenshu Groceries`,
        name: ` Yishensu Groceries Ipoh `,
        location: `Ipoh, Perak`,
        desc: `Yishensu Groceries, Ipoh offers you a wide range of healthy, nutritious and tasty vegetarian products! We develop our own exclus..`
    },

]
const data4 = [
    {
        img: `https://www.kindmeal.my/photos/deal/6/698-4639-l.jpg`,
        h: `Nutritious Meets Delicious`,
        name: `Wise Crafters`,
        location: `Petaling Jaya, Selangor`,
        desc: `Wise Crafters offers freshly-prepared meals, developed by a team of chefs and nutritionists. Let us invigorate your body and mind..`,

    },

    {
        img: `https://www.kindmeal.my/photos/deal/4/467-2796-l.jpg`,
        h: `Churros, Coffee & Meals`,
        name: `PCLO Cafe  `,
        location: `Kuala Lumpur, Wilayah Persekutuan`,
        desc: `Think of Churros, think of PCLO Cafe! Each batch of eggless Churros is made with passion and from scratch in our kitchen. Which ..`,

    },
    {
        img: `https://www.kindmeal.my/photos/deal/7/704-4734-l.jpg`,
        h: `Vegan Ice-Cream Indulgence`,
        name: `Negative 12 Degrees Negative 12 Degrees  `,
        location: `  Bangsar, Kuala Lumpur `,
        desc: `Indulge in our rich, flavorful selection of vegan ice-creams, crafted with healthy, natural ingredients. Enjoy any ice-creams fr..`
    },
    {
        img: `https://www.kindmeal.my/photos/deal/6/682-4370-l.jpg`,
        h: `Smooth Teas And Cold Brews`,
        name: `Fulleaf Tea Store `,
        location: `Bandar Sunway, Selangor `,
        desc: ` Chill out with our ready-to-drink Cold Brew Teas! Invigorate yourself with our healthy, refreshing selection of Pure and Smooth T..`
    },
    {
        img: `https://www.kindmeal.my/photos/deal/5/529-2478-l.jpg`,
        h: `Scrumptious Croutons`,
        name: `Croutons Cafe`,
        location: `Seri Kembangan, Selangor`,
        desc: `Croutons brings you a sumptuous variety of international cuisines. Indulge in any of the meat-free items from our menu below: `,

    },
    {
        img: `https://www.kindmeal.my/photos/deal/4/457-2109-l.jpg`,
        h: `Flavours Around The World`,
        name: ` The Black Cat Cafe `,
        location: `Kuala Lumpur, Wilayah Persekutuan`,
        desc: `Western and Asian cuisine, all prepared in our humble kitchen with utmost passion and love. On Weekdays, select ANY items from ..`,

    },
    {
        img: `https://www.kindmeal.my/photos/deal/7/720-5195-l.jpg`,
        h: `Yishenshu Groceries`,
        name: ` Yishensu Groceries Ipoh `,
        location: `Ipoh, Perak`,
        desc: `Yishensu Groceries, Ipoh offers you a wide range of healthy, nutritious and tasty vegetarian products! We develop our own exclus..`
    },
    {
        img: `https://www.kindmeal.my/photos/deal/6/610-3386-l.jpg`,
        h: `Authentic Asian Experience`,
        name: `Cameleon Vegetarian Restaurant `,
        location: ` Kuala Lumpur, Wilayah `,
        desc: `Indulge yourself in healthy, authentic Asian cuisines within a traditional dinning environment. Enjoy any items from our ala cart..`
    },

]


let container = document.getElementById("container")
const append = (data) => {
    container.innerHTML = null
    data.forEach(element => {

        let card = document.createElement("div")
        card.id = "card"
        let img = document.createElement("img")
        img.src = element.img

        let nameandlocation = document.createElement("div")
        nameandlocation.id = "nameandlocation"

        let h = document.createElement("h1")
        h.innerText = element.h
        h.id = "h"

        let name = document.createElement("p")
        name.innerText = element.name
        name.id = "name"

        let location = document.createElement("p")
        location.innerText = element.location
        location.id = "location"


        let desc = document.createElement("p")
        desc.innerText = element.desc
        desc.id = "desc"


        let btnandstars = document.createElement("div")
        btnandstars.id = "btnandstars"

        let btn = document.createElement("button")
        btn.innerText = "Get FREE Coupon"
        btn.id = "CouponBtn"

        let stars = document.createElement("img")
        stars.src = "https://www.pngplay.com/wp-content/uploads/6/Golden-5-Star-Rating-PNG.png"
        stars.id = "stars"

        btnandstars.append(btn, stars)

        let lastdiv = document.createElement("div")
        lastdiv.id = "lastdivcard"
        lastdiv.innerHTML = `<div id="d1">
        <img id="i1" src="https://www.kindmeal.my/images/icon_egg.png" alt="">
        <img id="i2" src="https://www.kindmeal.my/images/icon_milk.png" alt="">
        <img id="i3" src="https://www.kindmeal.my/images/icon_alcohol.png" alt="">
    </div>
    <div id="d2">
        <p id="p1">Kind Meal Discount</p>
        <h3 id="h3">20%</h3>
    </div>
    
    <div id="d3">
        <h2 id="h2">Expires in</h2>
        <h1 id="h1">5 Days</h1>
    </div>`

        nameandlocation.append(name, location)
        card.append(img, h, nameandlocation, desc, btnandstars, lastdiv)
        container.append(card)


    });


}
let page1 = document.getElementById("page1")
page1.addEventListener("click", () => {
    // window.location.href = "kindMeals.html"
    scroll(0, 0)
    append(data3)
})

let page2 = document.getElementById("page2")
page2.addEventListener("click", () => {
    // window.location.href = "kindMeals.html"
    scroll(0, 0)
    append(data2)
})


let page3 = document.getElementById("page3")
page3.addEventListener("click", () => {
    // window.location.href = "kindMeals.html"

    scroll(0, 0)

    append(data3)
})


let page4 = document.getElementById("page4")
page4.addEventListener("click", () => {
    // window.location.href = "kindMeals.html"
    scroll(0, 0)
    append(data4)
})
append(data1)