/* eslint-disable no-unused-vars */
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {publicRoutes, privateRoutes} from './routes';
import { createContext, useState } from 'react';
import DefaultLayout from './layout/DefaultLayout';
import AdminLayout from './layout/AdminLayout';

export const UserContext = createContext();

function App() {
  const [isLogin, setLogin] = useState(false)
  const [isAdmin, setAdmin] = useState(true)
  return (
    <UserContext.Provider value={{isLogin, isAdmin}}>
      <BrowserRouter>
        <div className='App'>
          <Routes>
            {publicRoutes.map((route, index) => {
              var Page = route.component;
              var Layout = DefaultLayout;
              return (
                <Route key={index} path={route.path} element={<Layout><Page/></Layout>}/>
              )
            })}
            {privateRoutes.map((route, index) => {
              var Page = route.component;
              return (
                <Route key={index} path={route.path} element={<AdminLayout><Page/></AdminLayout>}/>
              )
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
