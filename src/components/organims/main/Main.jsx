import styles from './Main.module.scss';
import { Routes, Route } from 'react-router-dom';
import { Shop } from '../../pages/shop/Shop';
import { Sell } from '../../pages/sell/Sell';
import { Account } from '../../pages/account/Account';
import { Brands } from '../../pages/brands/Brands';
import { Register } from '../../pages/register/Register';

export const Main = () => {
    return (
        <main className={styles.main}>
            <Routes>
                <Route path='/' element={<Shop />} />
                <Route path='/sell' element={<Sell />} />
                <Route path='/login' element={<Account />} />
                <Route path='/brand' element={<Brands />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </main>
    )
}
