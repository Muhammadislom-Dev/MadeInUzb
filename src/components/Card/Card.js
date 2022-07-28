import React from 'react';
import './Scss/Card.scss';
import { Headset, LocalAtm, LocalShipping, Payment } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CardSimple = () => {

    const {t} = useTranslation()

    return (
        <div className='Card'>
            <div className='wrapper'>                
                <div className='col-md-12'>
                    <div className='body row'>
                        <div className='col-3'>
                            <Link to="/" className='tool nav-link'>
                                <LocalShipping className='icon' />
                                <div className='d-block mx-'>
                                    <h5>{t(8)}</h5>
                                    <p>{t(9)}</p>
                                </div>
                            </Link>
                        </div>
                        <div className='col-3'>
                            <Link to="/" className='tool nav-link'>
                                <LocalAtm className='icon' />
                                <div className='d-block mx-'>
                                    <h5>{t(10)}</h5>
                                    <p>{t(11)}</p>
                                </div>
                            </Link>
                        </div>
                        <div className='col-3'>
                            <Link to="/" className='tool nav-link'>
                                <Headset className='icon' />
                                <div className='d-block mx-'>
                                    <h5>{t(12)}</h5>
                                    <p>{t(13)}</p>
                                </div>
                            </Link>
                        </div>
                        <div className='col-3'>
                            <Link to="/" className='tool nav-link'>
                                <Payment className='icon' />
                                <div className='d-block mx-'>
                                    <h5>{t(14)}</h5>
                                    <p>{t(16)}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardSimple;