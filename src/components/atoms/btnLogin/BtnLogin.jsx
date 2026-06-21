import styles from './BtnLogin.module.scss';
import { Link } from 'react-router-dom';

export const BtnLogin = () => {
    return (
        <Link to='/login' className={styles.btnLogin}>Inicia sesion</Link>
    )
}
