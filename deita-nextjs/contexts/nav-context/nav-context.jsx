import React from "react";

import SynopsesSVG from "../../images/synopses.svg"
import SolutionsSVG from "../../images/solutions.svg"
import PricingSVG from "../../images/pricing.svg"

export const NavContext = React.createContext(
    [
        {
            title: "Konspektai",
            url: "/synopses",
            icon: SynopsesSVG
          },
          {
            title: "Sprendimai",
            url: "/solutions",
            icon: SolutionsSVG
          },
          {
            title: "Prenumeratos",
            url: "/pricing",
            icon: PricingSVG
          },
    ]
);