import "./section.css"
import {Link} from "react-router-dom";
export function Section(){
    return(
        <div className="section">
            <Link to='/mainpage'>Главная страница</Link>
            <br />
            <Link to='/about'>О нас</Link>
            <br />
            <Link to='/news'>Новости</Link>
            <br />
            <Link to='/contacts'>Контакты</Link>
            <br />
            <Link to='/reviews'>Отзывы клиентов</Link>
        </div>
    );
}