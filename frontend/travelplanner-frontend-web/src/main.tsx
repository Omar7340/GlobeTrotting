import { Provider } from "@/components/ui/provider"
import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Login } from '@/components/custom/Login'
import NavBar from "@/components/custom/Header/NavBar"
import './index.css'
import axios from "axios"
import api from '@/misc/api.json'

const color = "green"

const api_req = axios.create({
  baseURL: api.host,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <NavBar colorPalette={color}/>
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login api={api_req} colorPalette={color}/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
