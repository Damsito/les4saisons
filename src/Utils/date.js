import {
  differenceInDays,
  formatDistance,
  getMonth,
  isWithinInterval,
} from "date-fns";
import fr from "date-fns/locale/fr";
import { dates } from "../dates";
import Hiver from "../images/Hiver.jpg";
import Automne from "../images/Automne.jpg";
import Ete from "../images/Ete.jpg";
import Printemps from "../images/Printemps.jpg";

let dateInterval = new Date();
console.log(dateInterval);
function getDate(date, year = null) {
  return new Date(year ? year : new Date().getFullYear(), date.month, date.day);
}
function checkIfHiverInDecember(dateSaisonNext) {
  if (dateSaisonNext.season === "Hiver" && getMonth(dateInterval) === 11) {
    return getDate(dateSaisonNext.fin, new Date().getFullYear() + 1);
  }
  return null;
}
function checkIfHiverNotInDecember(dateSaisonNext) {
  if (dateSaisonNext.season === "Hiver" && getMonth(dateInterval) !== 11) {
    return getDate(dateSaisonNext.debut, new Date().getFullYear() - 1);
  }
  return null;
}
export function getDureeNextSeason(dateSaisonNext) {
  let dateDebut = checkIfHiverNotInDecember(dateSaisonNext);
  if (!dateDebut) {
    dateDebut = getDate(dateSaisonNext.debut);
  }
  let dateFin = checkIfHiverInDecember(dateSaisonNext);
  if (!dateFin) {
    dateFin = getDate(dateSaisonNext.fin);
  }
  return differenceInDays(dateDebut, dateFin);
}
export function getDepuisCurrent(dateSaisonActuel) {
  const depuisCurrent = formatDistanceToNowCustom(dateSaisonActuel);
  return { depuisCurrent };
}
export function getDepuisSuivante(dateSaisonNext) {
  const depuisNext = formatDistanceToNowCustom(dateSaisonNext);
  return { depuisNext };
}
export function formatDistanceToNowCustom(date) {
  let newDate = checkIfHiverNotInDecember(date);
  if (!newDate) {
    newDate = getDate(date.debut);
  }
  return formatDistance(newDate, dateInterval, {
    locale: fr,
    addSuffix: true,
  });
}
export function getSeasonDateAndNextSeasonDate() {
  let dateSaisonActuel = dates.filter((d) => {
    let dateDebut = checkIfHiverNotInDecember(d);
    if (!dateDebut) {
      dateDebut = getDate(d.debut);
    }
    let dateFin = checkIfHiverInDecember(d);
    if (!dateFin) {
      dateFin = getDate(d.fin);
    }
    return isWithinInterval(dateInterval, {
      start: dateDebut,
      end: dateFin,
    });
  })[0];
  let dateSaisonNext = dates.filter((d) => {
    return d.season === dateSaisonActuel.next;
  })[0];
  return { dateSaisonActuel, dateSaisonNext };
}

export const getImage = (name) => {
  switch (name) {
    case "Hiver":
      return Hiver;
    case "Automne":
      return Automne;
    case "Ete":
      return Ete;
    case "Printemps":
      return Printemps;
    default:
      return Hiver;
  }
};
