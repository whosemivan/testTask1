import styles from './styles.module.scss'

export default function TopHeader() {
    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <p className={styles.address}>Ул. Существующая, д. 404, <span className={styles.addressElement}>Ул. Бедного, д. 500</span></p>
                <nav className={styles.nav}>
                    <ul className={styles.list}>
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
            </div>
        </div>
    )
}
