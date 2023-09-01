import styles from './styles.module.scss'
import Image from 'next/image'
import popupImage from '../../public/popupImage.jpg';

type PopupProps = {
    setPopupOpen: (arg: boolean) => void;
};

export default function Popup({ setPopupOpen }: PopupProps) {
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
                        Спасибо, что оставили заявку, наш менеджер совсем скоро свяжется с вами!
                    </h4>
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
