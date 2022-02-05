import {dates} from "./dates";
import {compareAsc, differenceInCalendarDays, formatDistanceToNow} from "date-fns";
import fr from "date-fns/locale/fr";
import getCurrentSeason from "./getCurrentSeason";

export default function getNextSeason(){
    let {dateSaisonActuel} = getCurrentSeason()
    let datesValue = dates.map(d => { return d.value})
    let sortedDates = datesValue.sort(compareAsc)

    let indexNextDate = sortedDates.indexOf(dateSaisonActuel.value)

    let next = sortedDates[indexNextDate + 1]
    let nextNext = sortedDates[indexNextDate + 2]
    const depuisNext = formatDistanceToNow(
        next,
        {
            locale: fr,
            addSuffix: true
        }
    )
    let dateSaisonSuivante = dates.filter(d => {
        if(d.value === next){
            return d
        }
    })[0]
    let duree = differenceInCalendarDays(
        next,
        nextNext
    )
    return {dateSaisonSuivante, depuisNext, duree}
}