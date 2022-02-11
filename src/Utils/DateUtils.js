import {
  differenceInDays,
  formatDistance,
  getMonth,
  isWithinInterval,
} from "date-fns";
import fr from "date-fns/locale/fr";
import { dates } from "../dates";

export class DateUtils {
  constructor(dateInterval) {
    this.dateInterval = dateInterval;
  }
  getDate(date, year = null) {
    return new Date(
      year ? year : new Date().getFullYear(),
      date.month,
      date.day
    );
  }
  checkIfHiverInDecember(dateSaisonNext) {
    if (
      dateSaisonNext.season === "Hiver" &&
      getMonth(this.dateInterval) === 11
    ) {
      return this.getDate(dateSaisonNext.fin, new Date().getFullYear() + 1);
    }
    return null;
  }
  checkIfHiverNotInDecember(dateSaisonNext) {
    if (
      dateSaisonNext.season === "Hiver" &&
      getMonth(this.dateInterval) !== 11
    ) {
      return this.getDate(dateSaisonNext.debut, new Date().getFullYear() - 1);
    }
    return null;
  }
  getDureeNextSeason(dateSaisonNext) {
    let dateDebut = this.checkIfHiverNotInDecember(dateSaisonNext);
    if (!dateDebut) {
      dateDebut = this.getDate(dateSaisonNext.debut);
    }
    let dateFin = this.checkIfHiverInDecember(dateSaisonNext);
    if (!dateFin) {
      dateFin = this.getDate(dateSaisonNext.fin);
    }
    return differenceInDays(dateDebut, dateFin);
  }
  getDepuisCurrent(dateSaisonActuel) {
    const depuisCurrent = this.formatDistanceToNowCustom(dateSaisonActuel);
    return { depuisCurrent };
  }
  getDepuisSuivante(dateSaisonNext) {
    const depuisNext = this.formatDistanceToNowCustom(dateSaisonNext);
    return { depuisNext };
  }
  formatDistanceToNowCustom(date) {
    let newDate = this.checkIfHiverNotInDecember(date);
    if (!newDate) {
      newDate = this.getDate(date.debut);
    }
    return formatDistance(newDate, this.dateInterval, {
      locale: fr,
      addSuffix: true,
    });
  }
  getSeasonDateAndNextSeasonDate() {
    let dateSaisonActuel = dates.filter((d) => {
      let dateDebut = this.checkIfHiverNotInDecember(d);
      if (!dateDebut) {
        dateDebut = this.getDate(d.debut);
      }
      let dateFin = this.checkIfHiverInDecember(d);
      if (!dateFin) {
        dateFin = this.getDate(d.fin);
      }
      return isWithinInterval(this.dateInterval, {
        start: dateDebut,
        end: dateFin,
      });
    })[0];
    let dateSaisonNext = dates.filter((d) => {
      return d.season === dateSaisonActuel.next;
    })[0];
    return { dateSaisonActuel, dateSaisonNext };
  }
}
