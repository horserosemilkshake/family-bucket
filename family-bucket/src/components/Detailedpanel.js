import React, { useState, useEffect } from "react";
import { loadById } from "./Modal";
//import Select from "react-select";

export default function Detailedpanel() {
    const [item, setItem] = useState();
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        async function getItem() {
            let itemsFromBackEnd = await Promise.all([loadById(window.location.pathname)]);
            setItem([itemsFromBackEnd[0]]);
        }
        getItem();
    }, []);



    if (item === []) {
        return <p>Loading...</p>;
    }

    const handleChange = e => {
        setQuantity(e.target.value);
    }

    function handleClick() {
        if (quantity === 0){
            alert("Please select the quantity you want before proceeding.");
        }else{
            console.log(quantity);
        }
    }

    return (
        <div className="rounded-xl shadow-xl bg-navbar-white flex justify-center items-center h-screen">
            {item && item.map((element) => <div className="flex flex-row bg-navbar-white shadow-2xl rounded-xl" key={element.id}>
                <img src={element.thumbnail_link} className="rounded-l-xl object-cover h-96 w-96"></img>
                <div className="rounded-b-xl">
                    <ul className="m-4 w-128">
                        <li className="my-1 font-bold">Product Name: {element.name}</li>
                        <li className="my-1 font-bold">Remaining quantity: {element.quantity}</li>
                        <li className="my-1 font-bold">Description: {element.description}</li>
                        <li className="my-1 font-bold">${element.price} / serving</li>
                    </ul>
                    <div className="flex flex-row mx-4 my-8">
                        <select onChange={handleChange} className="bg-gray-200">
                            <option value="1" disabled="disabled" selected >Please select the quantity you want</option>
                            {Array.from({ length: element.quantity }, (_, i) => i + 1).map((x) => <option key={x} value={x}>{x}</option>)}
                        </select>
                        <button className="flex-auto mx-8 animate-bounce rounded-full bg-green-700" onClick={handleClick}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>)}
        </div>
    )
}