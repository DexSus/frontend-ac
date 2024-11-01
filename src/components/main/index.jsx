import React from "react";

import { HomeSection } from "./components/section_home";
import { RoadMapSection } from "./components/section_road_map";
import { FAQSection } from "./components/section_faq";
import { AnalyticsSection } from "./components/section_analytics";

export const Main = () => {

    return (
        <>
            <HomeSection/>
            <RoadMapSection/>
            <FAQSection/>
            <AnalyticsSection/>
        </>
    )
}