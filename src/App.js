import "./App.css";
import Modal from "./Modal";
import { Button } from "./Button";
import { lazy, useState, Suspense } from "react";
import Season from "./Season";
const NextSeason = lazy(() => import("./NextSeason"));

export function App() {
  const [open, setOpen] = useState(false);
  const onClick = () => setOpen(!open);

  return (
    <div className={"App"}>
      <Season />
      <Modal open={open} setOpen={setOpen}>
        <Suspense fallback={<div>Chargement...</div>}>
          <NextSeason />
        </Suspense>
      </Modal>
      <div className="Button">
        <Button onClick={onClick}>Afficher la saison suivante</Button>
      </div>
    </div>
  );
}
