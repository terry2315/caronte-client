import styles from './Header.module.scss';
import { Title } from '../../atoms/title/Title';
import { Navbar } from '../../atoms/navbar/Navbar';
import { BtnLogin } from '../../atoms/btnLogin/BtnLogin';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__box}>
                <Title />
                <Navbar />
            </div>

            <BtnLogin />
        </header>
    )
}