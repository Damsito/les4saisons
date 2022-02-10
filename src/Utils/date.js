import {differenceInDays, formatDistanceToNow, getMonth, isWithinInterval} from "date-fns";
import fr from "date-fns/locale/fr";
import {dates} from "../dates";

function getDate(date, year = null){
    return new Date(year ? year : (new Date()).getFullYear(), date.month, date.day)
}
export function getDureeNextSeason(dateSaisonNext){
    return differenceInDays(
        getDate(dateSaisonNext.debut),
        getDate(dateSaisonNext.fin)
    )
}
export function getDepuisDate(dateSaisonActuel, dateSaisonNext){
    const depuisCurrent = formatDistanceToNowCustom(dateSaisonActuel)
    const depuisNext = formatDistanceToNowCustom(dateSaisonNext)
    return {depuisCurrent, depuisNext}
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