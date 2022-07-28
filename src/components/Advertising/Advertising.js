import React from 'react';
import './Scss/Advertising.scss';
import Img1 from './images/sale.png';
import { Link } from 'react-router-dom';

const Advertising = ({dataAdvertising, english, uzbek, russian}) => {   

    return (
        <div className='Advertising'>
            <div className='wrapper'>
                {dataAdvertising.map((data) => (
                    <div key={data.id} className='col-md-12'>
                        <Link to="/adver" className='body nav-link'>
                            <img src={data.image} />
                            <h1 className='title'>{uzbek && data.name_uz} {russian && data.name_ru} {english && data.name_en}</h1>
                            <p className='descript'>{uzbek && data.description_uz} {russian && data.description_ru} {english && data.description_en}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Advertising;