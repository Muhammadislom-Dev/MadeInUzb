import styled from "styled-components";

import { ReactComponent as burger } from "../../assets/icons/burgerblack.svg";
import { ReactComponent as heart } from "../../assets/icons/heart.svg";
import { ReactComponent as arrowHr } from "../../assets/icons/arrowHr.svg";

export const Icon = styled.div``;

Icon.ArrowHr = styled(arrowHr)``;

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
`;
export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
Wrap.Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 0.14px;
  color: #1b1d21;
`;
Wrap.Burger = styled(burger)``;

export const CategoryTitles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* height: 50px; */
  flex-wrap: wrap;
  /* overflow-y: scroll; */
  /* overflow-wrap: calc(100vh); */
`;

CategoryTitles.Card = styled.div`
  width: max-content;
  // height: 40px;
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #1de3cc;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  :active {
    background: linear-gradient(128.77deg, #1de3cc 14.64%, #18e789 85.07%);
    transform: scale(0.97);
  }
`;

export const ProductTitles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  flex-wrap: wrap;
`;
ProductTitles.Card = styled.div`
  width: max-content;
  height: 40px;
  background: red;
  border-radius: 20px;
  border: 1px solid #1de3cc;
  padding: 8px 20px;
  margin: 8px 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  :active {
    background: linear-gradient(128.77deg, #1de3cc 14.64%, #18e789 85.07%);
    transform: scale(0.97);
  }
`;

export const CardCont = styled.div`
  align-items: center;  
`;

export const Card = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; */
  /* width: 263px; */
  /* height: 298px; */
  box-sizing: border-box;
  background: transparent;
  /* border: 3px solid teal; */
`;

Card.Header = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #18e789;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  /* justify-content: center; */
  /* div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  } */
`;

Card.Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* justify-content: flex-end; */
  width: 100%;
  // padding-right: 20px;
`;

Card.Off = styled.div`
  width: max-content;
  height: 28px;
  background: #de3618;
  border-radius: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  padding: 5px;
`;

Card.Heart = styled(heart)``;

Card.Img = styled.img`
  // margin-top: 20%;
  // width: 100%
`;

Card.Footer = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: flex-start;
  padding: 10px 10px;
  p {
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    color: #959ead;
    padding:0;
    margin:0;
  }
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #1b1d21;
  }
  h3 {
    font-style: normal;
    // font-weight: 800;
    font-size: 18px;
    color: #1bd27e;
  }
`;

export const Button = styled.button`
  background: #1ae287;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  border: none;
  cursor: pointer;
  user-select: none; 
`;

export const Show = styled.button`
  // width: 444px;
  margin: 0 auto;
  height: 56px;
  background: #ffffff;
  border-radius: 28px;
  color: #1b1d21;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 2px solid #18e789;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  :active {
    background: linear-gradient(128.77deg, #1de3cc 14.64%, #18e789 85.07%);
    transform: scale(0.97);
    color: #faffff;
    border: 1px solid linear-gradient(128.77deg, #1de3cc 14.64%, #18e789 85.07%);
  }
`;
Show.Title = styled.h2`
  padding-right: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 23px;
`;
