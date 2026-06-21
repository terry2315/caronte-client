import styles from './Title.module.scss';
import { Link } from 'react-router-dom';

export const Title = () => {
    return (
        <Link className={styles.title} to='/'>
            <h1>CARONTE</h1>
        </Link>
    )
}
