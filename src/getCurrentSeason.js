import {dates} from "./dates";
import {differenceInMonths, formatDistanceToNow} from "date-fns";
import fr from "date-fns/locale/fr";

export default function getCurrentSeason(){
    let lastResultat = null
    let dateSaisonActuel = null
    let now = new Date()
    dates.map(d => {
        let result = differenceInMonths(now, d.value)
        if(!result || result > lastResultat){
            lastResultat = result
            dateSaisonActuel = d
        }
    })
    const depuisCurrent = formatDistanceToNow(dateSaisonActuel.value,
        {
            locale: fr,
            addSuffix: true
        }
    )
    return {dateSaisonActuel, depuisCurrent}
}