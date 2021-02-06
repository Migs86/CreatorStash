import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import CenteredColumns from "./CenteredColumns";
import ResourceItem from "./ResourceItem";
import { Link } from "./../util/router.js";
import "./ContentCardsSection.scss";

function ContentCardsSection(props) {

  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          spaced={true}
          className="has-text-centered"
        />
        <ResourceItem items={props.items} tagValue={props.tagValue} />
      </div>
    </Section>
  );
}

export default ContentCardsSection;
