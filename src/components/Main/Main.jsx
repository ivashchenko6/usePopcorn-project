import { useState } from "react";
import ListBox from "../ListBox/ListBox";
import WatchedBox from "../WatchedBox/WatchedBox";

const Main = ({ tempMovieData, tempWatchedData, average }) => {
    return (
        <main className="main">
            <ListBox tempMovieData={tempMovieData} />

            <WatchedBox tempWatchedData={tempWatchedData} average={average} />
        </main>
    );
};

export default Main;
