import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Container } from "react-bootstrap";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { RecoilRoot } from 'recoil';

import Header from "./Header";
import HomePage from "./HomePage";

const ProductPage = React.lazy(() => import('product/ProductPage'));
const PaymentPage = React.lazy(() => import('payment/PaymentPage'));

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Container fluid>
          <Header />
          <Container>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="product" element={
                <Suspense fallback={<h1>Loading...</h1>}>
                  <ProductPage />
                </Suspense>
              } />
              <Route path="payment" element={
                <Suspense fallback={<h1>Loading...</h1>}>
                  <PaymentPage />
                </Suspense>
              } />
            </Routes>
          </Container>
        </Container>
      </BrowserRouter >
    </RecoilRoot>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));
