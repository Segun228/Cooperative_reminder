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
import AdminPage from './pages/adminPage/AdminPage.jsx';
import RequireAuth from './security/RequireAuth.jsx';
import RequireAdmin from './security/RequireAdmin.jsx';
import OAuthPage from './pages/OAuthPage/OAuthPage.jsx'
import CreatePage from './pages/createPage/createPage.jsx';



function App() {
  useSmoothScroll()
  return (
    <>
      <Routes>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
        <Route path='/' element={<Layout></Layout>}>
          <Route path='' element={<RequireAuth><HomePage></HomePage></RequireAuth>} />
          <Route path='cabinet' element={<RequireAuth><CabinetPage></CabinetPage></RequireAuth>} />
          <Route path='dashboard' element={<RequireAuth><CabinetPage></CabinetPage></RequireAuth>} />
          <Route path='create' element={<RequireAuth><CreatePage></CreatePage></RequireAuth>} />
          <Route path='login' element={<LoginPage></LoginPage>} />
          <Route path='oauth' element={<OAuthPage></OAuthPage>} />
          <Route path='register' element={<RegisterPage></RegisterPage>} />
          <Route path='admin' element={<RequireAuth><RequireAdmin><AdminPage></AdminPage></RequireAdmin></RequireAuth>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
