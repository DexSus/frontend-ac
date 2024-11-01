import React from "react";

import { TimeLineItem } from './components/index';

export const RoadMapSection = () => {

    return(
        <section className="roadmap" id="roadmap">
            <h2 className="heading">Роад Мапа обробки доносів</h2>

            <div className="timeline-items">

                <TimeLineItem number={1}/>
                <TimeLineItem number={2}/>
                <TimeLineItem number={3}/>
                <TimeLineItem number={4}/>
                <TimeLineItem number={5}/>

            </div>
        </section>
    );
}