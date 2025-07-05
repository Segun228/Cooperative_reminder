import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Suspense, lazy, use } from 'react';
import useSmoothScroll from "./hooks/useSmoothScroll.js"
import NotFoundPage from './pages/notFoundPage/NotFoundPage.jsx';
import Layout from './pages/layout/Layout.jsx';
import HomePage from "./pages/homePage/HomePage.jsx"
import CabinetPage from './pages/cabinetPage/CabinetPage.jsx';
import LoginPage from './pages/loginPage/LogInPage.jsx';
import RegisterPage from './pages/registerPage/RegisterPage.jsx';


function App() {
  useSmoothScroll()
  return (
    <>
      <Routes>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
        <Route path='/' element={<Layout></Layout>}>
          <Route path='' element={<HomePage></HomePage>} />
          <Route path='cabinet' element={<CabinetPage></CabinetPage>} />
          <Route path='create' element={<CabinetPage></CabinetPage>} />
          <Route path='login' element={<LoginPage></LoginPage>} />
          <Route path='register' element={<RegisterPage></RegisterPage>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
