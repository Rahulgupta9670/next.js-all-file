import React from 'react'
import Router from 'next/router'

 const Navbaar = () => {
    const logout =(e)=>{
        e.preventDefault()
        Router.push("/")
        localStorage.clear("jwt");


    }
  return (
    <div>
           <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="/Dashboard">Home</a></li>
                <li><a href="/ProfileList">List</a></li>
                <li><a href="/Category">Category</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Testimonial</a></li>
                <li><a onClick={logout}>Logout</a></li>
            </ul>
            <h1 class="logo">Navbar</h1>
        </div>
    </nav>
    </div>
  )
}
export default Navbaar
