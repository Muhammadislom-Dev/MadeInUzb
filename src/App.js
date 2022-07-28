import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/Scrolls/ScrollToTop';
import axios from 'axios'; 
import Footer from './components/Footer/Footer';
import RouterHeader from './components/RouterHeader/RouterHeader';
import { useTranslation } from 'react-i18next';
import About from './components/About/About';
import Products from './components/Product';
import Categories from './components/Category';

const App = () => {

  //Categories  API
     
  const [dataCategories, setDataCategories] = useState([]);
  const urlCategories = `https://api.madeinuzb.com/categories/`;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlCategories);
      setDataCategories(request.data);
      return request;
    };
    fetchData()
  }, [urlCategories]);

   //SubCategories  API
     
   const [dataSubCategories, setDataSubCategories] = useState([]);
   const urlSubCategories = `https://api.madeinuzb.com/subcategories/`;
 
   useEffect(() => {
     async function fetchData() {
       const request = await axios.get(urlSubCategories);
       setDataSubCategories(request.data);
       return request;
     };
     fetchData()
   }, [urlSubCategories]);

  //Products  API
     
  const [dataProducts, setDataProducts] = useState([]);
  const urlProducts = `https://api.madeinuzb.com/products/`;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlProducts);
      setDataProducts(request.data);
      return request;
    };
    fetchData()
  }, [urlProducts]);

  //Likes  API
     
  const [dataLikes, setDataLikes] = useState([]);
  const urlLikes = `https://api.madeinuzb.com/addlike/`;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlLikes);
      setDataLikes(request.data);
      return request;
    };
    fetchData()
  }, [urlLikes]);

  //Advertising  API
     
  const [dataAdvertising, setdataAdvertising] = useState([]);
  const urlAdver = `https://api.madeinuzb.com/reklama/`;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlAdver);
      setdataAdvertising(request.data);
      return request;
    };
    fetchData()
  }, [urlAdver]);

  //Advertising  API
     
  const [dataSlider, setdataSlider] = useState([]);
  const urlSlider = `https://api.madeinuzb.com/sliders/`;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlSlider);
      setdataSlider(request.data);
      return request;
    };
    fetchData()
  }, [urlSlider]);


   // i18nexus

   const {i18n} = useTranslation()


  // Language components

  const [english, setEnglish] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') == "en" ? true : false : false);
  const [russian, setRussian] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') == "ru" ? true : false : false);
  const [uzbek, setUzbek] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') == "uz" ? true : false : false);
  const [langTitle, setLangTitle] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng').toUpperCase() : "") 

  function change1(item) {  
    i18n.changeLanguage("ru") 
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
    setRussian(item)
    setEnglish(!item)
    setUzbek(!item)   
  }
  function change2(item) {
    i18n.changeLanguage("en") 
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
    setEnglish(item)
    setRussian(!item)
    setUzbek(!item)
  }
  function change3(item) { 
    i18n.changeLanguage("uz") 
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
    setUzbek(item)
    setEnglish(!item)
    setRussian(!item)
  }

  window.addEventListener("load", () => {    
    setRussian(true)
    setEnglish(false) 
    localStorage.setItem("i18nextLng", "en") 
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
  })



  // Modal methods

  const [modalOk, setModalOk] = useState(true)

  function changeModal(){
    setModalOk(false)
  }


  // scrolls

  const scrollToLocation = () => {
    const { hash } = window.location;
    if (hash !== '') {
      let retries = 0;
      const id = hash.replace('#', '');
      const scroll = () => {
        retries += 0;
        if (retries > 50) return;
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => element.scrollIntoView(), 0);
        } else {
          setTimeout(scroll, 100);
        }
      };
      scroll();
    }
  } 

  scrollToLocation()

  // search filter

  const [inputValue, setInputValue] = useState("")

  function filterData(e){
      setInputValue(e.target.value)
  }

  const search = (data) => {
      return data.filter(post => post.name_en.toLowerCase().includes(inputValue.toLowerCase()))
  }

  // counter for like and added cart

  const [countLike, setCountLike] = useState(localStorage.getItem("lk") ? localStorage.getItem("lk").split(',').length : 0)
    
  function addCountLike(){
    setCountLike(countLike + 1)
  }
  function deletCountLike(){
    setCountLike(countLike - 1)
  }

  const [countAdd, setCountAdd] = useState(localStorage.getItem("added") ? localStorage.getItem("added").split(',').length : 0)
    
  function addCountAdd(){
    setCountAdd(countAdd + 1)
  }
  function deletCountAdd(){
    if(countAdd > 0){
      setCountAdd(countAdd - 1)
    }
  }



  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar countLike={countLike} countAdd={countAdd} dataCategories={search(dataCategories)} dataSubCategories={search(dataSubCategories)} dataProducts={search(dataProducts)} allCategories={dataCategories} langTitle={langTitle} english={english} russian={russian} uzbek={uzbek} change1={change1} change2={change2} change3={change3} filterData={filterData} inputValue={inputValue} />   
      <Switch>  
        <Route exact path="/">
          <RouterHeader changeModal={changeModal} dataSlider={dataSlider} dataAdvertising={dataAdvertising} addCountLike={addCountLike} addCountAdd={addCountAdd} deletCountLike={deletCountLike} deletCountAdd={deletCountAdd} dataCategories={dataCategories} dataProducts={dataProducts} english={english} russian={russian} uzbek={uzbek} white={false} />
        </Route> 
        <Route path={`/aboutus`}>
          <About english={english} russian={russian} uzbek={uzbek} />
        </Route>
        <Route path="/saved">
          <Products addCountLike={addCountLike} addCountAdd={addCountAdd} deletCountLike={deletCountLike} deletCountAdd={deletCountAdd} english={english} russian={russian} uzbek={uzbek} changeModal={changeModal} urlLikes={urlLikes} CardData={dataProducts} Electronics={dataCategories} ProdName={dataSubCategories} all={false} saved={true} top={false} card={false} oneProd={false} />          
        </Route>
        <Route path={`/cart`}>
          <Products addCountLike={addCountLike} addCountAdd={addCountAdd} deletCountLike={deletCountLike} deletCountAdd={deletCountAdd} english={english} russian={russian} uzbek={uzbek} changeModal={changeModal} urlLikes={urlLikes} CardData={dataProducts} Electronics={dataCategories} ProdName={dataSubCategories} all={false} saved={false} top={false} card={true} oneProd={false} />
        </Route>
        <Route path="/products">
          <Products addCountLike={addCountLike} addCountAdd={addCountAdd} deletCountLike={deletCountLike} deletCountAdd={deletCountAdd} english={english} russian={russian} uzbek={uzbek} changeModal={changeModal} urlLikes={urlLikes} CardData={dataProducts} Electronics={dataCategories} ProdName={dataSubCategories} all={true} saved={false} top={false} card={false} oneProd={false} />
        </Route>
        <Route path="/categories">
          <Categories english={english} russian={russian} uzbek={uzbek} main={false} all={true} Category={dataCategories} />
        </Route>
        {dataProducts.map((data) => {
          return(
            <Route key={data.id} path={`/product/${data.id}`}>
              {english && 
                <Products addCountLike={addCountLike} addCountAdd={addCountAdd} deletCountLike={deletCountLike} deletCountAdd={deletCountAdd} changeModal={changeModal} urlLikes={urlLikes} id={data.id} category={data.category} name={data.name_en} image={data.image} image1={data.image1} image2={data.image2} video={data.video} desc={data.description_en} code={data.product_code} price={data.price} CardData={dataProducts} Electronics={dataCategories} ProdName={dataSubCategories} all={false} saved={false} top={false} card={false} oneProd={true} />
              }
              {russian && 
                <Products addCountLike={addCountLike} addCountAdd={addCountAdd} deletCountLike={deletCountLike} deletCountAdd={deletCountAdd} changeModal={changeModal} urlLikes={urlLikes} id={data.id} category={data.category} name={data.name_ru} image={data.image} image1={data.image1} image2={data.image2} video={data.video} desc={data.description_ru} code={data.product_code} price={data.price} CardData={dataProducts} Electronics={dataCategories} ProdName={dataSubCategories} all={false} saved={false} top={false} card={false} oneProd={true} />
              }
              {uzbek && 
                <Products addCountLike={addCountLike} addCountAdd={addCountAdd} deletCountLike={deletCountLike} deletCountAdd={deletCountAdd} changeModal={changeModal} urlLikes={urlLikes} id={data.id} category={data.category} name={data.name_uz} image={data.image} image1={data.image1} image2={data.image2} video={data.video} desc={data.description_uz} code={data.product_code} price={data.price} CardData={dataProducts} Electronics={dataCategories} ProdName={dataSubCategories} all={false} saved={false} top={false} card={false} oneProd={true} />
              }              
            </Route>                    
          )
        })}               
      </Switch>
      <Footer english={english} russian={russian} uzbek={uzbek} />     

      <div className={`contrast ${modalOk && "d-none"}`} onClick={() => setModalOk(true)}></div>
      <div className={`col-md-6 offset-md-3 buy-ok row ${!modalOk && "show-modal"}`}>
        <i className='fa fa-times' onClick={() => setModalOk(true)} ></i> 
        {english &&
          <h1>THANK YOU FOR YOUR APPEAL &#128522;</h1> 
        } 
        {russian &&
          <h1>СПАСИБО 3A ОБРАЩЕНИЕ &#128522;</h1> 
        } 
        {uzbek &&
          <h1>MUROJAATINGIZ UCHUN TASHAKKUR &#128522;</h1> 
        }                         
        <div className='col-md-4 offset-md-2'>                    
          {english && 
              <button className='btn btn-group' onClick={() => setModalOk(true)}>OK</button>
          }
          {russian && 
              <button className='btn btn-group' onClick={() => setModalOk(true)}>OK</button>
          }
          {uzbek && 
              <button className='btn btn-group' onClick={() => setModalOk(true)}>OK</button>
          }          
        </div>
      </div> 
    </BrowserRouter>
  );
};

export default App;
