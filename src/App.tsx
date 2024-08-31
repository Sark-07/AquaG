import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './shared/Layout'
import Home from './pages/Home'
import Error from './pages/Error'
import Playground from './pages/Playground'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/playground' element={<Playground />} />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
