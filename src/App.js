// import logo from './logo.svg';
import './App.css';
import { Header } from './components';
import { Home, Projects, Blogs, JoinPage } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <section className='spreads-section'>
        <div className='spreads'></div>
        <div className='spreads'></div>
        <div className='spreads'></div>
        <div className='spreads'></div>
      </section>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<Home/>}/>
        <Route exact path="/projects" element={<Projects/>}/>
        <Route exact path="/blogs" element={<Blogs/>}/>
        <Route exact path="/join" element={<JoinPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
