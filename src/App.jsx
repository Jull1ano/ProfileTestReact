import './style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Profile } from './Pages/Profile'
import { Edit } from './Pages/Edit'
import { Layout } from './Layout'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Profile/>} />
          <Route path="/Edit" element={<Edit/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
