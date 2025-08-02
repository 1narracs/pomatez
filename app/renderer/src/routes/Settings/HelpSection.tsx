import React, { useContext, useEffect } from "react";
import SettingSection from "./SettingSection";
import { ConnnectorContext } from "contexts";
import { Help } from "components";

const HelpSection: React.FC = () => {
  const { openExternalCallback } = useContext(ConnnectorContext);

  useEffect(() => {
    if (openExternalCallback) {
      openExternalCallback();
    }
  }, [openExternalCallback]);

  return <SettingSection heading="//"></SettingSection>;
};

export default HelpSection;
