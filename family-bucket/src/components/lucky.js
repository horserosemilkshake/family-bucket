import React, { useEffect } from "react";
import { frontEndBaseUrl } from "./Modal";

export default function Lucky(props) {
    useEffect(() => {
        const res = '' + (Math.floor(Math.random() * 9) + 1);
        window.location.replace(frontEndBaseUrl + res);
    });

    return (
        <div></div>
    )
}