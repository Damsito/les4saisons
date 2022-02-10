import {dates} from "./dates";
import {differenceInDays, formatDistanceToNow, isWithinInterval} from "date-fns";
import fr from "date-fns/locale/fr";

export default function getCurrentSeason(){
    let now = new Date()
    let dateSaisonActuel = getSeason(now)
    let nextSeason = getNextSeason(dateSaisonActuel.season)
    let dateSaisonNext = dates.filter(d => d.season === nextSeason)[0]

    const depuisCurrent = formatDistanceToNow(dateSaisonActuel.debut,
        {
            locale: fr,
            addSuffix: true
        }
    )
    const depuisNext = formatDistanceToNow(dateSaisonNext.debut,
        {
            locale: fr,
            addSuffix: true
        }
    )
    const dureeNext =  differenceInDays(
        dateSaisonNext.debut,
        dateSaisonNext.fin
    )
    return {dateSaisonActuel, depuisCurrent, dateSaisonNext, depuisNext, dureeNext}
}
function getSeason(date) {
    return dates.filter(d => {
        if(isWithinInterval(date, {
            start: d.debut,
            end: d.fin
        })){
            return d
        }
    })[0]
}
function getNextSeason(season) {
    switch (season){
        case "Hiver":
            return "Printemps"
        case "Printemps":
            return "Ete"
        case "Ete":
            return "Automne"
        case "Automne":
            return "Hiver"
    }
}