// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <>
//     <div classNameName="App">
//       <header classNameName="App-header">
//         <img src={logo} classNameName="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           classNameName="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React with Aditya
//         </a>
//       </header>
//     </div>
//     </>
//   );
// }

// export default App;


// copy the original upper content to make change
// import logo from './logo.svg';
import { useState } from 'react';
import './Appa.css';
import Alert from './components/Alert';
// import About from './components/About';
import Form from './components/Form';
import Navbar from './components/Navbar';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";


function App() {
   const [mode,setMode]=useState('light')  // Whether dark mode enable or not


   const [alert,setAlert]=useState(null);
   const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null);
    }, 1000)

    
   }

   const EnableDarkMode=()=>{
    if(mode==='light'){
    setMode('dark');
    // document.body.style.backgroundColor='#212529';
    // document.body.style.backgroundColor='#212529';
    document.body.style.backgroundColor='#042743';
    showalert("Dark Mode Enabled","success");
    document.title="AdcUtils - Dark Mode"
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showalert("Light Mode Enabled","success");
    document.title="AdcUtils - Light Mode"
  }
   }
   
  return (
    <>
    {/* <Router> */}
    <Navbar title="AdcUtils" home="Home" about="About Us" mode={mode} EnableDarkMode={EnableDarkMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/"> */}
     <Form showalert={showalert} heading="Enter Your Text" mode={mode} EnableDarkMode={EnableDarkMode}/>       
  
          {/* </Route>
        </Switch> */}
    
    {/* <About/> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
