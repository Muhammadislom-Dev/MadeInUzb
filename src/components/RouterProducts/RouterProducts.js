import React from 'react';
import OneProduct from '../Products/OneProduct';

const RouterProducts = ({english, arabian, uzbek, russian, id, name, img, descript, changeModal, dataProducts}) => {
    return (
        <div className='RouterProducts'>
            <OneProduct dataProducts={dataProducts} changeModal={changeModal} english={english} russian={russian} uzbek={uzbek} arabian={arabian} id={id} name={name} img={img} descript={descript} />
        </div>
    );
};

export default RouterProducts;