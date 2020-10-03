import React from 'react';
import { Link } from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'
const Room = ({room}) => {
    const {name, slug, images, price } = room;
    return (
        <article className="room">
            <img src={images[0]} alt="single room"/>

        </article>
    )
}

export default Room;