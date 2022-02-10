import './App.css'
import {Card} from "./Card";
import Modal from "./Modal";
import {Button} from "./Button";
import {useState} from "react";
import getSeason from "./getSeason";

export function App() {
    let  {dateSaisonActuel, depuisCurrent, dateSaisonNext, depuisNext, dureeNext} = getSeason()
    const [open, setOpen] = useState(false)
    const onClick = () => setOpen(!open)
    return <div className={'App'}>
        <Card name={dateSaisonActuel.season} depuis={depuisCurrent} />
        <Modal open={open} setOpen={setOpen}>
            <Card name={dateSaisonNext.season} depuis={depuisNext} duree={dureeNext} />
        </Modal>
        <div className='Button'>
            <Button onClick={onClick}>Afficher la saison suivante</Button>
        </div>
    </div>
}