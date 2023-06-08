import { React } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import News from './Components/News';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <div className='bg-dark text-light md:px-3 regular-font'>
        <Routes>
          <Route path='/' element={
            <>
              <Header active='general' />
              <News key='genreal' category='general'  />
            </>
          } />
          <Route path='/business' element={
            <>
              <Header active='business' />
              <News key='bussiness' category='business'  />
            </>
          } />
          <Route path='/entertainment' element={
            <>
              <Header active='entertainment' />
              <News key='entertainment' category='entertainment'  />
            </>
          } />
          <Route path='/health' element={
            <>
              <Header active='health' />
              <News key='health' category='health'  />
            </>
          } />
          <Route path='/science' element={<>
            <Header active='science' />
            <News key='science' category='science'  />
          </>
          } />
          <Route path='/sports' element={
            <>
              <Header active='sports' />
              <News key='sports' category='sports'  />
            </>
          } />
          <Route path='/technology' element={
            <>
              <Header active='technology' />
              <News key='technology' category='technology'  />
            </>
          } />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App