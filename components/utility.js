function header(){
    return `<div id="tophead">
    <div id="logo">
        <img src="./fresh11.png" alt="logo">

    </div>
    <div id="login">
        <a href=""><div>Facebook</div></a>
        <a href="#"><div>Email</div></a>
        <a id="signup" href="#">Signup</a>
    </div>
</div>

<nav>
    
        <a href="index.html"><div>Home</div></a>
        <a href="kindMeals.html"><div>Meal Deals</div></a>
        <a href="kindMoments.html"><div id='go_to_kindMoments'>Kind Moments</div></a>
        <a href="#"><div>Hot Picks</div></a>
        <a href="#"><div>Directory</div></a>
        <a href="articles.html "><div>Articles</div></a>
        <a href="help.html"><div>Help</div></a>
    
</nav>

<div id="login_form">
    <div>
        <div class="cross">
            <svg id="cross" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
        </div>
        <div class="first">
            <div>
                <img src="./fresh11.png" alt="LOGO">

            </div>
            <div>
                <h2>Join Fresh Ahaar For FREE Now</h2>
                <p>Please select the type of membership to proceed</p>
            </div>
        </div>
        <a href="join.html">
            <div class="second same">
                <div>
                    <img src="https://www.kindmeal.my/images/join_normal.png" alt="">
                </div>
                <div>
                    <h3>Food Lover</h3>
                    <p>Join FREE to enjoy yummy deals, share reviews & meet our community of compassionate food lovers.</p>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="third same">
                <div>
                    <img src="https://www.kindmeal.my/images/join_shop.png" alt="">
                </div>
                <div>
                    <h3>Restaurabt / Shop Owner</h3>
                    <p>List your food outlet, create exciting vegetarian deals & showcase your delicious menu for FREE. Enjoy our yummy deals, share reviews & meet food lovers too.</p>
                </div>
            </div>
        </a>
        <div class="four">
            <div><a href="#" id="logind">Member Login</a></div>
            <div><a href="#">forgot password</a></div>
        </div>
    </div>
</div>
<div id="member_login">
<svg id="login_cross" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>

            <div>
                <div>
                    <img src="./fresh11.png" alt="LOGO">
                </div>
                <div><h3>Member Login</h3></div>
                <form action="">
                    <input type="text" name="username" id="username" placeholder="username">
                    <input type="text" name="password" id="password" placeholder="Your Password">
                    <button id="login_btn">Login</button>
                </form>
                <div>
                    <a href="#">Forgot Password?</a>
                    <a href="#" id="not_member">Not a member? Sign up FREE!</a>
                </div>
            </div>
        </div>
`
}

function footer(){
    return`<div id="foot_menu">
    <div class="footlink">
        <table>
            <tr>
                <th class="foot_heading">
                    General
                </th>
            </tr>
            <tr>
                <td><ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Sign Up</a></li>
                    <li><a href="#">Businesses / Restaurateurs</a></li>
                    <li><a href="#">Advertising</a></li>
                    <li><a href="#">Help & FAQ</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Inspiring Partners</a></li>
                    <li><a href="#">Lifestyle Ambassadors</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul></td>
            </tr>
        </table>
    </div>
    <div class="footlink">
        <table>
            <tr>
                <th class="foot_heading">
                    Features
                </th>
            </tr>
            <tr>
                <td><ul>
                    <li><a href="index.html">Meat-Free Deals</a></li>
                    <li><a href="#">Tasty Menus</a></li>
                    <li><a href="#">Kind Moments</a></li>
                    <li><a href="#">Meat-Free Recipes</a></li>
                    <li><a href="#">Member Recommendations</a></li>
                    <li><a href="#">Featured Restaurants</a></li>
                    <li><a href="#">Vegetarian & Vegan Directory</a></li>
                    <li><a href="#">Food Map</a></li>
                    <li><a href="#">Become A Superhero</a></li>
                    <li><a href="#">Vegan News & Vegetarian Articles</a></li>
                    <li><a href="#">Latest Comments</a></li>
                </ul></td>
            </tr>
        </table>
    </div>
    <div class="footlink">
        <table>
            <tr>
                <th class="foot_heading">
                    Social Media
                </th>
            </tr>
            <tr>
                <td><ul>
                    <li><a href="#">KindMeal Widget</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                    
                </ul></td>
            </tr>
        </table>
    </div>
    <div class="footlink">
        <table>
            <tr>
                <th class="foot_heading">
                    Mobile
                </th>
            </tr>
            <tr>
                <td><ul>
                    <li><a href="#">iPhone & iPod App</a></li>
                    <li><a href="#">Android App</a></li>
                    
                </ul></td>
            </tr>
        </table>
        <table>
            <tr>
                <th class="foot_heading promo">
                    Exciting Promos
                </th>
            </tr>
            <tr>
                <td><ul>
                    <li><a href="#">Gadhimai: Ending Mass</a></li>
                    <li><a href="#">Free Meals</a></li>
                    <li><a href="#">Food Bloggers</a></li>
                    <li><a href="#">Jane Goodball Contest</a></li>
                    <li><a href="#">Win Digi iPhone 6</a></li>
                    <li><a href="#">Feed The Poor</a></li>
                    <li><a href="#">Win Superhero Gifts</a></li>
                    <li><a href="#">Win an iPad mini 3</a></li>
                    
                </ul></td>
            </tr>
        </table>
    </div>
    <div class="footlink">
        <table>
            <tr>
                <th class="foot_heading">
                    PetFinder.my
                </th>
            </tr>
            <tr>
                <td><ul>
                    <li><a href="#">adopt A Pet</a></li>
                    <li><a href="#">Smartphone Apps</a></li>
                    <li><a href="#">WAGazine</a></li>
                    <li><a href="#">Disscussion</a></li>
                    <li><a href="#">Medical Fund</a></li>
                    
                </ul></td>
            </tr>
        </table>
    </div>
    </div>
<div id="copyright">
    Copyright © KindMeal.my, 2014 - 2022. All rights reserved. <br>
This website promotes compassionate, meat-free dining experience. Some food may contain eggs, dairy products or alcohol, please view individual listings for details.
</div>`
}

export {header, footer} 