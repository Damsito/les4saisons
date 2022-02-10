import './App.css'
import {Card} from "./Card";
import getCurrentAndNextSeason from "./getCurrentAndNextSeason";
import Modal from "./Modal";
import {Button} from "./Button";
import {useState} from "react";

export function App() {
    let {dateSaisonSuivante, depuisNext, duree, dateSaisonActuel, depuisCurrent} = getCurrentAndNextSeason()
    const [open, setOpen] = useState(false)
    const onClick = () => setOpen(!open)
    return <div className={'App'}>
        <Card name={dateSaisonActuel.name} depuis={depuisCurrent} />
        <Modal open={open} setOpen={setOpen}>
            <Card name={dateSaisonSuivante.name} depuis={depuisNext} duree={duree} />
        </Modal>
        <div className='Button'>
            <Button onClick={onClick}>Afficher la saison suivante</Button>
        </div>
    </div>
}