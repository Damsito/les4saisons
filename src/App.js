import "./App.css";
import React from "react";

import Modal from "./Modal";
import { lazy, Suspense } from "react";
import Season from "./Season";
const NextSeason = lazy(() => import("./NextSeason"));

export function App() {
  let dateProps = new Date();
  return (
    <div className={"App"}>
        <div data-testid="content">
          <Season dateProps={dateProps} />
        </div>
        <div data-testid="actions">
          <Modal>
            <Suspense fallback={<div>Chargement...</div>}>
              <NextSeason dateProps={dateProps} />
            </Suspense>
          </Modal>
        </div>
    </div>
  );
}
