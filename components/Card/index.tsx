import styles from './styles.module.scss'
import Image, { StaticImageData } from 'next/image'


type CardProp = {
    src: StaticImageData;
    alt: string;
    date: string;
    title: string;
    text: string;
    link: string;
};

export default function Card({src, alt, date, title, text, link}: CardProp) {
    return (
        <div className={styles.card}>
            <Image
                className={styles.img}
                src={src}
                alt={alt}
            />
            <span className={styles.date}>{date}</span>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
            <a className={styles.link} href={link}>Читать далее</a>
        </div>
    )
}
