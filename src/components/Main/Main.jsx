import { useState } from "react";
import ListBox from "../ListBox/ListBox";
import WatchedBox from "../WatchedBox/WatchedBox";

const Main = ({ tempMovieData, tempWatchedData, average, children }) => {
    return <main className="main">{children}</main>;
};

export default Main;
