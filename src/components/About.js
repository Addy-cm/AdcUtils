// import React,  { useState } from 'react'

export default function About(props) {

// const [mystyleDarkMode,setmystyle]=useState(
//     {
//         color:'black',
//         backgroundColor: 'white',
//         // border:'2px solid red'
//       }
// )

// const [mystyleDarkModeButton,setmystyle1]=useState(
//     {
//         Text:"Enable dark mode",
//         color:'white',
//         backgroundColor:'black'
//     }
// )

let mystyleDarkMode={
    color: props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'#3e3d83':'white',
    // border:'1px solid',
    borderColor:props.mode==='dark'?'white':'black'
}

// const DarkModeOnOff =()=>{
//     // console.log('Dark mode on')
//     if(mystyleDarkMode.color==='white'){
//         setmystyle({
//             color:'black',
//             backgroundColor:'white'
//         })
//         setmystyle1({
//             color:'white',
//             backgroundColor:'black'
//         })
//     }
//     else{
//         setmystyle({
//             color:'white',
//             backgroundColor:'black'
//         })

//         setmystyle1({
//             color:'black',
//             backgroundColor:'white'
//         })
//     }

// }
  
  return (
    <div className="container" >
        <br />
        <h1 className='my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>About Us</h1>
      <div className="accordion" id="accordionExample">
            <div className="accordion-item" >
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={mystyleDarkMode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong> AdcUtils</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyleDarkMode}>
                AdcUtils is a Text based website which can be used to manipulate texts.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={mystyleDarkMode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyleDarkMode}>
                   This website is totally free to manipulate your texts
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={mystyleDarkMode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser compatibility </strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyleDarkMode}>
                This website can be 'translated' effectively via a particular browser or operating system, such that it can be accessed by and is fully functional for a user. A site may behave perfectly in one browser but still have issues and errors in others.
                </div>
                </div>
            </div>
</div>

{/* <div className="container">
<button onClick={DarkModeOnOff} type="button" className="btn btn-dark my-2" style={mystyleDarkModeButton}>Dark Mode On/Off</button>
</div> */}

    </div>
  )
}