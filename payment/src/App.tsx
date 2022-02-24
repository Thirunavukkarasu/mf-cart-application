import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";

import PaymentPage from "./PaymentPage";

const App = () => (
  <RecoilRoot>
    <PaymentPage />
  </RecoilRoot>
);
ReactDOM.render(<App />, document.getElementById("app"));
