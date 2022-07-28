import styled from "styled-components";

import { ReactComponent as burger } from "../../assets/icons/burgerblack.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as money } from "../../assets/icons/money.svg";
import { ReactComponent as support } from "../../assets/icons/support.svg";
import { ReactComponent as payment } from "../../assets/icons/payment.svg";

import imgM from "../../assets/imgs/furniture.png";
import bgImg from "../../assets/imgs/bgimg.png";

export const Container = styled.div`
  position: relative;
`;
// Container.BG = styled.div`
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   background-image: url(${bgImg});
//   background-repeat: no-repeat;
// `;
export const Wrap = styled.div`
  color: black;
  width: 100%;
`;

Wrap.Burger = styled(burger)`
  padding-right: 5px;
  box-sizing: border-box;
  width: 21px;
  height: 13.26px;
`;
Wrap.Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 0.14px;
  color: #1b1d21;
  margin: 40px 0;
`;

export const Wrapper = styled.div``;

export const CardCont = styled.div`
  align-items: center;  
`;
export const Card = styled.div`
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #1de3cc;
  :hover {
    transform: scale(1.05);
    transition: 0.3s linear;
  }
`;
Card.Title = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: #212727;
`;
Card.Img = styled.img`
  width: 113px;
  height: 110px;
  /* background: url(${imgM}); */
`;

export const Info = styled.div`
  width: 1145px;
  height: 200px;
  background: linear-gradient(128.77deg, #1de3cc 14.64%, #18e789 85.07%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0px 50px;
`;

Info.Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.177778px;
    color: #ffffff;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
  }
  div {
    padding-left: 10px;
  }
`;
Info.Car = styled(car)``;
Info.Money = styled(money)``;
Info.Support = styled(support)``;
Info.Payment = styled(payment)``;
