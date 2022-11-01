import style from "/styles/list.module.css";

function slug(string) {
    return string.toLowerCase().replaceAll("'", "").replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g," ").replaceAll(/\s{2,}/g," ").trim().replaceAll(" ", "-");
}

export default function List(props) {
    return (
        <div className={style.container}>
            <Article title="Crimson Karma" type="Manhwa"/>
            <Article title="Crimson Karma" type="Manhwa"/>
            <Article title="Crimson Karma" type="Manhwa"/>
            <Article title="Crimson Karma" type="Manhwa"/>
            <Article title="Crimson Karma" type="Manhwa"/>
            <Article title="Crimson Karma" type="Manhwa"/>
            <Article title="Crimson Karma" type="Manhwa"/>
            <Article title="Crimson Karma" type="Manhwa"/>
            <Article title="Crimson Karma" type="Manhwa"/>
            <Article title="Lady Chef Royale" type="Manhwa"/>
            <Article title="Mook Hyang - Dark Lady" type="Manhwa"/>
            <Article title="Asmodian's Contract" type="Manhwa"/>
            <Article title="The Return of the 8th Class Mage" type="Manhwa"/>
            <Article title="The Golden-Haired Elementalist" type="Manhwa"/>
            <Article title="White Blood" type="Manhwa"/>
            <Article title="A Transmigrator's Privilege" type="Manhwa"/>
            {/* <Article title="Absolute Hypnosis in Another World" type="Pornhwa"/> */}
        </div>
    )
}

function Article(props) {
    const path = "/images/"+slug(props.type)+"/"+slug(props.title)+".png";
    return (
        <article className={style.manga_card}>
            <img src={path} alt="" />
            <div>
                <legend>{props.title}</legend>
                <svg className={style.heart} viewBox="0 0 512 512">
                    <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" fill="currentColor"/>
                </svg>
            </div>
        </article>
    )
}