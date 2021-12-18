import React from "react";
import ReactDom from "react-dom";
import "./About.css";
import Coverflow from "react-coverflow"
import pic1 from "."

var fn = function() {

}

ReactDOM.render(
    <Coverflow>
    width={960}
    height={480}
    displayQuantityOfSide={2}
    navigation={false}
    enableHeading={false}

    <div>
        onClick={() => fn()}
        onKeyDown={() => fn()}
        role="meneitem"
        tabIndex="0"

    </div>

    </Coverflow>,

    document.querySelector(".content")
);
