"use client"
import styles from './styles.module.scss'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import { useState } from 'react'
import useIsMobile from '@/hooks/useIsMobile'

type HeaderProps = {
    setPopupOpen: (arg: boolean) => void;
};

export default function Header({setPopupOpen}: HeaderProps) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const isMobile = useIsMobile();

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <a className={styles.logoLink} href="#">
                    <Image
                        src={logo}
                        alt='Логотип'
                        width='96'
                        height='39'
                    />
                </a>
                {
                    isMobile && (
                        <button onClick={() => setMenuOpen(!isMenuOpen)} className={isMenuOpen ? "header__btn header__btn--opened" : "header__btn header__btn--close"} type="button">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    )
                }
                <button type='button' className={styles.navBtn}>
                    <div className={styles.decorateElement}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    Каталог
                </button>

                {
                    isMobile && (
                        <div className={styles.mobilePanel}>
                            <button type='button' className={styles.navBtn}>
                                <div className={styles.decorateElement}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                Каталог
                            </button>
                            <a className={styles.basketBtn} href="#">
                                <span className='visually-hidden'>Корзина</span>
                                <svg className={styles.basketIcon}>
                                    <use xlinkHref="#basket"></use>
                                </svg>
                            </a>
                        </div>
                    )
                }

                <div className={styles.phoneBlock}>
                    <span>8 (985) 777 - 77 - 77</span>
                    <span>8 (985) 888 - 88 - 88</span>
                </div>

                <button onClick={() => setPopupOpen(true)} className={styles.callMeBtn} type='button'>
                    Перезвоните мне
                </button>

                <div className={styles.panel}>
                    <button className={styles.searchBtn}>
                        <span className='visually-hidden'>Поиск</span>
                        <svg className={styles.searchIcon}>
                            <use xlinkHref="#search"></use>
                        </svg>
                    </button>
                    <a className={styles.link} href="#">Акции</a>
                    <a className={styles.link} href="#">Оплата и доставка</a>
                    <a className={styles.basketBtn} href="#">
                        <span className='visually-hidden'>Корзина</span>
                        <svg className={styles.basketIcon}>
                            <use xlinkHref="#basket"></use>
                        </svg>
                    </a>
                </div>
            </div>

            {
                isMenuOpen && (
                    <div className={isMenuOpen ? [styles.navMenu, styles.navMenuOpened].join(' ') : styles.navMenu}>
                        <div className={styles.searchBlock}>
                            <button type='button' className={styles.searchBtn}>
                                <svg className={styles.searchIcon}>
                                    <use xlinkHref="#searchMobile"></use>
                                </svg>
                            </button>
                            <input className={styles.input} type="text" placeholder='поиск товара' />
                        </div>
                        <nav className={styles.nav}>
                            <ul className={styles.list}>
                                <li className={styles.item}>
                                    <a className={[styles.link, styles.linkActive].join(' ')} href="#">Каталог</a>
                                </li>
                                <li className={styles.item}>
                                    <a className={styles.link} href="#">Акции</a>
                                </li>
                                <li className={styles.item}>
                                    <a className={styles.link} href="#">Оплата и доставка</a>
                                </li>
                                <li className={styles.item}>
                                    <a className={styles.link} href="#">О компании</a>
                                </li>
                                <li className={styles.item}>
                                    <a className={styles.link} href="#">Отзывы</a>
                                </li>
                                <li className={styles.item}>
                                    <a className={styles.link} href="#">Новости</a>
                                </li>
                                <li className={styles.item}>
                                    <a className={styles.link} href="#">Статьи</a>
                                </li>
                                <li className={styles.item}>
                                    <a className={styles.link} href="#">Контакты</a>
                                </li>
                            </ul>
                        </nav>
                        <button className={styles.callMeBtn} type='button'>
                            Перезвоните мне
                        </button>
                    </div>
                )
            }
        </header>
    )
}
