import React, { Component } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Math from './pages/calculatorPage';
import Quote from './pages/quotePage';
import Home from './pages/homePage';
import NavBar from './components/navBar/navBar';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Math />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
