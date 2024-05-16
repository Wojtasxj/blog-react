
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import HomePage from './components/pages/HomePage';
import PostPage from './components/pages/PostPage';
import AddPostPage from './components/pages/AddPostPage';
import EditPostPage from './components/pages/EditPostPage';
import AboutPage from './components/pages/AboutPage';
import NotFound from './components/pages/NotFound';


const App = () => {
  return (
    <Container>
    <Header />
    <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/post/add" Component={AddPostPage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/post/:id" Component={PostPage} />
        <Route path="/post/edit/:id" Component={EditPostPage} />
        <Route path="*" Component={NotFound} />
    </Routes>
    <Footer />
    </Container>
  );
};

export default App;