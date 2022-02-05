import "./Card.css"
import Hiver from "../public/images/Hiver.jpg"
import Automne from "../public/images/Automne.jpg"
import Ete from "../public/images/Ete.jpg"
import Printemps from "../public/images/Printemps.jpg"
export function Card({name, depuis}){
    const getImage = (name) => {
        switch(name){
            case "Hiver":
                return Hiver
            case "Automne":
                return Automne
            case "Ete":
                return Ete
            case "Printemps":
                return Printemps
        }
    }
    return <div className="card">
        <div className="card__header">
            <img src={getImage(name)} alt="card__image" className="card__image"
                 width="600" />
        </div>
        <div className="card__body">
            <span className="tag tag-blue">{name}</span>
            <h4 className={'text-center'}>{depuis}</h4>
        </div>
    </div>
}