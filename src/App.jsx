import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import './scss/Home.scss'
import Courses from './pages/Courses'
import News from './pages/News'
import './index.css'
import Navbar from './components/Navbar'
import CourseDetails from './pages/CourseDetails';
import Register from './pages/Register'
import { RegistrationProvider } from "./contexts/RegistrationContext";
import './scss/Navbar.scss'
import './scss/styles.scss'



function App() {

  return (
    <>
    <RegistrationProvider>
    <Navbar/>
    <main>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/courses/:id" element={<CourseDetails />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </main>
    </RegistrationProvider>
    </>
  )
}

export default App
