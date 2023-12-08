import 'index.css'
import ScrollToTop from "./scrollToTop";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'
import Home from 'components/Home/Home'
import Cart from 'components/Cart/Cart'
import About from 'components/About/About'
import Shop from 'components/Shop/Shop'
import Collections from 'components/Shop/Collections'
import ItemDetail from 'components/Shop/ItemDetail';

const App = () => {
    return (
        <Provider store={store}>
                <Router>
                    <ScrollToTop />
                    <Cart />
                    <Routes>
                        <Route exact path='/' element={ <Home /> }/>
                        <Route exact path='/about' element={ <About /> } />
                        <Route exact path='/shop' element={ <Shop /> } />
                        <Route exact path='/shop/:collection' element={ <Collections /> } />
                        <Route exact path='/shop/collection/:name' element={ <ItemDetail /> } />
                    </Routes>
                </Router>
        </Provider>
    )
}

export default App;