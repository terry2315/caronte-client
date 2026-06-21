import { Header } from './components/organims/header/Header';
import { Main } from './components/organims/main/Main';
import { Footer } from './components/organims/footer/Footer';

import './App.scss'

function App() {

  return (
    <div className='layout'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
