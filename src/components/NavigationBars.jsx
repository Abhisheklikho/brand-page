

const Navigation = ()=>{

    return(
        <div>
           <nav>
            <div className="brand-logo">
                <img src="./images/brand_logo.png" alt="logo"></img>
            </div>
            <div className="nav-btn">
               <a href="https://www.nike.com/in/w/mens-shoes-nik1zy7ok">MENU</a>
                <a href="https://www.nike.com/in/w/mens-shoes-nik1zy7ok">LOCATION</a>
                <a href="https://www.nike.com/in/w/mens-shoes-nik1zy7ok">ABOUT</a>
                <a href="https://www.nike.com/in/w/mens-shoes-nik1zy7ok">CONTACT</a>
            </div>
            <div className="login-btn">
                <button>Login</button>
            </div>
           </nav>
        </div>
    )
}

export default Navigation;
