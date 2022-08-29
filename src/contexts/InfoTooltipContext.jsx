import React, { createContext, useMemo, useState } from 'react';

export const InfoTooltipContext = createContext();

function InfoTooltipProvider({ children }) {
  const [tooltip, setTooltip] = useState({
    message: '',
    type: null
  });

  const tooltipValue = useMemo(
    () => ({
      tooltip,
      setTooltip
    }),
    [tooltip]
  );
  return <InfoTooltipContext.Provider value={tooltipValue}>{children}</InfoTooltipContext.Provider>;
}

export default InfoTooltipProvider;
