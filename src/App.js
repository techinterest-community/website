// import logo from './logo.svg';
import './App.css';
import { Header, Footer, SideBar } from './components';
import { Home, Projects, Blogs, JoinPage, VideoPage } from './pages';
import { Routes, Route } from 'react-router-dom';
import AllPosts from './components/AllPosts/AllPost.component';
import OnePost from './components/OnePost/OnePost.components';
function App() {
  return (
    <div className="App">

      <Header/>
      <SideBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<Home/>}/>
        <Route exact path="/projects" element={<Projects/>}/>
        <Route exact path="/videos" element={<VideoPage/>}/>

        <Route exact path="/blogs" element={<Blogs/>}/>
        <Route exact path="/join" element={<JoinPage/>}/>
        <Route exact path="/posts" element={<AllPosts/>}/>
        <Route exact path="/blogs/:slug" element={<OnePost/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
