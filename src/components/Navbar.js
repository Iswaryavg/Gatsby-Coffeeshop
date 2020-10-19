import React,{useState} from 'react'
import {Link} from 'gatsby'
import data from "../Constants/Links"
import logo from "../images/coffeelogo.jpg"
import {FaCartArrowDown} from "react-icons/fa"
function Navbar() {
  const[navicon,setnavicon]=useState({navOpen:false,css:"collapse navbar-collapse"})

function handletoggle()
{
  navicon.navOpen?setnavicon(prevalue=>({...prevalue,navOpen:false,css:"collapse navbar-collapse"})):setnavicon(prevalue=>({...prevalue,navOpen:true,css:"collapse navbar-collapse show"}))
}

 return <nav className="navbar navbar-expand-sm bg-light navbar-light">
<Link to="/" className="navbar-brand">
    <img src={logo} alt="logo" width="50px"/>
</Link>
<button className="navbar-toggler" type="button" onClick={handletoggle}><span className={"navbar-toggler-icon" }/></button> 

<div className={navicon.css}>
<ul className="navbar-nav mx-auto">
 {data.map(link=>{
   return(
     <li key={link.id}>
       <Link to={link.path} className="nav-link text-capitalize ">{link.text}</Link>
     </li>)
   }
 )} 
  <li className="nav-item  ml-sm-5">
    <FaCartArrowDown className="cart-icon snipcart-checkout"/></li>
</ul>
    </div>
</nav>

}

export default Navbar
