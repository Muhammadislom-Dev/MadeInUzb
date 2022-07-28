import React, { useEffect, useState } from 'react';
import './Scss/Product.scss';
import { BrowserRouter, Link, Switch, Route  } from 'react-router-dom';
import Img1 from './images/orange.png';
import Img2 from './images/blue.png';
import Img3 from './images/green.png';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';

const Product = ({dataProducts, white, english, uzbek, russian}) => {

    const [close, setClose] = useState(true)  

    function seeAll(){        
        setClose(false)
    }
    function closeProd(){        
        setClose(true)
    }    

    const {t} = useTranslation()

    return (        
            <div className={`Product ${white && "bg-darkcyan"}`} id="products">
                <div className='wrapper'>
                    <Fade left>
                        <div className='col-md-12 check'>
                            {/* {english && 
                                <>
                                    <h1 className={`${white && "text-white"}`}>Check out products</h1>
                                </>
                            }
                            {russian && 
                                <>
                                    <h1 className={`${white && "text-white"}`}>Посмотреть продукты</h1>
                                </>
                            }
                            {uzbek && 
                                <>
                                    <h1 className={`${white && "text-white"}`}>Mahsulotlarni tekshiring</h1>
                                </>
                            }*/}
                            <h1 className={`${white && "text-white"}`}>{t(5)}</h1>
                        </div>
                    </Fade>
                    <div className='row prod-0'>                                                
                        {(close && dataProducts.slice(0, 6) || !close && dataProducts).map((product) => {                                                                                                                         
                            return(
                                <Fade>                                    
                                    <div className='col-md-4 prod'>
                                        <Link to={`/prdoucts/${product.id}`} className={`list`}>
                                            <div className='list-img'>                                                                                                
                                                <img className={`orange`} src={Img1} />
                                                {/* <div className='orange'></div> */}
                                                {/* <img className={`orange ${product.id === defaultNumber && "d-none"} ${product.id === defaultNumber3 && "d-none"}`} src={Img2} />
                                                <img className={`orange ${product.id === defaultNumber && "d-none"} ${product.id === defaultNumber2 && "d-none"}`} src={Img3} /> */}

                                                <img className='out' src={product.image} /> 
                                            </div>                                                                                    
                                                {english && 
                                                        <h6 className={`text-secondary flour ${white && "text-white"}`}>{product.name_en}</h6>
                                                }
                                                {russian && 
                                                    <h6 className={`text-secondary flour ${white && "text-white"}`}>{product.name_ru}</h6>
                                                }
                                                {uzbek && 
                                                    <h6 className={`text-secondary flour ${white && "text-white"}`}>{product.name_uz}</h6>
                                                }                                                        
                                                {english && 
                                                    <h5 className={`text-dark info ${white && "text-white"}`}>More info</h5>
                                                }
                                                {russian && 
                                                    <h5 className={`text-dark info ${white && "text-white"}`}>Больше информации</h5>
                                                }
                                                {uzbek && 
                                                    <h5 className={`text-dark info ${white && "text-white"}`}>Batafsil ma'lumot</h5>
                                                }                                                                                   
                                        </Link>                                                                
                                    </div>                                                                            
                                </Fade>
                            )                        
                        })}                        
                    </div>
                    <div className='row prod-1'>
                        {(close && dataProducts.slice(0, 6) || !close && dataProducts).map((product) => {
                            return(
                                <Fade>
                                    <div className='col-6 prod'>
                                        <Link to={`/prdoucts/${product.id}`} className={`list`}>
                                            <div className='list-img'>
                                                <img className='orange' src={Img1} />
                                                <img className='out' src={product.image} />
                                            </div>                                        
                                            {english && 
                                                <h6 className={`text-secondary flour ${white && "text-white"}`}>{product.name_en}</h6>
                                            }
                                            {russian && 
                                                <h6 className={`text-secondary flour ${white && "text-white"}`}>{product.name_ru}</h6>
                                            }
                                            {uzbek && 
                                                <h6 className={`text-secondary flour ${white && "text-white"}`}>{product.name_uz}</h6>
                                            }                                                    
                                            {english && 
                                                <h5 className={`text-dark info ${white && "text-white"}`}>More info</h5>
                                            }
                                            {russian && 
                                                <h5 className={`text-dark info ${white && "text-white"}`}>Больше информации</h5>
                                            }
                                            {uzbek && 
                                                <h5 className={`text-dark info ${white && "text-white"}`}>Batafsil ma'lumot</h5>
                                            }                                               
                                        </Link>
                                    </div>                                        
                                </Fade>
                            )
                        })}                       
                    </div>
                    <div className='col-md-12 see-all'>
                        {english &&
                            <>
                               <div className={`btn ${!close && "d-none"}`} onClick={() => seeAll()}>
                                    <a className='nav-link'>SEE ALL</a>
                                </div>
                                <div className={`btn ${close && "d-none"}`} onClick={() => closeProd()}>
                                    <a className='nav-link'>CLOSE</a>
                                </div>
                            </>
                        }
                        {russian &&
                            <>
                               <div className={`btn ${!close && "d-none"}`} onClick={() => seeAll()}>
                                    <a className='nav-link'>ПОКАЗАТЬ ВСЕ</a>
                                </div>
                                <div className={`btn ${close && "d-none"}`} onClick={() => closeProd()}>
                                    <a className='nav-link'>СВЕРНУТЬ</a>
                                </div>
                            </>
                        }
                        {uzbek &&
                            <>
                               <div className={`btn ${!close && "d-none"}`} onClick={() => seeAll()}>
                                    <a className='nav-link'>HAMMASINI KO'RISH</a>
                                </div>
                                <div className={`btn ${close && "d-none"}`} onClick={() => closeProd()}>
                                    <a className='nav-link'>YOPISH</a>
                                </div>
                            </>
                        }                
                    </div>
                </div>
            </div>                    
    );
};

export default Product;