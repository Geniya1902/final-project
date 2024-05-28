import Carta from "../../../media/karta.png"
import './contacts.css'

export default function Contacts() {
    return (
        <div className="contacts">
            <h1 className="zag">Наши контакты</h1>
            <table border="black solid 1px">
                <tr>
                    <td></td>
                    <td>Елена Мозговая</td>
                    <td>Владислав Гомон</td>
                </tr>
                <tr>
                    <td className="znak"><a href="#" className="fa fa-phone">Телефон</a></td>
                    <td>+7 (904) 441-87-09</td>
                    <td>+7 (928) 127-15-55</td>
                </tr>
                <tr>
                    <td className="znak"><a href="#" className="fa fa-telegram">Telegram</a></td>
                    <td>@First_2610</td>
                    <td>@Vladislav5142</td>
                </tr>
                <tr>
                    <td className="znak">E-mail</td>
                    <td>allegretta0207@gmail.com</td>
                    <td>meynkune@yandex.ru</td>
                </tr>
                <tr>
                    <td>Другие варианты связи</td>
                    <td>https://taplink.cc/elenamozgovaya/</td>
                    <td>https://gomanvlad.taplink.ws/</td>
                </tr>
            </table>
            <p>Мы в любое время готовы ответить на все интересующие Вас вопросы.</p>
            <br />
            <p>Мы принимаем по адресу: г.Ростов-на-Дону, пл.Толстого д.8 каб.230, 344037</p>
            <img src={Carta} alt="Адрес офиса" />

        </div>
    );
}