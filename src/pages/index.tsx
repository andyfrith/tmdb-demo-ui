import React, { Fragment } from "react";
import { Router } from "@reach/router";
import { Movies } from "./movies/page";
import { Footer, PageContainer } from "../components";

export default function Pages() {
  return (
    <Fragment>
      <PageContainer>
        <Router primary={false} component={Fragment}>
          <Movies path="/" />
        </Router>
      </PageContainer>
      <Footer />
    </Fragment>
  );
}
