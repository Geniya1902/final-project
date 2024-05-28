import Review1 from '../../../media/review1.png'
import Review2 from '../../../media/review2.jpg'
import Review3 from '../../../media/review3.png'
import Review4 from '../../../media/review4.png'
import Review5 from '../../../media/review5.png'
import Review6 from '../../../media/review6.png'
import './reviews.css'

export default function Reviews() {
    return (
        <div className="reviews">
            <h1 className="rew">Отзывы наших благодарных клиетов</h1>
            <div className="row">
                <div className="column">
                    <img src={Review1} alt="Отзыв клиента №1" />
                    <br />
                    <img src={Review2} alt="Отзыв клиента №2" />
                    <br />
                    <img src={Review4} alt="Отзыв клиента №4" />
                    <br />
                    <img src={Review6} alt="Отзыв клиента №6" />
                </div>
                <div>
                    <img src={Review3} alt="Отзыв клиента №3" />
                    <br />
                    <img src={Review5} alt="Отзыв клиента №5" />
                </div>
            </div>
            <p className="text">Больше отзывов Вы можете посмотреть по ссылке в группе https://t.me/+e4aZ2vK3K8RiNmUy</p>
            <br />
            <p className="text">А также вы можете присоединиться к нашей группе в Telegram, гда мы рассказываем
            много нового и интересного https://t.me/+fQBcho60fc8xMGMy</p>
        </div>
    );
}