import {differenceInDays, formatDistanceToNow, getMonth, isWithinInterval} from "date-fns";
import fr from "date-fns/locale/fr";
import {dates} from "../dates";
import Hiver from "../../public/images/Hiver.jpg";
import Automne from "../../public/images/Automne.jpg";
import Ete from "../../public/images/Ete.jpg";
import Printemps from "../../public/images/Printemps.jpg";

function getDate(date, year = null){
    return new Date(year ? year : (new Date()).getFullYear(), date.month, date.day)
}
export function getDureeNextSeason(dateSaisonNext){
    return differenceInDays(
        getDate(dateSaisonNext.debut),
        getDate(dateSaisonNext.fin)
    )
}
export function getDepuisCurrent(dateSaisonActuel){
    const depuisCurrent = formatDistanceToNowCustom(dateSaisonActuel)
    return {depuisCurrent}
}
export function getDepuisSuivante( dateSaisonNext){
    const depuisNext = formatDistanceToNowCustom(dateSaisonNext)
    return { depuisNext}
}
export function formatDistanceToNowCustom(date){
    let newDate = getDate(date.debut)
    if(date.season === "Hiver"){
        newDate = getDate(date.debut, (new Date()).getFullYear() - 1)
    }
    return formatDistanceToNow(newDate,
        {
            locale: fr,
            addSuffix: true
        }
    )
}
export function getSeasonDateAndNextSeasonDate() {
    let dateInterval = new Date()
    let dateSaisonActuel = dates.filter(d => {
        let dateDebut = getDate(d.debut)
        let dateFin = getDate(d.fin)
        if(d.season === "Hiver" && getMonth(dateInterval) !== 11){
            dateDebut = getDate(d.debut, (new Date()).getFullYear() - 1)
        }
        if(d.season === "Hiver" && getMonth(dateInterval) === 11){
            dateFin = getDate(d.fin, (new Date()).getFullYear() + 1)
        }
        if(isWithinInterval(dateInterval, {
            start: dateDebut,
            end: dateFin
        })){
            return d
        }
    })[0]
    let dateSaisonNext = dates.filter(d => {
        return d.season === dateSaisonActuel.next
    })[0]
    return {dateSaisonActuel, dateSaisonNext}
}

export const getImage = (name) => {
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