import './note.css'
import We from '../../../media/we.jpg'

export default function Note() {
    return (
        <div className="container">
            <h1 className="zagol">Запись</h1>
            <img src={We} className="we" alt="Это мы" width="720px" height="470px"/>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <h2 className="zagolovok">Елена Мозговая</h2>
                        <p>
                            <button className="button1"> <a href="https://t.me/First_2610">Записаться на консультацию</a> </button>
                        </p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <h2 className="zagolovok">Владислав Гомон</h2>
                        <p>
                            <button className="button2"> <a href="https://t.me/Vladislav5142">Записаться на прием</a> </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}