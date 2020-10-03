import React, { Component } from 'react';
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {

    state={
        service:[
            {
                icon:<FaCocktail/>,
                title: 'free cocktails',
                info: `Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Magni, corporis!`
            },
            {
                icon:<FaHiking/>,
                title: 'Endles Hiking',
                info: `Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Magni, corporis!`
            },
            {
                icon:<FaShuttleVan/>,
                title: 'free shuttle',
                info: `Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Magni, corporis!`
            },
            {
                icon:<FaBeer/>,
                title: 'strongest beer',
                info: `Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Magni, corporis!`
            }
        ]
    }
    render() {
        return (
            <section>
                <Title title="services"/>
                <div className="services-center">
                    {this.state.service.map((item,i) => {
                        return <article key={i} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }

}