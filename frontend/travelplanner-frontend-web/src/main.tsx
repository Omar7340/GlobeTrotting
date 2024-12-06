import { Provider } from "@/components/ui/provider"
import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Login } from '@/components/custom/Login'
import NavBar from "@/components/custom/Header/NavBar"
import './index.css'

const color = "green"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <NavBar colorPalette={color}/>
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login colorPalette={color}/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
