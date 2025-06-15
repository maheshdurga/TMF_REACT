import React from "react";
import Navbars from "./Navbars";
import Search from "./Search";

const Header =()=>{
    return<> <img  id="header" src="https://th.bing.com/th/id/R.6480742e1f2573b446dd1576535fd44c?rik=4esch6FuQ8X%2b5g&riu=http%3a%2f%2fgetd
    rawings.com%2ffree-icon%2frestaurant-icon-png-75.png&ehk=pLVQn%2f7gdWFHABH33i0Ey1z8ZjkmCXaSVBAOm9sqBjg%3d&risl=&pid=ImgRaw&r=0"  
    style={{height:"150px",
        width:"150px",
    borderRadius:"10px"}} ></img>
    <Navbars/>
    <Search/>
    </>   
}
export default Header;