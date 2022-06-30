import React from 'react'

export default function About() {
  return (
    <div className='container'>
        <h2 className='text-warning'>About Us</h2>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What is this React Demo App ? 
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is my first React App.</strong> This app have some functionality for the text given by user such as <strong>Convert to Upper Case</strong> , <strong>Convert to Lower Case</strong> and much more as you will experience during using this App.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Who has build this React App ?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Abhishek Kumar Shashi</strong>. An IIITian from IIIT kalyani.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
