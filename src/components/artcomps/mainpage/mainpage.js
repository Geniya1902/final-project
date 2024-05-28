import OurTeam from '../../../media/our team.jpg'
import "./mainpage.css"

export default function Mainpage() {
    return (
        <div className="mainpage">
            <p>Добро пожаловать на наш сайт!</p>
            <br />
                <img className="team" src={OurTeam} alt="Это мы" height="440px" width="720px"/>
            <p>Меня зовут Мозговая Елена, а рядом - Гомон Владислав, сзади - Наша Команда.
                И мы рады приветствовать Вас на нашем сайте, посвещенном саморазвитию себя в разных областях,
                начиная с психологии и заканчивая финансовой грамотностью. Так давайте познакомимся по ближе!</p>
        </div>
    );
}