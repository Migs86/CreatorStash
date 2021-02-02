import React from "react";
import SettingsSection from "./../components/SettingsSection";
import { useRouter } from "./../util/router.js";

function SettingsPage(props) {
  const router = useRouter();

  return (
    <SettingsSection
      color="white"
      size="medium"
      backgroundImage=""
      backgroundImageOpacity={1}
      buttonColor="primary"
      buttonInverted={false}
      section={router.query.section}
      key={router.query.section}
    />
  );
}

export default SettingsPage;
