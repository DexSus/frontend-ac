import React from "react";

import { HomeSection } from "./components/section_home";
import { RoadMapSection } from "./components/section_road_map";
import { FAQSection } from "./components/section_faq";
import { AnalyticsSection } from "./components/section_analytics";
import { FormSection } from "./components/section_form";
import { SponsorSection } from "./components/section_sponsors";

export const Main = () => {

    return (
        <>
            <HomeSection/>
            <SponsorSection/>
            <RoadMapSection/>
            <FAQSection/>
            <AnalyticsSection/>
            <FormSection/>
        </>
    )
}