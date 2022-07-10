import React, { useState, useEffect } from "react";
import { loadById } from "./Modal";
import Collapsedpanel from "./Collapsedpanel";

export default function Detailedpanel(){
    const [item, setItem] = useState();

    useEffect(() => {
        async function getItem() {
            let itemsFromBackEnd = await Promise.all([loadById(window.location.pathname)]);
            setItem(itemsFromBackEnd[0]);
            console.log(item);
        }
        getItem();
        /*<div className="rounded-xl shadow-xl bg-navbar-white flex justify-center items-center h-screen">
            <img src={item.thumbnail_link} className="rounded-t-xl object-cover h-64 w-64"></img>
            <p>{item.name}</p>
        </div> 
       */
    }, []);

    if (item === []) {
        return <p>Loading...</p>;
    }

    return (
        <div className="rounded-xl shadow-xl bg-navbar-white flex justify-center items-center h-screen">
        </div> 
    )
}