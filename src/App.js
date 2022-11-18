/* eslint-disable no-unused-vars */
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {publicRoutes, privateRoutes} from './routes';
import DefaultLayout from './layout/DefaultLayout';
import AdminLayout from './layout/AdminLayout';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          {publicRoutes.map((route, index) => {
            var Page = route.component;
            return (
              <Route key={index} path={route.path} element={<DefaultLayout><Page/></DefaultLayout>}/>
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
  );
}

export default App;
