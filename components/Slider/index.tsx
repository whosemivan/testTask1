"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './styles.module.scss'
import { Pagination } from 'swiper/modules';


export default function Slider() {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return '<span class="' + className + " customPag" + '">' + '</span>';
        },
      };

    return (
        <div className={styles.slider}>
            <Swiper
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                pagination={pagination} 
                modules={[Pagination]} 
            >
                <SwiperSlide>
                    <div className={styles.slide}>
                        <div className={styles.wrapper}>
                            <h1 className={styles.title}>Акция! Дарим 5% скидки!</h1>
                            <p className={styles.text}>Закажи очки или оправу на нашем сайте и получи скидку на заказ - 5%</p>
                            <a className={styles.link} href="#">Подробнее об акции</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <div className={styles.wrapper}>
                            <h1 className={styles.title}>Акция! Дарим 5% скидки!</h1>
                            <p className={styles.text}>Закажи очки или оправу на нашем сайте и получи скидку на заказ - 5%</p>
                            <a className={styles.link} href="#">Подробнее об акции</a>
                        </div>
                    </div>
                </SwiperSlide>                <SwiperSlide>
                    <div className={styles.slide}>
                        <div className={styles.wrapper}>
                            <h1 className={styles.title}>Акция! Дарим 5% скидки!</h1>
                            <p className={styles.text}>Закажи очки или оправу на нашем сайте и получи скидку на заказ - 5%</p>
                            <a className={styles.link} href="#">Подробнее об акции</a>
                        </div>
                    </div>
                </SwiperSlide>                <SwiperSlide>
                    <div className={styles.slide}>
                        <div className={styles.wrapper}>
                            <h1 className={styles.title}>Акция! Дарим 5% скидки!</h1>
                            <p className={styles.text}>Закажи очки или оправу на нашем сайте и получи скидку на заказ - 5%</p>
                            <a className={styles.link} href="#">Подробнее об акции</a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}


