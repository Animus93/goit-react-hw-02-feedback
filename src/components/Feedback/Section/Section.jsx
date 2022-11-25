import React from 'react';

export const Section = ({tittle, children}) => {
  return (
    <React.Fragment>
  <h2>{tittle}</h2>  
  {children}
  </React.Fragment>
  );
};
