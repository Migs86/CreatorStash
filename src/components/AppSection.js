import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import LeftColumns from "./LeftColumns";
import ResourceItem from "./ResourceItem";

import { Link } from "./../util/router.js";
import "./ContentCardsSection.scss";

function AppSection(props) {


    // // console.log('apps', props.items);

  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={"Resources By App"}
          subtitle={"Check out what we found by the app you use"}
          size={3}
          spaced={true}
        />
        <ResourceItem items={props.items} />
      </div>
    </Section>
  );
}

export default AppSection;
