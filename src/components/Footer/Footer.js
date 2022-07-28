import React from 'react';
import './Scss/Footer.scss';
import { useTranslation } from 'react-i18next';

const Footer = ({ english, arabian, uzbek, russian }) => {

    const { t } = useTranslation()

    return (
        <div className="Footer">
            <div className='wrapper'>
                <div className='f1 row'>
                    <div className='col-3 c1'>
                        <h3>MADEINUZB</h3>
                        <p>{t(20)}</p>
                        <div className='icons'>
                            <a href='#'>
                                <i className='fa fa-facebook'></i>
                            </a>                          
                            <a href='#'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-youtube-play'></i>
                            </a>                            
                        </div>
                    </div>
                    <div className='col-3 c4'>
                        <h6>{t("subscribe")}</h6>
                        <input type="email" placeholder={`${t("youremail")}...`} />
                        <button className='subs-btn'>{t(50)}</button>
                    </div>
                    <div className='col-2 c2'>
                        <ul>
                            <li className='title'>Products</li>
                            <li><a href='#' className='nav-link'>Features</a></li>
                            <li><a href='#' className='nav-link'>Enterprise</a></li>
                            <li><a href='#' className='nav-link'>Security</a></li>
                            <li><a href='#' className='nav-link'>Customer Store</a></li>
                            <li><a href='#' className='nav-link'>Pricing</a></li>
                            <li><a href='#' className='nav-link'>Demo</a></li>
                        </ul>
                    </div>
                    <div className='col-2 c2'>
                        <ul>
                            <li className='title'>Teams</li>
                            <li><a href='#' className='nav-link'>Engineering</a></li>
                            <li><a href='#' className='nav-link'>Financial Services</a></li>
                            <li><a href='#' className='nav-link'>Sales</a></li>
                            <li><a href='#' className='nav-link'>IT</a></li>
                            <li><a href='#' className='nav-link'>Customer Support</a></li>
                            <li><a href='#' className='nav-link'>Human Resources</a></li>
                            <li><a href='#' className='nav-link'>Media</a></li>
                        </ul>
                    </div>
                    <div className='col-2 c2'>
                        <ul>
                            <li className='title'>Company</li>
                            <li><a href='#' className='nav-link'>Features</a></li>
                            <li><a href='#' className='nav-link'>Enterprise</a></li>
                            <li><a href='#' className='nav-link'>Security</a></li>
                            <li><a href='#' className='nav-link'>Customer Store</a></li>
                            <li><a href='#' className='nav-link'>Pricing</a></li>
                            <li><a href='#' className='nav-link'>Demo</a></li>
                        </ul>
                    </div>
                    <div className='col-3 c3'>
                        <h6>{t("subscribe")}</h6>
                        <input type="email" className='form-control' placeholder={`${t("youremail")}...`} />
                        <button className='subs-btn'>{t(50)}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;