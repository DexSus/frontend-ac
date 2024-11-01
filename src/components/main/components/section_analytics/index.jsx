import React from "react";

import { Frame } from './components/index';

export const AnalyticsSection = () => {

    return (
        <section className="analytics" id="analytics">
            <h2 className="heading">Аналітика</h2>

            <div className="charts-container">
                <Frame sourth={"http://206.189.52.50:5601/app/dashboards#/view/f31b0950-91dd-11ef-88ac-3b559f597f91?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:5000),time:(from:now-15m,to:now))"}/>
                <Frame sourth={"http://206.189.52.50:5601/app/dashboards#/view/ca6f7d90-91e4-11ef-88ac-3b559f597f91?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:5000),time:(from:now-7d,to:now))"}/>
            </div>
        </section>
    );
}