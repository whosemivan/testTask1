"use client"
import styles from './page.module.scss'
import TopHeader from '@/components/TopHeader';
import Header from '@/components/Header';
import Slider from '@/components/Slider';
import Card from '@/components/Card';
import card1 from '../public/card1.jpg';
import card2 from '../public/card2.jpg';
import card3 from '../public/card3.jpg';
import Bonus from '@/components/Bonus';
import Footer from '@/components/Footer';
import RequestPopup from '@/components/RequestPopup';
import Popup from '@/components/Popup';
import { useState } from 'react';

export default function Home() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isPopupSuccessOpen, setPopupSuccessOpen] = useState(false);

  return (
    <>
      <main className={styles.main}>
        <TopHeader />
        <Header setPopupOpen={setPopupOpen} />
        <Slider />
        <div className={styles.textWrapper}>
          <p className={styles.text}>
            <span>Очки уже на протяжении долгого времени являются не только незаменимым помощником в повседневной жизни, но и стильным, создающим имидж аксессуаром.</span>
            <span>Сегодня достаточно много магазинов, которые предлагают широкий выбор не только очков, но и контактных линз.</span>
            <span>Незаметные, удобные контактные линзы смогли открыть людям с недостаточной зоркостью новые возможности для полноценной, активной жизни.</span>
            <span>Если Вам нужна помощь с выбором качественных очков мы ждем Вас!</span>
          </p>
        </div>
        <div className={styles.cardWrapper}>
          <Card src={card1} alt='Обложка к статье' date='01. 12. 2020' title='Какой материал линз выбрать?' text='Какой из материалов больше подходит вам? Это зависит от предъявляемых к нему ваших индивидуальных требований: должны ли очки быть легкими, поскольку Вы предпочитаете тонкие филигранные оправы?' link='#' />
          <Card src={card2} alt='Обложка к статье' date='01. 12. 2020' title='История очков с XIII по XVIII век' text='Медицинские очки берут своё начало в 13 веке. Предполагаемым изобретателем считается Сальвино Армати. ' link='#' />
          <Card src={card3} alt='Обложка к статье' date='01. 12. 2020' title='Какие контактные линзы бывают?' text='На протяжении многих лет контактные линзы для глаз являются настоящим спасением для миллионов людей во всем мире.' link='#' />
        </div>
        <Bonus />
      </main>
      <Footer />
      {isPopupOpen && <RequestPopup setPopupOpen={setPopupOpen} setPopupSuccessOpen={setPopupSuccessOpen} />}
      {isPopupSuccessOpen && <Popup setPopupOpen={setPopupSuccessOpen} />}
    </>
  )
}
