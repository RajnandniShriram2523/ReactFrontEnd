import React from "react";
import ReactDom from "react-dom";
import "../src/slidelingimg.css";


export default class SlidelingImg extends React.Component {
    render() {
        return <>
            <div className="wall">
                <div className="headling">
                    { <h1 className="typewriter">
    Welcome to Library priyanka rajnandni jhgf hjgsdf hjdfgjh hjgruy3 hevryuiwr
  </h1> }
                </div>
                {
                    <div class="slide-track">
                    <div class="slide"><img src="public/Image/bg1.jpg" alt="1" /></div>
                    <div class="slide"><img src="public/Image/bg4.jpg" alt="1" /></div>
                    <div class="slide"><img src="public/Image/bg2.jpg" alt="1" /></div>
                    <div class="slide"><img src="public/Image/bg5.jpg" alt="1" /></div>
                    <div class="slide"><img src="public/Image/bg3.jpg" alt="1" /></div>
                    <div class="slide"><img src="public/Image/bg8.jpg" alt="1" /></div>
                    <div class="slide"><img src="public/Image/bg7.jpg" alt="2" /></div>
                    <div class="slide"><img src="public/Image/bg1.jpg" alt="2" /></div>
                    <div class="slide"><img src="public/Image/bg9.jpg" alt="2" /></div>

                </div>}

            </div>


        </>
    }

}