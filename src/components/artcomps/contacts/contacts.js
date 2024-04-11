import Carta from "../../../media/karta.png"
export default function Contacts() {
    return (
        <div className="contacts">
            <p>Наши контакты</p>
            <table border="black solid 1px">
                <tr>
                    <td></td>
                    <td>Елена Мозговая</td>
                    <td>Владислав Гомон</td>
                </tr>
                <tr>
                    <td>Телефон</td>
                    <td>+7 (904) 441-87-09</td>
                    <td>+7 (928) 127-15-55</td>
                </tr>
                <tr>
                    <td>Telegram</td>
                    <td>@First_2610</td>
                    <td>@Vladislav5142</td>
                </tr>
                <tr>
                    <td>E-mail</td>
                    <td>allegretta0207@gmail.com</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Другие варианты связи</td>
                    <td>https://taplink.cc/elenamozgovaya</td>
                    <td></td>
                </tr>
            </table>
            <p>Мы в любое время готовы ответить на все интересующие Вас вопросы.</p>
            <br />
            <p>Мы принимаем по адресу: г.Ростов-на-Дону, пл.Толстого д.8 каб.230, 344037</p>
            <img src={Carta} alt="Адрес офиса" />

        </div>
    );
}