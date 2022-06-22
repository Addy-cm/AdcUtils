import React from 'react'

export default function Alert(props) {

  const capital=(word)=>{
    const low=word.toLowerCase();
    // return low.charAt(0).toUpperCase() + low.slice(1);
    return low.charAt(0).toUpperCase() + low.slice(1);
  }

  return (
      // props.alert &&   <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <div style={{height:"4.5vh"}}>
      {props.alert &&   <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capital(props.alert.type)}</strong>: {props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
        }
        </div>
    
  )
}
