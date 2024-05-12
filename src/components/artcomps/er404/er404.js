import Finance from '../../../media/finance.png'
import React from "react";
import './er404.css'

export default function Er404() {
    return (
        <div className="er404">
            <p>Давайте погрузимся в мир финансовой грамотности и цифр....</p>
            <img className="finance" src={Finance} alt="Финансы"/>
        </div>
    );
}