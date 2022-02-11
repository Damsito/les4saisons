import {
  DateUtils
} from "./Utils/DateUtils";

export function getSeasonActuel(dateProps) {
  let date = new DateUtils(dateProps);
  let { dateSaisonActuel } = date.getSeasonDateAndNextSeasonDate();
  const { depuisCurrent } = date.getDepuisCurrent(dateSaisonActuel);
  return { dateSaisonActuel, depuisCurrent };
}
export function getSeasonSuivante(dateProps) {
  let date = new DateUtils(dateProps);
  let { dateSaisonNext } = date.getSeasonDateAndNextSeasonDate();
  const { depuisNext } = date.getDepuisSuivante(dateSaisonNext);
  const dureeNext = date.getDureeNextSeason(dateSaisonNext);
  return { dateSaisonNext, depuisNext, dureeNext };
}
