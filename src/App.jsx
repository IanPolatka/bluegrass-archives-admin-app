import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from 'pages/dashboard';
import Login from 'pages/login';
import Home from 'pages/home';
import NotFoundPage from 'pages/404';

function App() {
  return (
    <div className="antialiased">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFoundPage/>}
        />
      </Routes>
    </div>
  );
}

export default App;
