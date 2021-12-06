import React, { useEffect } from 'react'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Payment from './pages/Payment'
import ProductListPage from './pages/ProductListPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import SingleProductPage from './pages/SingleProductPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Alert from './utils/Alert'
import { keepUserLoggedIn } from './actions/auth.actions'
import { useDispatch, useSelector } from 'react-redux'
import HOC from './HOC'
const App = () => {
  const dispatch = useDispatch()
  const { auth } = useSelector(state => state)
  useEffect(() => {
    dispatch(keepUserLoggedIn())
  }, [])

  return (
    <div>
      <Alert />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <HOC path='/signin' element={<SignIn />} />
          <HOC path='/signup' element={<SignUp />} />
          <Route path='/productlist' element={<ProductListPage />} />
          <Route path='/singleproduct/:pid' element={<SingleProductPage />} />
          <Route path='/cart' element={<Cart />} />

        </Routes>
      </Router>
    </div>
  )
}
export default App
