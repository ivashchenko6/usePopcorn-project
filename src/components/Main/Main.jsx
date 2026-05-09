import { useState } from "react";
import ListBox from "../Box/Box";
import WatchedBox from "../WatchedBox/WatchedBox";

const Main = ({ children }) => {
    return <main className="main">{children}</main>;
};

export default Main;
