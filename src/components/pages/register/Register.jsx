import styles from './Register.module.scss';
import { RegisterForm } from '../../organims/registerForm/RegisterForm';

export const Register = () => {
    return (
        <main className={styles.register}>
            <div className={styles.register_box}>
                <RegisterForm />
            </div>
        </main>
    );
};