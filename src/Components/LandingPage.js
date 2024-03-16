import React from "react";

 export default function Landingpage(){

    return<>
    <div class="banners">
    <div>
        <nav class="navbar">
            <div class="headers">
                <div class="imgess">
                    {/* <img src="./images/logo.png" alt=""/> */}
                </div>
                <div class="navbarheader" style="margin-top: 20px;">
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">OUR-PRODUCT</a></li>
                        <li><a href="#">VIDEO-GAMES</a></li>
                        <li><a href="#">REMOTE_CONTROL</a></li>
                        <li><a href="#">CONTACT US</a></li>
                        <li><a href="#" class="glyphicon glyphicon-search">SIGN-IN</a></li>
                        <li><a href="#">REGISTER</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

    <div class="seconddiv">
        <div class="Ps2containt">
            <div class="border">
                <div><h3 style={"color: black; font-size: 4rem;"}>VIDEO <span style="color: aqua;">GAMES</span></h3></div>
                <div><h1 style={"color: #599EE9; font-size: 8rem;"}>CONTROLLER</h1></div>
            </div>
            <div class="border" style="color: black; font-size: 2rem;">There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration in some form, by injected humour, or randomised words which don't look even
                slightly believableShop</div>
            <div class="border">
                <button style="padding:1rem 3rem;border-radius: 5px; border: none;">Shop-Now</button>
            </div>
        </div>
        <div class="Ps2">

        </div>
    </div>
</div>

    </>
}