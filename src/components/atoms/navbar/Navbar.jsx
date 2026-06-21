import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to='/' className={styles.navbar__link}>Comprar</NavLink>
            <NavLink to='/sell' className={styles.navbar__link}>Vender</NavLink>
            <NavLink to='/brand' className={styles.navbar__link}>Marcas</NavLink>
        </nav>
    )
}
