import React from "react";

// import SynopsesSVG from "../../images/synopses.svg"
import SolutionsSVG from "../../images/solutions.svg"
import PricingSVG from "../../images/pricing.svg"
import DeitaP2PSVG from "../../images/deitap2p.svg"

export const NavContext = React.createContext(
    [
          // {
          //   title: "Konspektai",
          //   url: "/synopses",
          //   icon: SynopsesSVG
          // },
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
          {
            title: "DeitaP2P",
            url: "/p2p",
            icon: DeitaP2PSVG
          },
    ]
);