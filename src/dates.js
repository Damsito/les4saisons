const debutHiver = new Date(2021, 11, 21);
const finHiver = new Date(2022, 2, 19);
const debutPrintemps = new Date(2022, 2, 20);
const finPrintemps = new Date(2022, 5, 20);
const debutEte = new Date(2022, 5, 21);
const finEte = new Date(2022, 8, 22);
const debutAutomne = new Date(2022, 8, 23);
const finAutomne = new Date(2022, 11, 20);

export const dates = [
    {season: "Printemps", debut: debutPrintemps, fin: finPrintemps},
    {season: "Ete", debut: debutEte, fin: finEte},
    {season: "Automne", debut: debutAutomne, fin: finAutomne},
    {season: "Hiver", debut: debutHiver, fin: finHiver}
]