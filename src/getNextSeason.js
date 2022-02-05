import {dates} from "./dates";
import {compareAsc, differenceInMonths, formatDistance, formatDistanceToNow} from "date-fns";
import fr from "date-fns/locale/fr";

export default function getNextSeason(){
    let resulat = null
    let goodDate = null
    let now = new Date()
    let datesValue = dates.map(d => { return d.value})
    let sortedDates = datesValue.sort(compareAsc)
    dates.map(d => {
        let result = differenceInMonths(now, d.value)
        if(!result || result > resulat){
            resulat = result
            goodDate = d
        }
    })
    let indexNextDate = sortedDates.indexOf(goodDate.value)

    let next = sortedDates[indexNextDate + 1]

    const depuisNext = formatDistanceToNow(
        next,
        { locale: fr,
            addSuffix: true }
    )
    let dateSaisonSuivante = dates.filter(d => {
        if(d.value === next){
            return d
        }
    })[0]
    return {dateSaisonSuivante, depuisNext}
}