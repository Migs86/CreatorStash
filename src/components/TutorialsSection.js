import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import VideoEmbed from "./VideoEmbed";
import "./TutorialsSection.scss";

function TutorialsSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="TutorialsSection__container container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          spaced={true}
          className="has-text-centered"
        />
        <div className="columns">
          <div className="column">
            <VideoEmbed url={props.embedUrl} />
          </div>
          <div className="column">
            <VideoEmbed url={props.embedUrl} />
          </div>
          <div className="column">
            <VideoEmbed url={props.embedUrl} />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default TutorialsSection;
