import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import './components/Navbar/Navbar.css';
// import "bootstrap/dist/css/bootstrap.min.css"


function App() {
    return (
        <div>
            <Navbar />
            <Body />
            {/* <Body2 /> */}
        </div>
    )
}
export default App