import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Feedback from './components/Feedback.js';
import Information from './components/Information.js';
import ProductDetails from './components/ProductDetails.js';
import Signin from './components/Signin.js';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:pId' element={<ProductDetails />} />
          <Route path='/information' element={<Information />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/signin' element={<Signin />} />
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
