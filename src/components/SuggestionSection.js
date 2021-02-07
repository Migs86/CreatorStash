import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Suggestion from "./Suggestion";
import "./SuggestionSection.scss";

function SuggestionSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="SuggestionSection__container container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          spaced={true}
          className="has-text-centered"
        />
        <Suggestion
          showNameField={props.showNameField}
          buttonText={props.buttonText}
          buttonColor={props.buttonColor}
          buttonInverted={props.buttonInverted}
        />
      </div>
    </Section>
  );
}

export default SuggestionSection;
