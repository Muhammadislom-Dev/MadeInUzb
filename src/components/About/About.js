import React from 'react';
import './Scss/About.scss';
import Img1 from './images/p1.png';
import Img2 from './images/p2.png';
import Img3 from './images/p3.png';
import Video from './video/Munis2.mp4'
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { useTranslation } from 'react-i18next';

const About = ({ english, uzbek, russian }) => {

    // i18nexus

    const { t } = useTranslation()

    // videoplayer options and methods

    const options = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
            src: Video,
            type: 'video/mp4'
        }]
    };

    const onReady = (player) => {
        playerRef.current = player;

        player.on('waiting', () => {
            player.log('player is waiting');
        });

        player.on('dispose', () => {
            player.log('player will dispose');
        });
    };

    const videoRef = React.useRef(null);
    const playerRef = React.useRef(null);

    React.useEffect(() => {        
        if (!playerRef.current) {
            const videoElement = videoRef.current;

            if (!videoElement) return;

            const player = playerRef.current = videojs(videoElement, options, () => {
                player.log('player is ready');
                onReady && onReady(player);
            });
        }
    }, [options, videoRef]);
    
    React.useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);

    return (
        <>
            <div className={`About`}>
                <div className='wrapper1'>
                    <div className='col-md-12'>
                        <div className='video'>
                            <div data-vjs-player>
                                <video ref={videoRef} className='video-js vjs-big-play-centered' />
                            </div>
                        </div>
                        <h1 className={`name text-center`}>{t(21)}</h1>
                        {english &&
                            <p>Our company has been on the market since 2012.

                                We value each of our clients, so the high quality of service is
                                priority for us. You can always ask your questions
                                online or by phone and get detailed advice

                                A team of professionals monitors the constant replenishment and updating
                                assortment, development of promotions and a system of favorable discounts,
                                informing our customers about new products. Employees
                                undergo thorough training, improve their skills and knowledge,
                                undergo special courses and trainings to keep up with the times.

                                We work with more than 120 cities in Russia and CIS countries. Geography of our
                                sales are expanding annually.

                                Our mission is to constantly develop and improve the quality of our products.
                                through the introduction of innovative technologies. Making the world better
                                and people: customers, employees and others are happier.

                                In our activities, our company is guided by the principle -
                                “Minimize the negative impact on the environment”, therefore
                                Responsible attitude to the environment is one of the company's priorities.</p>
                        }
                        {russian &&
                            <p>Наша компания на рынке с 2012 года. Мы ценим каждого нашего клиента, поэтому высокое качество обслуживания является для нас приоритетом. Вы всегда можете задать свои вопросы онлайн или по телефону и получить подробную консультацию. Команда профессионалов следит за постоянным пополнением и обновлением ассортимента, разработкой акций и системы выгодных скидок, информируя наших клиентов о новинках. Сотрудники проходят тщательное обучение, повышают квалификацию и знания, проходят специальные курсы и тренинги, чтобы идти в ногу со временем. Мы работаем более чем со 120 городами России и стран СНГ. География наших продаж ежегодно расширяется. Наша миссия заключается в постоянном развитии и улучшении качества нашей продукции. за счет внедрения инновационных технологий. Делаем мир лучше, а людей: клиентов, сотрудников и других людей счастливее. В своей деятельности наша компания руководствуется принципом - «Минимизировать негативное воздействие на окружающую среду», поэтому Ответственное отношение к окружающей среде является одним из приоритетов компании.</p>
                        }
                        {uzbek &&
                            <p>Kompaniyamiz 2012 yildan beri bozorda. Biz har bir mijozimizni qadrlaymiz, shuning uchun yuqori sifatli xizmat ko'rsatish biz uchun ustuvor ahamiyatga ega. Siz har doim o'z savollaringizni onlayn yoki telefon orqali berishingiz va batafsil maslahat olishingiz mumkin. Mutaxassislar jamoasi assortimentning doimiy ravishda to'ldirilishi va yangilanishini, aksiyalarning rivojlanishini va qulay chegirmalar tizimini kuzatib boradi, mijozlarimizni yangi mahsulotlar haqida xabardor qiladi. Xodimlar zamon bilan hamnafas bo‘lish uchun puxta o‘qitilib, malaka va bilimini oshirib, maxsus kurs va treninglardan o‘tayotir. Biz Rossiya va MDH davlatlarining 120 dan ortiq shaharlari bilan ishlaymiz. Bizning savdo geografiyamiz har yili kengayib bormoqda. Bizning vazifamiz - mahsulotlarimizni doimiy ravishda rivojlantirish va sifatini oshirish. innovatsion texnologiyalarni joriy etish orqali. Dunyoni yaxshiroq qilish va odamlar: mijozlar, xodimlar va boshqalar baxtliroq. Bizning kompaniyamiz o'z faoliyatimizda "Atrof-muhitga salbiy ta'sirni minimallashtirish" tamoyiliga amal qiladi, shuning uchun atrof-muhitga mas'uliyat bilan munosabatda bo'lish kompaniyaning ustuvor yo'nalishlaridan biridir.</p>
                        }
                    </div>
                    <div className='row partners'>
                        <h1 className='text-center mb-5'>{t("partners")}</h1>
                        <div className='col-4'>
                            <img src={Img1} />
                        </div>
                        <div className='col-4 border border-dark border-top-0 border-bottom-0'>
                            <img src={Img2} />
                        </div>
                        <div className='col-4'>
                            <img src={Img3} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;