import {getImage} from "./Utils/date";
import './Card.css'
import {getSeasonActuel} from "./getSeason";
function Season(){
    const {dateSaisonActuel, depuisCurrent} = getSeasonActuel()
    return <div className="card">
        <div className="card__header">
            <img src={getImage(dateSaisonActuel.season)} alt="card__image" className="card__image"
                 width="600" />
        </div>
        <div className="card__body">
            <span className="tag tag-blue">{dateSaisonActuel.season}</span>
            <h4 className={'text-center'}>{depuisCurrent}</h4>
        </div>
    </div>
}

export default Season;