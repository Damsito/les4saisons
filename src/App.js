import './App.css'
import Modal from "./Modal";
import {Button} from "./Button";
import {useState} from "react";
import Season from "./Season";
import NextSeason from "./NextSeason";

import React from "react";
export function App() {
    const [open, setOpen] = useState(false)
    const onClick = () => setOpen(!open)
    return <div className={'App'}>
        <Season />
        <Modal open={open} setOpen={setOpen}>
            <NextSeason />
        </Modal>
        <div className='Button'>
            <Button onClick={onClick}>Afficher la saison suivante</Button>
        </div>
    </div>
}