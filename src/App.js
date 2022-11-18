/* eslint-disable no-unused-vars */
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import publicRoutes from './routes';
import DefaultLayout from './layout';


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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
