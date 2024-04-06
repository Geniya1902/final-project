import "./main.css"
import {Section} from "./maincomps/section/section"
import {Article} from "./maincomps/article/article"
import {Aside} from "./maincomps/aside/aside"
export default function Main(){
    return(
        <div className="main">
            <Section />
            <Article />
            <Aside />
        </div>
    )
}