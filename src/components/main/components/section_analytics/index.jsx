import React from "react";

import { Frame } from './components/index';

export const AnalyticsSection = () => {

    return (
        <section className="analytics" id="analytics">
            <h2 className="heading">Трішки цифр</h2>

            <div className="charts-container">
                <Frame />
                <Frame />
                <Frame />
                <Frame />
                <Frame />
            </div>
        </section>
    );
}