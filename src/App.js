import './App.css';
import React from 'react';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const App = () => {
  return (

    <Router>
      <div className="main">
        <div className='home_block'>
          <a href="/" className='home'><h2 className="main-header">Crud Operations</h2></a>
          <div>
            <Link to='/create'><Button className='btn'>Create</Button></Link>
            <Link to='/read'><Button className='btn'>Read</Button></Link>
          </div>
        </div>
        <Routes>
        <Route path='/create' element={<Create />} />
        <Route path='/read' element={<Read />}></Route>
        <Route path='/update' element={<Update />}></Route>
        </Routes>
      </div>
    </Router>

  );
}

          /* <div>
            <Route path='/create' element={<Create />}></Route>
          </div>
          <div>
            <Route path='/read' element={<Read />}></Route>
          </div>
          <Route path='/update' element={<Update />}></Route> */


export default App;