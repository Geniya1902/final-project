import "./article.css"
import MainPage from "../../../artcomps/mainpage/mainpage"
import About from "../../../artcomps/about/about"
import News from "../../../artcomps/news/news"
import Note from "../../../artcomps/note/note"
import Contacts from "../../../artcomps/contacts/contacts"
import Reviews from "../../../artcomps/reviews/reviews"
import Er404 from "../../../artcomps/er404/er404"
import {Routes,Route} from "react-router-dom"

export function Article(){
    return(
        <div className="article">
            <Routes>
                <Route path="/about" element={<About></About>} />
                <Route path="/news" element={<News></News>} />
                <Route path="/note" element={<Note></Note>} />
                <Route path="/contacts" element={<Contacts></Contacts>} />
                <Route path="/reviews" element={<Reviews></Reviews>} />
                <Route path="*" element={<MainPage></MainPage>} />
                <Route path="*" element={<Er404></Er404>} />
            </Routes>
        </div>
    );
}