import './news.css'
import Three from '../../../media/3000.jpg'
import Ten from '../../../media/10000.jpg'
import TwentyFive from '../../../media/25000.jpg'
import Fifty from '../../../media/50000.jpg'
import OneHundred from '../../../media/100000.jpg'
import TwoHundred from '../../../media/200000.jpg'
import ThreeHundred from '../../../media/300000.jpg'

export default function News() {
    return (
        <div className="news">
            <h1 className="zagl">Новости</h1>
            <h1>Марафон "Знай наших"</h1>
            <h6>от 20.01.2024г.</h6>
            <p className="marafon">С сегоднявнего дня мы запускаем Марафон "Знай наших" с экслюзивными подарками лично от меня</p>
            <ol>
                <li>Чтобы участвовать в марафоне, необходимо
                    подать <a href="https://docs.google.com/forms/d/e/1FAIpQLScLztU7bpj_VPeed7QFTWyPZFAzIhGOOFJx2SjUbXKNUINoCA/viewform" target="_blank">
                        ЗАЯВКУ</a> (https://docs.google.com/forms/d/e/1FAIpQLScLztU7bpj_VPeed7QFTWyPZFAzIhGOOFJx2SjUbXKNUINoCA/viewform)
                    на участие в марафоне. С этого момента человек добавляется в группу Марафона и начинается отсчет 365 дней.</li>
                <li>Учет депозитов.
                    В учет принимаются ТОЛЬКО личные продажи с первой линии по направлению Prime в части SGCT.
                    <p>То есть, если у клиента общий депозит составляет 10 000 $ = 2000 SWCT = 8000 SGCT в зачет идёт 8000 SGCT
                    Если у клиента депозит полностью из SGCT (10000 SGCT), в зачёт идет 70% (7000 SGCT)</p>
                    Чтобы зафиксировать личную продажу, необходимо <a href="https://forms.gle/yRhoQb1heA1aY42K9" target="_blank">ЗАРЕ
                        ГИСТИРОВАТЬ ДЕПОЗИТ</a> (https://forms.gle/yRhoQb1heA1aY42K9),
                    прислать в тему: "Сдача отчета по дням" видео с депозитом</li>
                <li>Если партнер, в течение марафона достигает уровня 14%, то он продолжает до конца окончания своего
                    периода участия быть в марафоне,  но людям его структуры, которые тоже будут в марафоне, озвученные мною
                    подарки будут за счет этого 14%-ка.</li>
                <li>В случае, если партнёр, достигший уровня 14% в марафоне, отказывается поощерять свою структуру,
                    он выбывает из марафона, а  его люди продолжают быть участниками на общих основаниях и возможностях. </li>
            </ol>
            <p>ПЛАНЕРКИ</p>
            <p>ПН/СР с 11:00 до 12:00 и ВТ/ЧТ с 19:00 до 20:00</p>
            <p>На них решаем все текущие вопросы. Разрабатываем стратегии, проверяем работу каждого участника марафона.</p>
            <br />
            <h1>Эксклюзивные подарки для участников марафона</h1>
            <h6>от 21.01.2024</h6>
            <p className="plushki">ПЛЮШКИ вы можете получить только в течение 365 дней. Все, что успеете сделать- ваше.</p>
            <table>
                <tr>
                    <td><img src={Three} className="three" alt="Подарок от 3000 $"/></td>
                    <td><img src={Ten} className="ten" alt="Подарок от 10000 $"/></td>
                    <td><img src={TwentyFive} className="twentyFive" alt="Подарок от 25000 $"/></td>
                    <td><img src={Fifty} className="fifty" alt="Подарок от 50000 $"/></td>
                </tr>
                <tr>
                    <td><img src={OneHundred} className="oneHundred" alt="Подарок от 100000 $"/></td>
                    <td><img src={TwoHundred} className="twoHundred" alt="Подарок от 200000 $"/></td>
                    <td><img src={ThreeHundred} className="threeHundred" alt="Подарок от 300000 $"/></td>
                </tr>
            </table>
            <br />
            <h1>Первые призеры!</h1>
            <h6>от 22.05.2024</h6>
            <h2>У нас есть первые призеры моего марафона "ЗНАЙ НАШИХ!"</h2>
            <p className="prise">Это Владимир Бацемакин и Виктор Киреев. По итогам Первого Квартала Володя получил один подарок, Виктор
                заработал сразу два подарка!</p>
            <p>В марафоне может участвовать КАЖДЫЙ желающий, независимо от опыта, возраста и карьерного уровня.  В равных условиях ВСЕ!</p>
            <p>Марафон длится ровно год с момента вступления на него участника. За этот период у вас есть возможность,
                помимо тех бонусов, что дает Компания, от меня дополнительно получить следующие подарки:</p>
            <ol className="list">
                <li>Футболка с Личным Кодом Успеха</li>
                <li>Спа-процедура</li>
                <li>Курс массажа</li>
                <li>Поездка в горы, термы, тренинг и т.д.</li>
                <li>Ноутбук, планшет, телефон на выбор</li>
                <li>Золотая именная подвеска</li>
                <li>Круиз на лайнере на двоих</li>
            </ol>
            <p>Все эти подарки можно получить в течение 365 дней с момента вступления в марафон. Для этого необходимо:</p>
            <ul>
                <li>иметь на счете min 100$;</li>
                <li>хотеть получить все эти подарки😁;</li>
                <li>написать мне в личку в Телеграме <a href="https://t.me/First_2610" target="_blank">@first_2610</a> "ХОЧУ
                    НА МАРАФОН"</li>
            </ul>
        </div>
    );
}