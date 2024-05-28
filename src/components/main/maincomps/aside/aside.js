import "./aside.css"
import Finance from "../../../../media/finance.png";
import React from "react";

export function Aside(){
    return(
        <div className="aside">
            <p>Давайте погрузимся в мир финансовой грамотности и цифр....</p>
            <img className="finance" src={Finance} alt="Финансы"/>
        </div>
    );
}