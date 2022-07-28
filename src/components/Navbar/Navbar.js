import React, { useEffect, useRef, useState } from 'react';
import './Scss/Navbar.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Close, Language, VolumeOff, VolumeUp } from '@material-ui/icons';
import Audio from './audio/audio.mp3';

const Navbar = ({ countLike, countAdd, white, english, uzbek, russian, change1, change2, change3, langTitle, dataProducts, inputValue, filterData, allCategories, dataCategories, dataSubCategories }) => {

    // window scrolling to change background-color of navbar

    window.addEventListener("scroll", function () {
        let navScroll = document.getElementById('nav');        
        if (white) {
            navScroll.classList.toggle("white", window.scrollY > 10);            
        } else if (!white) {
            navScroll.classList.toggle("black", window.scrollY > 10);            
        }
    });

    // responsive navbar-nav show modal

    const [show, setShow] = useState(false)

    // language functions

    const [language, setLanguage] = useState(false)

    function changeHandle1() {
        change1(true)
        setLanguage(!language)
    }
    function changeHandle2() {
        change2(true)
        setLanguage(!language)
    }
    function changeHandle3() {
        change3(true)
        setLanguage(!language)
    }   
    
    const { t } = useTranslation()

    // category bar

    const [catBar, setCatBar] = useState(false)
    const [searchBar, setSearchBar] = useState(false)

    function openCategory(item){
        setCatBar(!catBar)
        setSearchBar(!item)
    }

    // search input methods

    const [dataProd, setDataProd] = useState(dataProducts)

    function clickedSearch(item, post){
        setCatBar(post)
        setSearchBar(item)        
    }

    function typeInput(e){
        filterData(e)
        clickedSearch(true, false)
    }

    function localId(item, post){
        localStorage.setItem("category", item)
        localStorage.setItem("subcategory", post)
        clickedSearch(false)
    }

    // audio

    const audio = useRef(null)           
    const [volume, setVolume] = useState(false)
    
    function playVolume(){
        setVolume(true)
        audio.current.play()
    }
    function endVolume(){
        setVolume(false)
        audio.current.pause()
    }

    // useEffect(() => {      
    //     playVolume()   
    // }, [])
    
    return (
        <>           
            <div id={`nav`} className={`Navbar`}>                    
                <nav className="navbar navbar-expand justify-content-between align-items-center">
                    <div className="navbar-brand portfolio" onClick={() => clickedSearch(false)}>
                        <Link className="nav-link" to="/"><h1 className='nav-title'>MADEINUZB</h1></Link>
                    </div>
                    <audio autoPlay src={Audio} type="audio/mpeg" ref={audio}></audio>
                    <ul className='navbar-nav header-menu'>
                        <li className='nav-item' onClick={() => openCategory(true)}>
                            <div className='category-menu'>
                                <span>{t(1)}</span> <i className={`fa fa-bars d-block mx-2 ${catBar && "d-none"}`}></i> <Close className={`times d-block mx-2 ${!catBar && "d-none"}`} />
                                <div className={`category-tools ${!catBar && "d-none"}`}>
                                    {allCategories.map((data) => (
                                        <Link to="/products" key={data.id} className='result nav-link px-0' onClick={() => localId(data.id)}>{english && data.name_en} {uzbek && data.name_uz} {russian && data.name_ru}</Link>
                                    ))}                                    
                                </div>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <div className="search-bar">
                                <input type="search" className={`${searchBar && "active"}`} value={inputValue} onChange={(e) => typeInput(e)} placeholder={`${t("search")}...`} />
                                <i className='fa fa-search'></i>
                                <div className={`search-filter ${!searchBar && "d-none"} ${inputValue == "" && "d-none"}`}>
                                    {dataProducts.map((data) => (
                                        <Link to={`/product/${data.id}`} key={data.id} className='result nav-link px-0 text-dark' onClick={() => clickedSearch(false)}>{english && data.name_en} {uzbek && data.name_uz} {russian && data.name_ru}</Link>
                                    ))}                                    
                                    {dataCategories.map((data) => (
                                        <Link to="/products" key={data.id} className='result nav-link px-0 text-dark' onClick={() => localId(data.id)}>{english && data.name_en} {uzbek && data.name_uz} {russian && data.name_ru}</Link>
                                    ))} 
                                    {dataSubCategories.map((data) => (
                                        <Link to="/products" key={data.id} className='result nav-link px-0 text-dark' onClick={() => localId(data.category, data.id)}>{english && data.name_en} {uzbek && data.name_uz} {russian && data.name_ru}</Link>
                                    ))}
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className={`navbar-nav main-menu ${show && "show"}`} onClick={() => clickedSearch(false)}>
                        <li className='nav-item'>
                            <Link to="/aboutus" className='nav-link'>{t(2)}</Link>
                        </li>                        
                        <li className='nav-item'>
                            <Link to="/saved" className="nav-link"><i className='fa fa-heart'><span>{countLike}</span></i></Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/cart" className="nav-link"><i className='fa fa-shopping-cart'><span>{countAdd}</span></i></Link>
                        </li>    
                        <Close className="fa fa-times" onClick={() => setShow(false)} />
                    </ul>
                    <div className='navbar-brand'>
                        <VolumeOff className={`volume ${!volume && "d-none"}`} onClick={() => endVolume()} />
                        <VolumeUp className={`volume ${volume && "d-none"}`} onClick={() => playVolume()} />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="language d-flex align-items-center justify-content-between">
                            {english &&
                                <div className={`change-language`} onClick={() => clickedSearch(false)}>
                                    <input type="checkbox" id="language" checked={language} onChange={() => setLanguage(!language)} />
                                    <label htmlFor='language'><Language className='icon' /> {langTitle}</label>
                                    <ul className={`language-menu ${!language && "d-none"}`}>
                                        <li onClick={() => changeHandle1()}><a className='nav-link lang-link'>RU</a></li>
                                        <li onClick={() => changeHandle2()}><a className='nav-link lang-link'>ENG</a></li>
                                        <li onClick={() => changeHandle3()}><a className='nav-link lang-link'>UZ</a></li>
                                    </ul>
                                </div>
                            }
                            {russian &&
                                <div className={`change-language`} onClick={() => clickedSearch(false)}>
                                    <input type="checkbox" id="language" checked={language} onChange={() => setLanguage(!language)} />
                                    <label htmlFor='language'><Language className='icon' /> {langTitle}</label>
                                    <ul className={`language-menu ${!language && "d-none"}`}>
                                        <li onClick={() => changeHandle1()}><a className='nav-link lang-link'>РУ</a></li>
                                        <li onClick={() => changeHandle2()}><a className='nav-link lang-link'>АНГ</a></li>
                                        <li onClick={() => changeHandle3()}><a className='nav-link lang-link'>УЗ</a></li>
                                    </ul>
                                </div>
                            }
                            {uzbek &&
                                <div className={`change-language`} onClick={() => clickedSearch(false)}>
                                    <input type="checkbox" id="language" checked={language} onChange={() => setLanguage(!language)} />
                                    <label htmlFor='language'><Language className='icon' /> {langTitle}</label>
                                    <ul className={`language-menu ${!language && "d-none"}`}>
                                        <li onClick={() => changeHandle1()}><a className='nav-link lang-link'>RU</a></li>
                                        <li onClick={() => changeHandle2()}><a className='nav-link lang-link'>ING</a></li>
                                        <li onClick={() => changeHandle3()}><a className='nav-link lang-link'>O'Z</a></li>
                                    </ul>
                                </div>
                            }
                            <i className={`fa fa-bars`} onClick={() => setShow(true)}></i>
                        </div>
                    </div>
                </nav>
            </div>
            <div className={`contr-lang ${!language && "d-none"}`} onClick={() => setLanguage(false)}></div>
            <div className={`contr-nav ${!show && "d-none"}`} onClick={() => setShow(false)}></div>
            <div className={`contr-search ${!searchBar && "d-none"}`} onClick={() => clickedSearch(false, false)}></div>
            <div className={`contr-category ${!catBar && "d-none"}`} onClick={() => openCategory(true)}></div>
        </>
    );
};

export default Navbar;