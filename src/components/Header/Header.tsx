import './header.css'
import "remixicon/fonts/remixicon.css";
import { useEffect, useState } from 'react'

const Header = () => {
    {/*Hozz létre egy boolean állapotváltozót. Értéke alapján hozzáadja a nav_menu osztállyal ellátott elemhez a show-menu osztályt.*/ }

    {/*Hozz létre egy állapotváltozót boolean típussal, amely azt figyeli, hogy kell-e árnyékot állítani a headernek. */ }

    {/* Ha 50 px-rel lejjebb görgetünk (window.scrollY >= 50), akkor a header osztályú elemhez adjuk hozzá a shadow-header osztályt. */ }

    {/*Generáld le a HOME, POPULAR, ABOUT US, PRODUCTS, CONTACT listaelemeket. Mindegyik a megfelelő helyre mutasson az oldalon*/ }

    {/*A szükséges css osztályokat megtalálod a header.css - ben.*/ }

    {/*importáld a remixicont: import "remixicon/fonts/remixicon.css"; */ }

    {/*close ikon osztálya: ri-close-large-line */ }

    {/*toggle ikon osztálya: ri-apps-2-fill */ }

    const [toggle, setToggle] = useState(false);
    const [hasShadow, setHasShadow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => setHasShadow(window.scrollY >= 50));
    }, [])

    const handleResetToggle = (b: boolean) => setToggle(b);

    return (
        <header className={`header ${hasShadow ? 'shadow-header' : ''}`} >
            <nav>
                <a href="#" className="nav__logo">STARCOFFEE</a>

                <div className={`nav__menu ${toggle ? 'show-menu' : ''}`}>
                    <ul className="nav__list">
                        <li><a className='nav__link' href="#home">HOME</a></li>
                        <li><a className='nav__link' href="#popular">POPULAR</a></li>
                        <li><a className='nav__link' href="#about_us">ABOUT US</a></li>
                        <li><a className='nav__link' href="#products">PRODUCTS</a></li>
                        <li><a className='nav__link' href="#contact">CONTACT</a></li>
                    </ul>
                    <div onClick={() => handleResetToggle(false)} className="nav__close">
                        <i className="ri-close-large-line"></i>
                    </div>
                </div>
                <div onClick={() => handleResetToggle(true)} className="nav__toggle">
                    <i className="ri-apps-2-fill"></i>
                </div>
            </nav>
        </header >
    );
}

export default Header
