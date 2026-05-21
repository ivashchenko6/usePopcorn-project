import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./components/StarRating/StarRating";
// import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <StarRating
            maxRating={5}
            messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
        />
        <StarRating size={24} color="red" className="test" />
    </React.StrictMode>,
);
