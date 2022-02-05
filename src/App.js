
import './App.css'
import {Card} from "./Card";

import getCurrentSeason from "./getCurrentSeason";
import getNextSeason from "./getNextSeason";
import Modal from "./Modal";
import {Button} from "./Button";
import {useState} from "react";
export function App() {
    let {dateSaisonActuel, depuisCurrent} = getCurrentSeason()
    let {dateSaisonSuivante, depuisNext} = getNextSeason()
    const [open, setOpen] = useState(false)
    const onClick = () => setOpen(!open)
    return <div className={'App'}>
        <Card name={dateSaisonActuel.name} depuis={depuisCurrent} />
        <Modal open={open} setOpen={setOpen}><Card name={dateSaisonSuivante.name} depuis={depuisNext} />
        </Modal>
        <div className={'Button'}>
            <Button onClick={onClick}>Afficher la saison suivante</Button>
        </div>
    </div>
}