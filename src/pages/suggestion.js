import React from "react";
import SuggestionSection from "../components/SuggestionSection";

function SuggestionPage(props) {
  return (
    <SuggestionSection
      color="white"
      size="medium"
      backgroundImage=""
      backgroundImageOpacity={1}
      title="Share Your Stash"
      subtitle="Send us your fave resources and we'll share the wealth.  Can be a website, youtube tutorial, etc."
      buttonText="Push For Karma"
      buttonColor="primary"
      buttonInverted={false}
      showNameField={true}
    />
  );
}

export default SuggestionPage;
