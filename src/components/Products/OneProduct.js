import React, { useEffect, useState } from 'react';
import './Scss/OneProduct.scss';
import Img1 from '../Header/images/back.png'
import Img2 from '../Header/images/product.png'
import Img3 from './images/orange.png';
import Img4 from './images/blue.png';
import Img5 from './images/green.png';
import Img6 from '../Header/images/flower.png'
import Img7 from '../Header/images/two-flower.png'
import Fade from 'react-reveal/Fade';
import { BrowserRouter, Link, Switch, Route  } from 'react-router-dom';
import axios from 'axios';

const OneProduct = ({english, uzbek, russian, id, name, img, descript, changeModal, dataProducts}) => {

    // const [dataProducts, setDataProducts] = useState([]);
    // const urlProducts = `http://93.189.40.27:2100/products/`;
  
    // useEffect(() => {
    //   async function fetchData() {
    //     const request = await axios.get(urlProducts);
    //     setDataProducts(request.data);
    //     return request;
    //   };
    //   fetchData()
    // }, [urlProducts]);

    let randomIndex = Math.round(Math.random() * 10)
    let indexId 
    if(randomIndex > dataProducts.length){
        indexId = 0
    }else if(randomIndex = dataProducts.length){
        indexId = [randomIndex - 2, randomIndex - 1, randomIndex]
    }else if(randomIndex = 1){
        indexId = [randomIndex, randomIndex + 1, randomIndex + 2]
    }else{
        indexId = [randomIndex - 1, randomIndex, randomIndex + 1]
    }
    
    console.log(randomIndex)
    console.log(indexId)

    

    const [modal, setModal] = useState(true)

    const [nameValue, setNameValue] = useState("")
    const [numberValue, setNumberValue] = useState("")
    const [defaultValue, setdefaultValue] = useState("")

    const [redName, setRedName] = useState(false);
    const [redNumber, setRedNumber] = useState(false)

    function handleChange1(item){
        setNameValue(item)
        setRedName(false)
    }
    function handleChange2(item){
        setNumberValue(item)
        setRedNumber(false)
    }    
    
    let bot = {
        TOKEN: "5458070162:AAG7Q0XROYbx4vi2EDr4eW72X5RPnBFPI20",
        chatID: "-1001726663965",
        message: `Ism: ${nameValue} Raqam: ${numberValue}`
    }

    function senDMessage(e){  
        
        if(nameValue === ""){            
            setRedName(true)
        }else if(numberValue === ""){           
            setRedNumber(true)
        }else{
            fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `, {
                method : "GET"
            })
            .then(success => {
                console.log('send message')
            }, error => {
                console.log(error)
            })

            setNameValue("")
            setNumberValue("")          
            setModal(true)
            changeModal()            
        }
        
    }

    return (
        <div className='OneProduct'>
            <div className='wrapper'>
                <div className='header-images'>
                    <div className='col-md-3 flower'>
                        <img src={Img6} />
                    </div>
                    <div className='bg-creem'></div>
                    <div className='col-md-3 two-flower'>
                        <img src={Img7} />
                    </div>
                </div>
                <div className='col-md-6 offset-md-3 header-img-top'>
                    <img className='back' src={Img1} />
                    <img className='prod' src={Img2} />
                </div>
                <div className='row mega-prod'>
                    <div className='col-md-6 product-img'>
                        <div className='list-img'>
                            <img src={img} />
                        </div>
                    </div>
                    <div className='col-md-6 product-text'>
                        {english &&
                            <>
                                <div>
                                    <h1>{name}</h1>
                                    <p>{descript}</p>
                                </div>
                                <div className='btn' onClick={() => setModal(false)}>
                                    <a className='nav-link'>Buy Now <i className='fa fa-arrow-right'></i></a>
                                </div>
                            </>
                        }
                        {russian &&
                            <>
                                <div>
                                    <h1>{name}</h1>
                                    <p>{descript}</p>
                                </div>
                                <div className='btn' onClick={() => setModal(false)}>
                                    <a className='nav-link'>Покупать <i className='fa fa-arrow-right'></i></a>
                                </div>
                            </>
                        }
                        {uzbek &&
                            <>
                                <div>
                                    <h1>{name}</h1>
                                    <p>{descript}</p>
                                </div>
                                <div className='btn' onClick={() => setModal(false)}>
                                    <a className='nav-link'>Hoziroq xarid qilish <i className='fa fa-arrow-right'></i></a>
                                </div>
                            </>
                        }                       
                    </div>
                </div>
            </div>
            <div className='row releated'>
                <h1>Related Products</h1>               
                <div className='prod-0 row'>                   
                    {dataProducts.slice(0, 3).map((product) => {
                        return(                            
                            <Fade>                                                                   
                                <div className='col-md-4 prod'>                                    
                                    <Link to={`/prdoucts/${product.id}`} className={`list`}>
                                        <div className='list-img'>                                                                                                
                                            <img className={`orange`} src={Img3} />
                                            {/* <img className={`orange ${product.id === defaultNumber && "d-none"} ${product.id === defaultNumber3 && "d-none"}`} src={Img2} />
                                            <img className={`orange ${product.id === defaultNumber && "d-none"} ${product.id === defaultNumber2 && "d-none"}`} src={Img3} /> */}

                                            <img className='out' src={product.image} /> 
                                        </div>                                                                                    
                                        {english && 
                                                <h6 className={`flour`}>{product.name_en}</h6>
                                        }
                                        {russian && 
                                            <h6 className={`flour `}>{product.name_ru}</h6>
                                        }
                                        {uzbek && 
                                            <h6 className={`flour`}>{product.name_uz}</h6>
                                        }                                                 
                                        {english && 
                                            <h5 className={`info `}>More info</h5>
                                        }
                                        {russian && 
                                            <h5 className={`info `}>Больше информации</h5>
                                        }
                                        {uzbek && 
                                            <h5 className={`info `}>Batafsil ma'lumot</h5>
                                        }                                                                            
                                    </Link>                                                                                         
                                </div>                                                                            
                            </Fade>
                        )
                    })}
                </div>
                <div className='row prod-1'>
                    {dataProducts.slice(1, 3).map((product) => {
                        return(
                            <Fade>
                                <div className='col-6 prod'>
                                    <Link to={`/prdoucts/${product.id}`} className={`list`}>
                                        <div className='list-img'>
                                            <img className='orange' src={Img3} />
                                            <img className='out' src={product.image} />
                                        </div>                                        
                                        {english && 
                                            <h6 className={`flour`}>{product.name_en}</h6>
                                        }
                                        {russian && 
                                            <h6 className={`flour `}>{product.name_ru}</h6>
                                        }
                                        {uzbek && 
                                            <h6 className={`flour`}>{product.name_uz}</h6>
                                        }                                                
                                        {english && 
                                            <h5 className={`info`}>More info</h5>
                                        }
                                        {russian && 
                                            <h5 className={` info`}>Больше информации</h5>
                                        }
                                        {uzbek && 
                                            <h5 className={`info`}>Batafsil ma'lumot</h5>
                                        }                                          
                                    </Link>
                                </div>                                        
                            </Fade>
                        )
                    })}                       
                </div>
            </div>
            <div className={`contrast ${modal && "d-none"}`} ></div>
            <div className={`col-md-6 offset-md-3 buy-modal row ${!modal && "show-modal"}`}>
                <i className='fa fa-times' onClick={() => setModal(true)} ></i>
                <div className='col-md-6 p-1'>
                    {english &&
                        <label className='text-white form-label' htmlFor='name'>Name</label>
                    }
                    {russian &&
                        <label className='text-white form-label' htmlFor='name'>Имя</label>
                    }
                    {uzbek &&
                        <label className='text-white form-label' htmlFor='name'>Ism</label>
                    }                    
                    <input className={`${redName && "red-line"} form-control`} type="text" value={nameValue} onChange={(e) => handleChange1(e.target.value)} id='name' placeholder='Abdulhamid' />                        
                </div>
                <div className='col-md-6 p-1' onChange={(e) => handleChange2(e.target.value)}>
                    {english &&
                        <label className='text-white form-label d-block' htmlFor='number'>Phone Number</label>
                    }
                    {russian &&
                        <label className='text-white form-label d-block' htmlFor='number'>Телефонный Hомер</label>
                    }
                    {uzbek &&
                        <label className='text-white form-label d-block' htmlFor='number'>Telefon Raqami</label>
                    }                    
                    <input defaultValue={defaultValue} value={numberValue} placeholder='+99894 123 45 67' className={`form-control tel-control w-100 ${redNumber && "red-line"}`} id="number" />                       
                </div>
                <div className='col-md-4 offset-md-2'>
                    {english && 
                        <button className='btn btn-group' onClick={() => senDMessage()}>Send</button>
                    }
                    {russian && 
                        <button className='btn btn-group' onClick={() => senDMessage()}>Отправлять</button>
                    }
                    {uzbek && 
                        <button className='btn btn-group' onClick={() => senDMessage()}>Yuborish</button>
                    }                    
                </div>
            </div>
        </div>
    );
};

export default OneProduct;