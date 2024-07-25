import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Documents from './pages/Documents';
import Projects from './pages/Projects';
import Team from './pages/Team';
import DashboardLayout from './pages/DashboardLayout';

function App() {
  return (
    // <div className="flex flex-col h-screen">
    // <Navbar />
    // <div className="flex flex-1">
    //   <Sidebar />
      
    // </div>
  // </div>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashboardLayout/>} >
      
        <Route path="" element={<Home/>} />
      
      <Route path="/projects" element={<Projects/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/documents" element={<Documents/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
