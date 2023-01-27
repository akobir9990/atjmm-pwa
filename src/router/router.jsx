import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/homePage";
import Author from "../pages/author";
import About from "../pages/about";
import Laboratory from "../pages/laboratory";
import Presentation from "../pages/presentation";
import Practice from "../pages/practice";
import Videos from "../pages/videos";
import Tutorial from "../pages/tutorial";
import TestAPage from "../pages/tests";
import Error from "../pages/errorPage";
import One from "../pages/presentation/pages/one";
import Two from "../pages/presentation/pages/two/index";
import Three from "../pages/presentation/pages/three";
import Four from "../pages/presentation/pages/four";
import Five from "../pages/presentation/pages/five";
import Six from "../pages/presentation/pages/six";
import Seven from "../pages/presentation/pages/seven";
import Eight from "../pages/presentation/pages/eight";
import Nine from "../pages/presentation/pages/nine";
import Ten from "../pages/presentation/pages/ten";

import "./const";
import {
  ABOUT_PAGE,
  AUTHOR_PAGE,
  HOME_PAGE,
  LABORATORY_PAGE,
  PRACTICE_PAGE,
  PRESENTATION_PAGE,
  TEST_PAGE,
  TUTORIAL_PAGE,
  VIDEOS_PAGE,
} from "./const";

function router() {
  return (
    <div>
      <Routes>
        <Route path={HOME_PAGE} element={<HomePage />} />
        <Route path={TUTORIAL_PAGE} element={<Tutorial />} />
        <Route path={AUTHOR_PAGE} element={<Author />} />
        <Route path={ABOUT_PAGE} element={<About />} />
        <Route path={LABORATORY_PAGE} element={<Laboratory />} />
        <Route path={VIDEOS_PAGE} element={<Videos />} />
        <Route path={PRESENTATION_PAGE}>
          <Route path="" element={<Presentation />} />
          <Route path="1" element={<One />} />
          <Route path="2" element={<Two />} />
          <Route path="3" element={<Three />} />
          <Route path="4" element={<Four />} />
          <Route path="5" element={<Five />} />
          <Route path="6" element={<Six />} />
          <Route path="7" element={<Seven />} />
          <Route path="8" element={<Eight />} />
          <Route path="9" element={<Nine />} />
          <Route path="10" element={<Ten />} />
        </Route>

        <Route path={PRACTICE_PAGE} element={<Practice />} />
        <Route path={TEST_PAGE} element={<TestAPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default router;
