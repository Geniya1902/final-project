import './note.css'
import './button'
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
                            <button className="button1" onClick="Button1()">Записаться на консультацию</button>
                        </p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <h2 className="zagolovok">Владислав Гомон</h2>
                        <p>
                            <button className="button2" onClick="Button2()">Записаться на прием</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}