import React from 'react'
import { useState } from 'react';

import "./contextual-section.sass";

export const SectionContext = React.createContext();

export default function ContextualSection({ children, className, style }) {

  const [sectionData, setSectionData] = useState({}); 

  return (
    <SectionContext.Provider value={[sectionData, setSectionData]}>
      <section className={className} style={style}>
          {children}
      </section>
    </SectionContext.Provider>
  )
}
