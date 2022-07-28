import React, { useState } from "react";
import { Card, CardCont, CategoryTitles, Container, Icon, ProductTitles, Show, Wrap } from "./style";
import CardSimple from '../Card/Card';
import { Link } from "react-router-dom";
import './Scss/Prod.scss';
import axios from "axios";
import { t } from "i18next";
import { Check } from "@material-ui/icons";
import { useEffect } from "react";

export const Products = ({Electronics, ProdName, CardData, addCountAdd, addCountLike, deletCountLike, deletCountAdd, english, russian, uzbek, urlLikes, changeModal, all, saved, top, card, oneProd, id, name, image, image1, image2, video, desc, code, price, category}) => {

  // categories

  const [allCat, setAllCat] = useState(false)

  let radio = document.querySelectorAll(".radio")  
    
  for (let i = 0; i < radio.length; i++) {
      radio[0].setAttribute("checked", "true")
  }    

  // tips of products

  const [allSub, setAllSub] = useState(false)
  const [subTips, setSubTips] = useState(localStorage.getItem("category") ? localStorage.getItem("category") : 1)
  const [allResult, setAllResult] = useState(false)
  const [prods, setProds] = useState(0)   // localStorage.getItem("subcategory") ? localStorage.getItem("subcategory") : 1

  function changeTips(item){          // categoriyalardan birortasini tanlaganda subCategoriyalar o'zgarishi
      setSubTips(item)
      localStorage.setItem("category", item)
      setProds(0)
  }

  let tipology = document.querySelectorAll(".tipology")  
  
  for (let i = 0; i < tipology.length; i++) {
      tipology[0].setAttribute("checked", "true")
  }

  // show all results

  function seeAll(){
    setAllResult(!allResult)
    // setProds(0)
  }

  function changeProducts(item){          // subcategoriyalardan birortasini tanlaganda productlar o'zgarishi
      setProds(item)
      localStorage.setItem("subcategory", item)
      setAllResult(false)
  }

  // like algorithms

  const [numberLikes, setNumberLikes] = useState(localStorage.getItem("like") ? localStorage.getItem("like").split(',') : 0)  
  const [like, setLike] = useState(false)
  let likesArray = []
  let checkbox = document.querySelectorAll(".checkbox")
  const [likes, setLikes] = useState(localStorage.getItem("lk") ? localStorage.getItem("lk").split(',') : [])

  function getLikes(item){
    const url = `https://api.madeinuzb.com/addlike/${item}`
    setLike(!like)       
    axios.get(url)
    setLikes([...likes, item])
    localStorage.setItem("lk", [likes,item])
  }        

  function unlikes(item){
    const arrLk = likes.filter((inc) => inc != item)
    setLikes(arrLk)
    localStorage.setItem("lk", arrLk)
    const url = `https://api.madeinuzb.com/deletelike/${item}`         
    axios.get(url)    
  }

  console.log(likes, "LK")

  window.addEventListener("load", () => {
      setNumberLikes(localStorage.getItem("like") ? localStorage.getItem("like").split(',') : 0)
  })

  // add to card

  const [addedProds, setAddedProds] = useState(localStorage.getItem("added") ? localStorage.getItem("added").split(',') : 0) 
  const [numCount, setNumCount] = useState(localStorage.getItem("countProd") ? localStorage.getItem("countProd").split(',') : 0)
  const [countProd, setCountProd] = useState(numCount != 0 ? numCount.map((i) => ({id: numCount.indexOf(i), num: Number(i)})) : CardData.map((p) => ({id: p.id-1, num: p.count})))    //{id: item.id, num: item.count}
  const [showSuc, setshowSuc] = useState(false)
  const [addProducts, setAddProducts] = useState(localStorage.getItem("added") ? localStorage.getItem("added").split(',') : [])
  let cardsArray = []
  let addedProduct = document.querySelectorAll(".addedProduct")

  function getAdd(item){
    const url = `https://api.madeinuzb.com/addlike/${item}`
    setLike(!like)       
    axios.get(url)
    setAddProducts([...addProducts, item])
    localStorage.setItem("added", [addProducts,item])
    setshowSuc(true)
    setTimeout(() => {
      setshowSuc(false)
    }, 1500);
  }

  function deleteCard(item){                   // savatchadan o'chirib tashlash funksiyasi    
    const arrAD = addProducts.filter((inc) => inc != item)
    setAddedProds(arrAD)
    setAddProducts(arrAD)
    localStorage.setItem("added", arrAD)
  }

  window.addEventListener("load", () => {
    setAddedProds(localStorage.getItem("added") ? localStorage.getItem("added").split(',') : 0)
  }) 

  window.addEventListener("load", () => {
    return localStorage.setItem("countProd", countProd.map((c) => c.num))
  })

  function incProd(item){
    setCountProd(countProd.map((c) => ({id: c.id, num: countProd.indexOf(c) + 1 == item ? c.num + 100 : c.num}))) //---
    localStorage.setItem("countProd", countProd.map((c) => c.num + (item == countProd.indexOf(c) + 1 ? 100 : 0)))
  }

  function decProd(item){
      setCountProd(countProd.map((c) => ({id: c.id, num: c.num > 0 && countProd.indexOf(c) + 1 == item ? c.num - 1 : c.num})))
      localStorage.setItem("countProd", countProd.map((c) => c.num - (item == countProd.indexOf(c) + 1 ? 1 : 0)))
  }
  
  // carousel for top products
  
  const [carousel, setCarousel] = useState(0)
  const [activeCar, setActiveCar] = useState(false)
  let getCarousel = document.querySelectorAll(".get-carousel")
  
  function increment(){
    if(carousel < 0){
      setCarousel(carousel + 4)
      setActiveCar(true)
    }
  }
  
  function decrement(){
    if(carousel >= -CardData.length - 8 && getCarousel.length > 4){
      setCarousel(carousel - 4)
      setActiveCar(false)
    }
  }
  
  // carousel for recommend products
  
  const [slick, setSlick] = useState(0)
  const [activeSlick, setActiveSlick] = useState(false)
  let getSlick = document.querySelectorAll(".get-slick")
  
  function increment1(){
    if(slick < 0){
      setSlick(slick + 4)
      setActiveSlick(true)
    }
  }
  
  function decrement1(){
    if(slick >= -getSlick.length-8 && getSlick.length > 4){
      setSlick(slick - 4)
      setActiveSlick(false)
    }
  }
  
  // buy modal and bot methods

  const [buyModal, setBuymodal] = useState(false)

  function openModal(item){
    setBuymodal(item)
  }

  const [nameValue, setNameValue] = useState("")
  const [numberValue, setNumberValue] = useState("")
  const [value, setValue] = useState("")  
  const [date, setDate] = useState("") 
  const [email, setEmail] = useState("")  
  const [userPosition, setUserPosition] = useState("")  

  const [redName, setRedName] = useState(false);
  const [redNumber, setRedNumber] = useState(false)
  const [redText, setRedText] = useState(false)
  const [redDate, setRedDate] = useState(false);
  const [redEmail, setRedEmail] = useState(false)
  const [redPosition, setRedPosition] = useState(false)

  function handleChange1(item){
      setNameValue(item)
      setRedName(false)
  }
  function handleChange2(item){
      setNumberValue(item)
      setRedNumber(false)
  }
  function handleChange3(item){
      setValue(item)
      setRedText(false)
  }
  function handleChange4(item){
    setDate(item)
    setRedDate(false)
  }
  function handleChange5(item){
      setEmail(item)
      setRedEmail(false)
  }
  function handleChange6(item){
      setUserPosition(item)
      setRedPosition(false)
  }

  let newPro = []
  let newPrice = []
  let nbm = 0


  addedProds != 0 && addedProds.forEach((data) => {
    newPro.push(CardData.filter((item) => item.id == data && item.name_en))            // sotib olinayotgan mahsulotlar nomi
    newPrice.push(CardData.map((item) => countProd.map((cl) => cl.id+1 == item.id && cl.num * item.price)))      //sotib olinayotgan mahsulotlar narxlari
  })

  countProd.filter((i) => {
    newPro.map((c) => {
      c.map((k) => {     
        nbm += countProd.indexOf(i) + 1 == k.id && k.price * i.num          // umumiy summani hisoblash
      })
    })
  })
  
  let bot = {
      TOKEN: "5500966862:AAFWxVHRtMUeL4gr5NhS_OHkA9CWfIRW18o",
      chatID: "-1001566786338",
      message: `Kompaniya nomi: ${nameValue};|| Kompaniya Joylashuvi: ${value};|| Kompaniya ochilgan sana: ${date};|| Kompaniya telefon raqami: ${numberValue};|| Kompaniya emaili: ${email};|| To'ldiruvchining lavozimi: ${userPosition}. <---------> Umumiy summa: $ ${nbm}; || Sotib olayotgan mahsulotlari: ${countProd.map((i) => newPro.map((c) => c.map((k) => countProd.indexOf(i) + 1 == k.id ? `${k.name_en} dan ${i.num} ta` : '')))}`
  }

  function sendMessage(e){        
    if(nameValue === ""){            
        setRedName(true)
    }else if(value === ""){            
        setRedText(true)
    }else if(date === ""){           
      setRedDate(true)
    }else if(numberValue === ""){           
      setRedNumber(true)
    }else if(email === ""){            
        setRedEmail(true)
    }else if(userPosition === ""){            
      setRedPosition(true)
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
        setValue("")
        setDate("")
        setEmail("")
        setUserPosition("")
        openModal(false)
        changeModal()
    } 
  }

  //images of one product 

  const [showVideo, setShowVideo] = useState(false)
  const [indexImg, setIndexImg] = useState(0)

  const otherImages = [image, image1, image2]

  function changeImg(c, e){      // modalning ichidagi rasmlarni o'zgartirish funksiyasi
    setIndexImg(c.indexOf(e))    
    setShowVideo(false)
  }

  function changeVideo(){      // modalning ichidagi videoni o'qo'yish funksiyasi
    setIndexImg(10)    
    setShowVideo(true)
  }

  return (
    <>   
      <Container className="Prod">
        <Wrap className="wrapper">
          {all &&
            <Wrap.Title>
              <Wrap.Burger /> {t("producst")}
            </Wrap.Title>
          }
          {all &&
            <CategoryTitles>          
              <div className={`col-md-12 menu-catalog d-flex ${allCat && "all"}`}>
                <div className="line-menu">
                  {Electronics.map((value) => {
                    return(
                      <div className='catalog-menu' key={value.id} >
                          <input type="radio" className="form-check-input radio" onChange={() => changeTips(value.id)} checked={subTips == value.id} name="flexRadioDefault" id={`radio${value.id+1}`} />
                          <label htmlFor={`radio${value.id+1}`}  >
                            <CategoryTitles.Card  key={value.id} className="tool" >
                              {english && value.name_en}
                              {russian && value.name_ru}
                              {uzbek && value.name_uz}
                            </CategoryTitles.Card>
                          </label>
                      </div>
                    )
                  })}                    
                </div>
                <input type="checkbox" checked={allCat} onChange={() => setAllCat(!allCat)} className="down" id="categories" />
                <label htmlFor="categories"><i className="fa fa-angle-down"></i></label>
              </div>              
            </CategoryTitles>
          }
          {all &&
            <ProductTitles>
              <div className={`col-md-12 submenu d-flex ${allSub && "all-sub"}`}>
                <div className="line-sub">
                  {ProdName.map((value) => {
                      return(
                        value.category == subTips &&
                        <div className='catalog-menu' key={value.id}>
                            <input type="radio" className="form-check-input tipology" name="flexRadioDefault1" onChange={() => changeProducts(value.id)} checked={prods == value.id} id={`tip${value.id-1}`} />
                            <label htmlFor={`tip${value.id-1}`}  >
                              <CategoryTitles.Card  key={value.id} className="tool" >
                                {english && value.name_en}
                                {russian && value.name_ru}
                                {uzbek && value.name_uz}
                              </CategoryTitles.Card>
                            </label>
                        </div>
                      )
                  })}                    
                </div>
                <input type="checkbox" checked={allSub} onChange={() => setAllSub(!allSub)} className="down-sub" id="subs" />
                <label htmlFor="subs"><i className="fa fa-angle-down"></i></label>
              </div>
            </ProductTitles>
          }

          {all &&
            <CardCont className={`products row ${!allResult && "per-height"}`}>
              {CardData.map((value) => {
                return (              
                  <Card key={value.id} className={`col-3 prod ${value.category == subTips && value.sub_category == prods && !allResult && "d-block"} ${value.category == subTips && prods == 0 && "d-block"} ${allResult && value.category == subTips && "d-block"}`}>
                    <Card.Header className="header">
                      <Card.Block>
                        <Card.Off className="percent">{value.persent} % Off</Card.Off>                                            
                        {
                          likes.toString().includes(value.id) &&
                          <input type="checkbox" checked onChange={() => unlikes(value.id)} className={`checkbox`} id={value.id+1} /> 
                        }
                        {!likes.toString().includes(value.id) &&
                          <input type="checkbox" onChange={() => getLikes(value.id)} className={`checkbox`} id={value.id+1} />                                                                                       
                        }
                        <label htmlFor={value.id+1}>                                                
                          <i onClick={() => addCountLike(value.id)} className={`fa fa-heart-o`}></i> 
                          <i onClick={() => deletCountLike(value.id)} className={`fa fa-heart`}></i>                                                                                              
                        </label>
                      </Card.Block>
                      <Link to={`/product/${value.id}`} className="nav-link navigator">
                        <Card.Img src={value.image} alt="errCard" className="img" />
                      </Link>
                    </Card.Header>
                    <Card.Footer>
                      <p>{value.subTitle}</p>
                      <h2>
                        {english && value.name_en}
                        {russian && value.name_ru}
                        {uzbek && value.name_uz}
                      </h2>
                      <h3>$ {value.price}</h3>                      
                      {addProducts.toString().includes(value.id) &&
                        <input type="checkbox" className='addedProduct' id={1-value.id} onChange={() => deleteCard(value.id)} checked />
                      }  
                      {!addProducts.toString().includes(value.id) &&
                        <input type="checkbox" id={`${1-value.id}`} onChange={() => getAdd(value.id)} className={`addedProduct`} />
                      }                 
                      <label onClick={() => addCountAdd()} htmlFor={`${1-value.id}`} className="add-btn ghl" >{t("cart")}</label> 
                      <label onClick={() => deletCountAdd()}  htmlFor={`${1-value.id}`} className="add-btn dfl" >{t("added")} <Check /></label>                      
                    </Card.Footer>
                  </Card>
                );
              })}
            </CardCont>
          }

          {all &&
            <Show className="show-btn" onClick={() => seeAll()}>
              <Show.Title className="show-title">{allResult ? `${t("close")}` : `${t(5)}`}</Show.Title>
              <Icon.ArrowHr className="show-icon" />
            </Show>
          }

          {saved &&
            <h1><i className="fa fa-heart"></i> {t("saved")}</h1>
          }

          {saved &&
            <CardCont className="products row mb-5 pb-5">
              {CardData.map((value) => {
                return (                                          
                  <Card key={value.id} className={`col-3 prod ${likes.toString().includes(value.id) && "d-block"}`}>                         
                    <Card.Header className="header">
                      <Card.Block>
                        <Card.Off className="percent">{value.persent} % Off</Card.Off>                    
                        {
                          likes.toString().includes(value.id) &&
                          <input type="checkbox" checked onChange={() => unlikes(value.id)} className={`checkbox`} id={value.id+1} /> 
                        }
                        {!likes.toString().includes(value.id) &&
                          <input type="checkbox" onChange={() => getLikes(value.id)} className={`checkbox`} id={value.id+1} />                                                                                       
                        }
                        <label htmlFor={value.id+1}>                                                
                          <i onClick={() => addCountLike(value.id)} className={`fa fa-heart-o`}></i> 
                          <i onClick={() => deletCountLike(value.id)} className={`fa fa-heart`}></i>                                                                                              
                        </label>
                      </Card.Block>
                      <Link to={`/product/${value.id}`} className="nav-link navigator">
                        <Card.Img src={value.image} alt="errCard" className="img" />
                      </Link>
                    </Card.Header>
                    <Card.Footer>
                      <p>{value.subTitle}</p>
                      <h2>
                        {english && value.name_en}
                        {russian && value.name_ru}
                        {uzbek && value.name_uz}
                      </h2>
                      <h3>$ {value.price}</h3>                     
                      {addProducts.toString().includes(value.id) &&
                        <input type="checkbox" className='addedProduct' id={1-value.id} onChange={() => deleteCard(value.id)} checked />
                      }  
                      {!addProducts.toString().includes(value.id) &&
                        <input type="checkbox" id={`${1-value.id}`} onChange={() => getAdd(value.id)} className={`addedProduct`} />
                      } 
                      <label onClick={() => addCountAdd()} htmlFor={`${1-value.id}`} className="add-btn ghl" >{t("cart")}</label> 
                      <label onClick={() => deletCountAdd()} htmlFor={`${1-value.id}`} className="add-btn dfl" >{t("added")} <Check /></label>                      
                    </Card.Footer>
                  </Card>                         
                );
              })}
            </CardCont>
          }

          {top &&
            <>
              <div className="col-12 slide-tools">
                <div className="d-flex">
                  <h1>{t(7)}</h1>
                </div>
                <div className="d-flex c2">
                  <i className={`fa fa-angle-left ${activeCar && "active"}`} onClick={() => increment()}></i>
                  <i className={`fa fa-angle-right mx-3 ${!activeCar && "active"}`} onClick={() => decrement()}></i>
                </div>
              </div>
              <CardCont className="products top">
                {CardData.map((value) => {
                  return (
                    <Card key={value.id} className={`col-3 prod ${value.top && "d-block get-carousel"}`} style={{transform: `translateX(${carousel * 50}%)`}}>
                      <Card.Header className="header">
                        <Card.Block>
                          <Card.Off className="percent">{value.persent} % Off</Card.Off>                          
                          {
                            likes.toString().includes(value.id) &&
                            <input type="checkbox" checked onChange={() => unlikes(value.id)} className={`checkbox`} id={value.id+1} /> 
                          }
                          {!likes.toString().includes(value.id) &&
                            <input type="checkbox" onChange={() => getLikes(value.id)} className={`checkbox`} id={value.id+1} />                                                                                       
                          }
                          <label htmlFor={value.id+1}>                                                
                            <i onClick={() => addCountLike(value.id)} className={`fa fa-heart-o`}></i> 
                            <i onClick={() => deletCountLike(value.id)} className={`fa fa-heart`}></i>                                                                                              
                          </label>
                        </Card.Block>
                        <Link to={`/product/${value.id}`} className="nav-link navigator">
                          <Card.Img src={value.image} alt="errCard" className="img" />
                        </Link>                        
                      </Card.Header>
                      <Card.Footer>
                        <p>{value.subTitle}</p>
                        <h2>
                          {english && value.name_en}
                          {russian && value.name_ru}
                          {uzbek && value.name_uz}
                        </h2>
                        <h3>$ {value.price}</h3>                 
                        {addProducts.toString().includes(value.id) &&
                          <input type="checkbox" className='addedProduct' id={1-value.id} onChange={() => deleteCard(value.id)} checked />
                        }  
                        {!addProducts.toString().includes(value.id) &&
                          <input type="checkbox" id={`${1-value.id}`} onChange={() => getAdd(value.id)} className={`addedProduct`} />
                        } 
                        <label onClick={() => addCountAdd()}  htmlFor={`${1-value.id}`} className="add-btn ghl" >{t("cart")}</label>                        
                        <label onClick={() => deletCountAdd()}  htmlFor={`${1-value.id}`} className="add-btn dfl" >{t("added")} <Check /></label>   
                      </Card.Footer>
                    </Card>
                  );
                })}
              </CardCont>
            </>
          }          

          {card &&
            <div className="col-12 card-modal">
              <h1 className="title">{t("my")}</h1>              
                {CardData.map((item) => (                               
                  <div className={`col-12 one-prod ${addProducts.toString().includes(item.id) && "d-flex"}`} key={item.id} >
                    <div className="col-2 img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="col-8 middle">
                      <h3 className="d-flex justify-content-between">{english && item.name_en} {russian && item.name_ru} {uzbek && item.name_uz} <p className="h6">$ {item.price}</p></h3>
                      <div className="tools">
                        <h4>{t("quantity")}:</h4>
                        <div className="d-flex col-5">
                          <div className="col-3 dec" onClick={() => decProd(item.id)}>-</div>
                          <div className="col-6 result">{countProd.length != 0 ? countProd.map((cl) => countProd.indexOf(cl) + 1 == item.id && cl.num) : item.count}</div>
                          <div className="col-3 inc" onClick={() => incProd(item.id)}>+</div>
                        </div>                            
                        <h4>{t("total")}: ${countProd.length != 0 ? countProd.map((cl) => countProd.indexOf(cl) + 1 == item.id && cl.num * item.price) : item.count}</h4>   
                      </div>
                    </div>
                    <div className="col-2 like-delet">                     
                      {
                        likes.toString().includes(item.id) &&
                        <input type="checkbox" checked onChange={() => unlikes(item.id)} className={`checkbox`} id={item.id+1} /> 
                      }
                      {!likes.toString().includes(item.id) &&
                        <input type="checkbox" onChange={() => getLikes(item.id)} className={`checkbox`} id={item.id+1} />                                                                                       
                      }
                      <label htmlFor={item.id+1}>                                                
                        <i onClick={() => addCountLike(item.id)} className={`fa fa-heart-o`}></i> 
                        <i onClick={() => deletCountLike(item.id)} className={`fa fa-heart`}></i>                                                                                              
                      </label>                    
                      {addProducts.toString().includes(item.id) &&
                        <input type="checkbox" className='addedProduct' id={1-item.id} onChange={() => deleteCard(item.id)} checked />
                      }  
                      {!addProducts.toString().includes(item.id) &&
                        <input type="checkbox" id={`${1-item.id}`} onChange={() => getAdd(item.id)} className={`addedProduct`} />
                      } 
                      <label onClick={() => addCountAdd()} htmlFor={`${1-item.id}`} className="add-btn ghl" >{t("cart")}</label>                        
                      <label onClick={() => deletCountAdd()} htmlFor={`${1-item.id}`} className="add-btn dfl" ><i className="fa fa-trash-o"></i></label>                       
                    </div>
                  </div>                
                ))}
                <h3 className="mt-5">{t("total")}: $ {nbm}</h3>
                <div className="col-md-12 buy-all">
                  <button className="btn" onClick={() => openModal(true)}>{t("buyall")}</button>
                </div>
                <div className={`col-12 row checkout ${!buyModal && "d-none"}`}>
                  <i className="fa fa-times" onClick={() => openModal(false)}></i>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="">{t("name")}</label>
                    <input className={`${redName && "red-line"} form-control`} value={nameValue} onChange={(e) => handleChange1(e.target.value)} type="text" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="">{t("location")}</label>
                    <input className={`${redText && "red-line"} form-control`} value={value} onChange={(e) => handleChange3(e.target.value)} type="text" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="">{t("date")}</label>
                    <input className={`${redDate && "red-line"} form-control`} value={date} onChange={(e) => handleChange4(e.target.value)} type="date" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="">{t("phone")}</label>
                    <input className={`${redNumber && "red-line"} form-control`} value={numberValue} onChange={(e) => handleChange2(e.target.value)} type="number" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="">{t("email")}</label>
                    <input className={`${redEmail && "red-line"} form-control`} value={email} onChange={(e) => handleChange5(e.target.value)} type="email" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="">{t("user")}</label>
                    <input className={`${redPosition && "red-line"} form-control`} value={userPosition} onChange={(e) => handleChange6(e.target.value)} type="text" />
                  </div>
                  <div className="col-md-12">
                    <button className="btn" onClick={() => sendMessage()}>{t("check")}</button>
                  </div>
                </div>
                <div className={`contr-card ${!buyModal && "d-none"}`} onClick={() => openModal(false)}></div>
            </div>
          }

          {oneProd &&
            <div className="one-product col-md-12">
              <h1>{name}</h1>
              <div className="row col-md-12">
                <div className="col-md-6 img">                      
                  {
                    likes.toString().includes(id) &&
                    <input type="checkbox" checked onChange={() => unlikes(id)} className={`checkbox`} id={id+1} /> 
                  }
                  {!likes.toString().includes(id) &&
                    <input type="checkbox" onChange={() => getLikes(id)} className={`checkbox`} id={id+1} />                                                                                       
                  }
                  <label htmlFor={id+1}>                                                
                    <i onClick={() => addCountLike(id)} className={`fa fa-heart-o`}></i> 
                    <i onClick={() => deletCountLike(id)} className={`fa fa-heart`}></i>                                                                                              
                  </label>          
                  <div className="body">
                  <div className={`video ${!showVideo && "d-none"}`}>                      
                      <video controls>
                        <source src={video} type="video/mp4" />
                      </video>                     
                  </div>
                    {otherImages.slice(indexImg, indexImg+1).map((c, index) => (
                      <img key={index} src={c} />
                    ))}                    
                  </div>
                </div>  
                <div className="col-md-6 g0">
                  <div className="images">
                      {otherImages.map((c, index) => (
                        <div key={index} className="col-3" onClick={() => changeImg(otherImages, c)}>
                          <img src={c} />
                        </div>
                      ))}  
                      {video &&
                        <div className="col-3" onClick={() => changeVideo()}>                          
                          <video>
                            <source src={video} />
                          </video>                          
                        </div>          
                      } 
                    </div> 
                </div>              
                <div className="col-md-6 text">
                  <div className="body">
                    <p>{desc}</p>
                    <p className="d-flex"><p className="text-secondary me-1">Product code: </p> {code}</p>                  
                    <p className="d-flex"><p className="text-secondary">Price:</p><p className="text-success mx-1">$ {price}</p></p>                                       
                    {addProducts.toString().includes(id) &&
                      <input type="checkbox" className='addedProduct' id={1-id} onChange={() => deleteCard(id)} checked />
                    }  
                    {!addProducts.toString().includes(id) &&
                      <input type="checkbox" id={`${1-id}`} onChange={() => getAdd(id)} className={`addedProduct`} />
                    } 
                    <label onClick={() => addCountAdd()}  htmlFor={`${1-id}`} className="add-btn ghl" >{t("cart")}</label>
                    <label onClick={() => deletCountAdd()}  htmlFor={`${1-id}`} className="add-btn dfl" >{t("added")} <Check /></label>   
                  </div>
                </div>
                <div className="col-md-6 g1">
                  <div className="images">
                      {otherImages.map((c, index) => (
                        <div key={index} className="col-3" onClick={() => changeImg(otherImages, c)}>
                          <img src={c} />
                        </div>
                      ))}  
                      {video &&
                        <div className="col-3" onClick={() => changeVideo()}>                          
                          <video>
                            <source src={video} />
                          </video>                          
                        </div>          
                      } 
                    </div> 
                </div>
              </div>       
              <h3 className="recommend">{t("recommend")}:</h3>  
              <div className="col-12 slide-tools">                
                <div className="d-flex c2">
                  <i className={`fa fa-angle-left ${activeSlick && "active"}`} onClick={() => increment1()}></i>
                  <i className={`fa fa-angle-right mx-3 ${!activeSlick && "active"}`} onClick={() => decrement1()}></i>
                </div>
              </div>   
              <CardCont className="products row top">
                {CardData.map((value) => {
                  return (   
                    value.id != id &&            
                    <Card key={value.id} className={`col-3 prod d-block ${value.category == category && "get-slick"} ${value.category != category && "d-none"}`} style={{transform: `translateX(${slick * 50}%)`}}>
                      <Card.Header className="header">
                        <Card.Block>
                          <Card.Off className="percent">{value.persent} % Off</Card.Off>                    
                          {
                            likes.toString().includes(value.id) &&
                            <input type="checkbox" checked onChange={() => unlikes(value.id)} className={`checkbox`} id={value.id+1} /> 
                          }
                          {!likes.toString().includes(value.id) &&
                            <input type="checkbox" onChange={() => getLikes(value.id)} className={`checkbox`} id={value.id+1} />                                                                                       
                          }
                          <label htmlFor={value.id+1}>                                                
                            <i onClick={() => addCountLike(value.id)} className={`fa fa-heart-o`}></i> 
                            <i onClick={() => deletCountLike(value.id)} className={`fa fa-heart`}></i>                                                                                              
                          </label>
                        </Card.Block>
                        <Link to={`/product/${value.id}`} className="nav-link navigator">
                          <Card.Img src={value.image} alt="errCard" className="img" />
                        </Link>
                      </Card.Header>
                      <Card.Footer>
                        <p>{value.subTitle}</p>
                        <h2>
                          {english && value.name_en}
                          {russian && value.name_ru}
                          {uzbek && value.name_uz}
                        </h2>
                        <h3>$ {value.price}</h3>
                        {addProducts.toString().includes(value.id) &&
                          <input type="checkbox" className='addedProduct' id={1-value.id} onChange={() => deleteCard(value.id)} checked />
                        }  
                        {!addProducts.toString().includes(value.id) &&
                          <input type="checkbox" id={`${1-value.id}`} onChange={() => getAdd(value.id)} className={`addedProduct`} />
                        } 
                        <label onClick={() => addCountAdd()}  htmlFor={`${1-value.id}`} className="add-btn ghl" >{t("cart")}</label>                      
                        <label onClick={() => deletCountAdd()}  htmlFor={`${1-value.id}`} className="add-btn dfl" >{t("added")} <Check /></label>   
                      </Card.Footer>
                    </Card>
                  );
                })}
              </CardCont>
            </div>
          }

        </Wrap>
      </Container>
      {all &&
        <CardSimple />
      }
      <div className={`succesfull ${showSuc && "show-success"}`}>
        <h1>{t("succes")} <Check /></h1>
      </div>
    </>
  );
};

export default Products;
