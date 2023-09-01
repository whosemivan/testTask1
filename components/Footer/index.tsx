import styles from './styles.module.scss'
import Image from 'next/image'
import logo from '../../public/footer-logo.svg';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.block}>
                    <Image
                        src={logo}
                        alt="Логотип"
                        className={styles.logoFooter}
                    />
                    <p className={styles.text}>
                        (с) 0001-2021 Саурон-глаз
                        Все права защищены.
                        Любое копирование материалов
                        только с разрешения владельцев
                        сайта
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <a className={styles.link} href="#">
                                <div className={styles.container}>
                                    <svg className={styles.fb}>
                                        <use xlinkHref="#facebook"></use>
                                    </svg>
                                </div>

                            </a>
                        </li>
                        <li className={styles.item}>
                            <a className={styles.link} href="#">
                                <div className={styles.container}>
                                    <svg className={styles.inst}>
                                        <use xlinkHref="#instagram"></use>
                                    </svg>
                                </div>
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a className={styles.link} href="#">
                                <div className={styles.container}>
                                    <svg className={styles.vk}>
                                        <use xlinkHref="#vk"></use>
                                    </svg>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={[styles.block, styles.phoneBlock].join(' ')}>
                    <a className={styles.phoneNumber} href="#">8 (985) 777 - 77 - 77</a>
                    <a className={styles.phoneNumber} href="#">8 (985) 777 - 77 - 77</a>
                    <span className={styles.callMeText}>Перезвоните мне</span>
                    <a className={styles.email} href="#">info@noresponce.ru</a>
                </div>

                <nav className={styles.footerNav}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <a className={styles.link} href="#">Очковые линзы</a>
                        </li>
                        <li className={styles.item}>
                            <a className={styles.link} href="#">Готовые очки</a>
                        </li>
                        <li className={styles.item}>
                            <a className={styles.link} href="#">Имиджевые очки</a>
                        </li>
                        <li className={styles.item}>
                            <a className={styles.link} href="#">Аксессуары</a>
                        </li>
                    </ul>
                </nav>

                <nav className={styles.footerNav}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <a className={styles.link} href="#">Очковые линзы</a>
                        </li>
                        <li className={styles.item}>
                            <a className={styles.link} href="#">Готовые очки</a>
                        </li>
                        <li className={styles.item}>
                            <a className={styles.link} href="#">Имиджевые очки</a>
                        </li>
                        <li className={styles.item}>
                            <a className={styles.link} href="#">Аксессуары</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.bottomPanel}>
                <div className={styles.wrapper}>
                    <a className={styles.panelLink} href="#">Политика конфиденциальности</a>
                    <a className={styles.panelLink} href="#">Перед покупкой товаров или услуг проконсультируйтесь со специалистами.</a>
                </div>
            </div>
        </footer>
    )
}
