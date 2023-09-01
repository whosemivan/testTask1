import styles from './styles.module.scss'


export default function Bonus() {
    return (
        <div className={styles.bonus}>
            <div className={styles.wrapper}>
                <h4 className={styles.title}>Подпишись на наши соцсети и получи скидку 5%</h4>
                <div className={styles.btnWrapper}>
                    <a className={styles.link} href="#">
                        <svg className={styles.fbIcon}>
                            <use xlinkHref="#facebookBig"></use>
                        </svg>
                        Facebook
                    </a>
                    <a className={styles.link} href="#">
                        <svg className={styles.vkIcon}>
                            <use xlinkHref="#vkBig"></use>
                        </svg>
                        Вконтакте
                    </a>
                </div>
            </div>
        </div>
    )
}
