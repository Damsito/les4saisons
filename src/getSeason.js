import {
    getDepuisCurrent,
    getDepuisSuivante,
    getDureeNextSeason,
    getSeasonDateAndNextSeasonDate
} from "./Utils/date";

export function getSeasonActuel(){
    let {dateSaisonActuel} = getSeasonDateAndNextSeasonDate()
    const {depuisCurrent} = getDepuisCurrent(dateSaisonActuel)
    return {dateSaisonActuel, depuisCurrent}
}
export function getSeasonSuivante(){
    let {dateSaisonNext} = getSeasonDateAndNextSeasonDate()
    const {depuisNext} = getDepuisSuivante(dateSaisonNext)
    const dureeNext = getDureeNextSeason(dateSaisonNext)
    return { dateSaisonNext, depuisNext, dureeNext}
}
