import React, { useState, useEffect } from 'react';
import Slideshow from "./Slideshow";
import Collapsedpanel from "./Collapsedpanel";
import { loadAllItems } from './Modal';

/*            <div className="mx-20 my-5">
                <h1>You found a hair in your food? But we don't use any natural ingredients!</h1>
            </div> */

export default function Order() {
    const [item, setItem] = useState();

    useEffect(() => {
        async function getItem() {
            let itemsFromBackEnd = await Promise.all([loadAllItems()]);
            setItem(itemsFromBackEnd[0]);
        }
        getItem();
        //                {item && item.map((element) => <Collapsedpanel key={element.id} id={element.id} link={element.thumbnail_link} name={element.name} quantity={element.quantity} price={element.price} />)}
    }, []);

    if (item === []) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex flex-col h-screen mx-20 bgimg bg-cover my-10">
            <div className="flex flex-col items-center bgimg bg-cover my-10">
                <figure>
                    <blockquote className='font-small leading-tight text-lg italic mt-0 mb-2 text-yellow-500'>
                        <p>"You found a hair in your food? But we don't use any natural ingredients!"</p>
                    </blockquote>
                    <figcaption>— 1802, <cite>Karland Sanders, Our Beloved Founder</cite></figcaption>
                </figure>

                <div className='shadow-2xl mt-10'>
                    <Slideshow />
                </div>

            </div>

            <hr />
            <h1 className='font-medium leading-tight text-2xl my-4 text-black'>Make an order</h1>

            <div name="make-an-order-panel" className='grid gap-9 grid-cols-1 grid-rows-9 2xl:grid-cols-3 2xl:grid-rows-3 2xl:mx-80'>
            {item && item.map((element) => <Collapsedpanel key={element.id} id={element.id} link={element.thumbnail_link} name={element.name} quantity={element.quantity} price={element.price} />)}
            </div>
        </div>
    )
}

