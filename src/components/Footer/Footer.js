import styles from './Footer.module.css';


const Footer=()=>{


    return(
        <div className={styles.footer}>
            <div className={styles.developer}>
            <span>Inshorts clone made by - </span>
            <a href='google.com' >Prabhat kumar</a>
            </div>
            <span className={styles.br}></span>
            <div className={styles.logos}>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-solid fa-link"></i>
            </div>
        </div>
    )
};

export default Footer;