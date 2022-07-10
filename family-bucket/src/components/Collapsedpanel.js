import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Collapsedpanel(props) {

    return (
        <a href={props.id}>
            <div className="rounded-xl shadow-xl hover:cursor-pointer bg-navbar-white h-fit w-64">
                <img src={props.link} className="rounded-t-xl object-cover h-64 w-64"></img>
                <div className="rounded-b-xl">
                    <ul className="m-4">
                        <li>{props.name}</li>
                        <li>Remaining quantity: {props.quantity}</li>
                        <li>${props.price} / serving</li>
                    </ul>
                </div>
            </div>
        </a>
    )
}