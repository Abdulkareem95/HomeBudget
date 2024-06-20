import React from "react";
import { fetchData } from "../Helper";
import { Outlet } from "react-router-dom";
import wave from "../assests/wave.svg";
import Nav from "../components/Nav";

import { useLoaderData } from "react-router-dom";

export const mainLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
      <main>
        <Nav userName={userName} />
        <Outlet />
        <img src={wave} alt=""></img>
      </main>
    </div>
  );
};

export default Main;
