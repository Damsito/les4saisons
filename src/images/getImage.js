import Hiver from "./Hiver.jpg";
import Automne from "./Automne.jpg";
import Ete from "./Ete.jpg";
import Printemps from "./Printemps.jpg";

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
