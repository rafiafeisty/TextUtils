import React from 'react'

export default function About(props) {
  // const [myStyle,setMyStyle]=useState({
  //   color:'black',
  //   backgroundColor:'white'
  // })
  let myStyle={
    color: props.mode==='dark'?'white':'black',
    backgroundColor: props.mode === 'dark'?'#153b58':'white'
  }

  
  return (
    <div className='container my-4' style={myStyle}>
      <h1 className='my-2'>About us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="card">
    <div className="card-header" id="headingOne" style={myStyle}>
      <h2 className="mb-0">
        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
        Introduction
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body" style={myStyle}>
      TextUtils is a powerful utility for manipulating and analyzing text. Whether you're a writer, a developer, a student, or anyone who works with text, TextUtils provides a suite of tools to help you get the most out of your textual content.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo" style={myStyle}>
      <h2 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        How to Use
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body" style={myStyle}>
      <strong>Input Text: </strong>Paste or type your text into the text area provided.
      <br />
      <strong>Choose an Action: </strong>Select the desired action (e.g., convert to uppercase, analyze text).
      <br />
      <strong>Copy and Use: </strong>Copy the processed text to your clipboard and use it as needed.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree" style={myStyle}>
      <h2 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
        Why Choose TextUtils?
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body" style={myStyle}>
      TextUtils stands out as a comprehensive solution for all your text manipulation needs. Our tools are designed to be fast, accurate, and easy to use, making it an essential tool for anyone who works with text regularly.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
