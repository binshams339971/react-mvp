import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Feedback from './components/Feedback.js';
import Information from './components/Information.js';
import ProductDetails from './components/ProductDetails.js';
function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details' element={<ProductDetails />} />
          <Route path='/information' element={<Information />} />
          <Route path='/feedback' element={<Feedback />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
