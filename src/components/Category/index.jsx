import React, { useState } from "react";
import './Scss/Categories.scss';
import { CardCont, Container, Wrap, Wrapper, Card } from "./style";
import CardSimple from "../Card/Card";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Categories = ({Category, all, main, english, russian, uzbek}) => {

  // carousel for categories in mainPage

  const [carousel, setCarousel] = useState(0)
  const [activeCar, setActiveCar] = useState(false)

  function decrement(item){
    if(carousel > 0){
      setCarousel(carousel - 9)
      setActiveCar(true)
    }
  }

  function increment(){
    if(carousel + 9 <= Category.length ){
      setCarousel(carousel + 9)
      setActiveCar(false)
    }
  }

  function localId(item){
    localStorage.setItem("category", item)
  }

  // i18nexus

  const {t} = useTranslation()

  return (
    <Container className="Categories">
      <Wrap className="wrapper">
        {all &&
          <Wrap.Title>
            <Wrap.Burger />
            {t(1)}
          </Wrap.Title>
        }
        <Wrapper>
          {main &&
            <div className="col-md-12 slide-tools">
              <div className="d-flex">
                <h1>{t("browse")}</h1>
                <Link className="nav-link" to="/categories">{t("all")} <i className="fa fa-angle-right mx-2"></i></Link>
              </div>
              <div className="d-flex c2">
                <i className={`fa fa-angle-left ${activeCar && "active"}`} onClick={() => decrement()}></i>
                <i className={`fa fa-angle-right mx-3 ${!activeCar && "active"}`} onClick={() => increment()}></i>
              </div>
            </div>
          }
          {main &&
            <CardCont className="row categories">
              {Category.slice(carousel, carousel+9).map((value) => {
                return (
                  <Link to="/products" key={value.id} onClick={() => localId(value.id)} className="col-3 categ nav-link">
                    <Card className="body">
                      <Card.Title className="title">{english && value.name_en} {russian && value.name_ru} {uzbek && value.name_uz}</Card.Title>
                      <Card.Img src={value.image} alt="cardImg" />
                    </Card>
                  </Link>
                );
              })}
            </CardCont>
          }
          {all &&
            <CardCont className="row categories">
              {Category.map((value) => {
                return (
                  <Link to='/products' key={value.id} onClick={() => localId(value.id)} className="col-3 categ nav-link">
                    <Card key={value.id} className="body">
                      <Card.Title className="title">{english && value.name_en} {russian && value.name_ru} {uzbek && value.name_uz}</Card.Title>
                      <Card.Img src={value.image} alt="cardImg" />
                    </Card>
                  </Link>
                );
              })}
            </CardCont>
          }
        </Wrapper> 
        {/* {all &&
          <div className="col-md-12 prod-pagination">
            <Stack spacing={2}>          
              <Pagination count={5} variant="outlined" shape="rounded" />
            </Stack>      
          </div>
        }  */}
      </Wrap>
      {all &&
        <CardSimple />
      }
    </Container>
  );
};

export default Categories;
