import "./header.css"
import Emblema from '../../media/emblema.png'

export default function Header(){
    return(
        <div className="header">
            <img src={Emblema}
                 alt="Жизнь в кайф"
                 width="100px"
                 height="100px"
            />
            <p className="head">Жизнь в кайф: наслаждайся каждым моментом!</p>
        </div>
    )
}