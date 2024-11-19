import React from "react";
import sponsorIconMou from './images/mdu.png'; 
import sponsorIconJam from './images/jam.png'; 
import sponsorIconHackOne from './images/nduu.png'; 
import sponsorIconHackTwo from './images/bitec.png'; 

export const SponsorSection = () => {
    return (
        <div className="sponsor-container">
            <img className="sponsor-1" src={sponsorIconMou} alt="sponsor-1"  />
            <img className="sponsor-2" src={sponsorIconHackOne} alt="sponsor-2"  />
            <img className="sponsor-3" src={sponsorIconHackTwo} alt="sponsor-3"  />
            <img className="sponsor-4" src={sponsorIconJam} alt="sponsor-4"  />
        </div>
    );
};
