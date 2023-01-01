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
            url: "/knygos",
            icon: SolutionsSVG
          },
          {
            title: "DeitaP2P",
            url: "/p2p",
            icon: DeitaP2PSVG
          },
          {
            title: "VBE",
            url: "/vbe",
            icon: DeitaP2PSVG
          },
          {
            title: "Prenumeratos",
            url: "/prenumeratos",
            icon: PricingSVG
          },
    ]
);