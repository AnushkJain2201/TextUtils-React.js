import { useState } from "react";
import React from "react";

export default function About(props) {
  // const[myStyle , setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // });

  // const [btntext , setBtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if(myStyle.color === 'white'){
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor: 'white'
  //     })
  //     setBtnText("Enable Dark Mode");
  //   }
  //   else{
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'black'
  //     })
  //     setBtnText("Disable Dark Mode");
  //   }
  // }

  return (
    <div className="container" /*style={myStyle}*/>
      <h1 className={`my-3 text-${props.mode === 'light'?'black':'white'}`}>About Us</h1>
      <div className={`accordion bg-${props.mode === 'light'?'light':'dark'}`} id="accordionExample" /*style={myStyle}*/>
        <div className={`accordion-item bg-${props.mode === 'light'?'light':'dark'}`}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button bg-${props.mode === 'light'?'light':'dark'} text-${props.mode === 'light'?'black':'white'}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"

              /*style={myStyle}*/
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show "
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body text-${props.mode === 'light'?'black':'white'}`} /*style={myStyle}*/>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className={`accordion-item bg-${props.mode === 'light'?'light':'dark'}`}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button bg-${props.mode === 'light'?'light':'dark'} text-${props.mode === 'light'?'black':'white'} collapsed`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              /*style={myStyle}*/
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body text-${props.mode === 'light'?'black':'white'}`} /*style={myStyle}*/>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className={`accordion-item bg-${props.mode === 'light'?'light':'dark'}`}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button bg-${props.mode === 'light'?'light':'dark'} text-${props.mode === 'light'?'black':'white'} collapsed`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              /*style={myStyle}*/
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body text-${props.mode === 'light'?'black':'white'}`} /*style={myStyle}*/>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button className="btn btn-primary" onClick={toggleStyle}>{btntext}</button>
      </div> */}
    </div>
  );
}
