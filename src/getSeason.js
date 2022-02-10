import {getDepuisDate, getDureeNextSeason, getSeasonDateAndNextSeasonDate} from "./Utils/date";

export default function getSeason(){
    let {dateSaisonActuel, dateSaisonNext} = getSeasonDateAndNextSeasonDate()

    const {depuisCurrent, depuisNext} = getDepuisDate(dateSaisonActuel, dateSaisonNext)

    const dureeNext = getDureeNextSeason(dateSaisonNext)

    return {dateSaisonActuel, depuisCurrent, dateSaisonNext, depuisNext, dureeNext}
}
