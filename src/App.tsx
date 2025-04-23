import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Index from './pages'
import { Layout } from './pages/layout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Index />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
