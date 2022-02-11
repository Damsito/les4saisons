const debutHiver = { month: 11, day: 21 };
const finHiver = { month: 2, day: 19 };
const debutPrintemps = { month: 2, day: 20 };
const finPrintemps = { month: 5, day: 20 };
const debutEte = { month: 5, day: 21 };
const finEte = { month: 8, day: 22 };
const debutAutomne = { month: 8, day: 23 };
const finAutomne = { month: 11, day: 20 };

export const dates = [
  {
    season: "Printemps",
    debut: debutPrintemps,
    fin: finPrintemps,
    next: "Ete",
  },
  { season: "Ete", debut: debutEte, fin: finEte, next: "Automne" },
  { season: "Automne", debut: debutAutomne, fin: finAutomne, next: "Hiver" },
  { season: "Hiver", debut: debutHiver, fin: finHiver, next: "Printemps" },
];
