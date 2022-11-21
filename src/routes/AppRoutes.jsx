import React from "react";
import { Routes, Route, Link, Outlet, Navigate } from "react-router-dom";

import Videos from "../videos/Videos";
import VideosForm from "../videos/VideosForm";
import VideoShow from "../videos/VideoShow";
import Profile from "../users/Profile";
import SignIn from "../users/SignIn";
import SignUp from "../users/SignUp";
import { useSelector } from "react-redux";
import HomePage from "../Home";

let NotImplemented = () => {
  return (
    <>
      <Link to="/videos">Ir a videos</Link>
      <h1>Esta página aún no está lista</h1>
    </>
  );
};

let Error404 = () => {
  return (
    <>
      <Link to="/">Regresar al inicio</Link>
      <h1>Esta página no existe - 404</h1>
    </>
  );
};

let AppRoutes = (props) => {
  let user = useSelector((state) => state.user.user);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/users"
        element={user ? <Navigate to="/videos" /> : <Outlet />}
      >
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<SignIn />} />
      </Route>

      <Route
        path=""
        element={user ? <Outlet /> : <Navigate to="/users/login" />}
      >
        <Route path="users/profile" element={<Profile />} />
        <Route path="users/:id/videos" element={<NotImplemented />} />

        <Route path="/videos">
          <Route path="/" element={<Videos />} />
          <Route path=":id" element={<VideoShow />} />
          <Route path="new" element={<VideosForm />} />
        </Route>
      </Route>

      <Route path="*" element={<Error404 />}></Route>
    </Routes>
  );
};

export default AppRoutes;
