import './App.css';
import Landing from './components/Landing/Landing';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login'
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Landing />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
