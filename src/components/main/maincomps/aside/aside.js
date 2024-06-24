import "./aside.css"
import React from "react";

export function Aside(){
    return(
        <div className="aside">
            <p>Подписывайтесь на наш</p>
                <br />
                <a href="#" className="fa fa-youtube"></a>
                <br />
            <p><a href="https://www.youtube.com/@kateman08" target="_blank">The Queen of Money</a> (https://www.youtube.com
                /@kateman08)</p>
        </div>
);
}