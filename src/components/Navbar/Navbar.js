import Humburger from '../humburger/Humburger';
import styles from './Navbar.module.css';

const Navbar=({setCategory})=>{

    return(
        <div className={styles.nav}>
            <div className={styles.humburger}>
               <Humburger setCategory={setCategory} />
            </div>
            <div className={styles.inshort}>
                <img src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' alt='inshortImg' />
            </div>
        </div>
    )
}

export default Navbar;