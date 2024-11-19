import React from "react";

import { Frame } from './components/index';

export const AnalyticsSection = () => {

    return (
        <section className="analytics" id="analytics">
            <h2 className="heading">Трішки цифр</h2>

            <div className="charts-container">
                <Frame text={"Кількість повідомлень за останній місяць"} count={5416} />
                <Frame text={"Кількість повідомлень за вчора"} count={156} />
                <Frame text={"Кількість повідомлень за сьогодні"} count={62} />
                <Frame text={"Кількість закритих справ"} count={2026} />
                <Frame text={"Кількість справ, що розглядаються"} count={9544} />
            </div>
        </section>
    );
}