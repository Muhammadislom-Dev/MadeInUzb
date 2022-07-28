import React from 'react';
import Advertising from '../Advertising/Advertising';
import CardSimple from '../Card/Card';
import Categories from '../Category';
import Header from '../Header/Header';
import Products from '../Product';

const RouterHeader = ({changeModal, dataSlider, dataAdvertising, urlLikes, dataProducts, english, arabian, uzbek, russian, dataCategories, addCountLike, addCountAdd, deletCountLike, deletCountAdd }) => {
    return (
        <div className='RouterHeader'>
            <Header dataSlider={dataSlider} english={english} russian={russian} uzbek={uzbek} arabian={arabian} />            
            <Categories english={english} russian={russian} uzbek={uzbek} main={true} all={false} Category={dataCategories} />
            <Advertising dataAdvertising={dataAdvertising} english={english} russian={russian} uzbek={uzbek} />
            <Products changeModal={changeModal} english={english} russian={russian} uzbek={uzbek} addCountLike={addCountLike} addCountAdd={addCountAdd} deletCountLike={deletCountLike} deletCountAdd={deletCountAdd} urlLikes={urlLikes} top={true} saved={false} all={false} oneProd={false} card={false} CardData={dataProducts} />
            <CardSimple english={english} russian={russian} uzbek={uzbek} />
        </div>
    );
};

export default RouterHeader;