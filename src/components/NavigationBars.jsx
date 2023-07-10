

const Navigation = ()=>{

    return(
        <div>
           <nav>
            <div className="brand-logo">
                <img src="./images/brand_logo.png" alt="logo"></img>
            </div>
            <div className="nav-btn">
                <a href="www.google.com">MENU</a>
                <a href="www.google.com">LOCATION</a>
                <a href="www.google.com">ABOUT</a>
                <a href="www.google.com">CONTACT</a>
            </div>
            <div className="login-btn">
                <button>Login</button>
            </div>
           </nav>
        </div>
    )
}

export default Navigation;