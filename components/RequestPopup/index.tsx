import styles from './styles.module.scss'
import Image from 'next/image'
import popupImage from '../../public/popupImage.jpg';

type PopupProps = {
    setPopupOpen: (arg: boolean) => void;
    setPopupSuccessOpen: (arg: boolean) => void;
};

export default function RequestPopup({setPopupOpen, setPopupSuccessOpen}: PopupProps) {
    return (
        <>
            <div className={styles.popup}>
                <button onClick={() => setPopupOpen(false)} className={styles.closeBtn}>
                    <svg className={styles.closeIcon}>
                        <use xlinkHref="#close"></use>
                    </svg>
                </button>
                <div className={styles.wrapper}>
                    <h4 className={styles.title}>
                        Мы вам перезвоним!
                    </h4>
                    <form className={styles.form}>
                        <div className={styles.formWrapper}>
                            <input className={styles.input} type="text" placeholder='Ваше имя *' />
                            <input className={[styles.input, styles.inputPhone].join(' ')} type="number" placeholder='Ваш телефон *' />
                        </div>
                        <input className={styles.customCheckbox} type="checkbox" id='agreement' name='agreement' />
                        <label className={styles.label} htmlFor="agreement">Я соглашаюсь с Политикой конфиденциальности</label>
                        <button onClick={() => {
                            setPopupOpen(false);
                            setPopupSuccessOpen(true);
                        }} className={styles.btn} type='submit'>Перезвоните мне</button>
                    </form>
                </div>
                <Image
                    src={popupImage}
                    alt='Мы вам перезвоним!'
                    className={styles.img}
                />
            </div>
            <div onClick={() => setPopupOpen(false)} className={styles.overflow}></div>
        </>
    )
}
