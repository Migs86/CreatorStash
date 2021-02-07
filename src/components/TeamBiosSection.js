import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import CenteredColumns from "./CenteredColumns";
import Avatar from "./Avatar";
import { Link } from "./../util/router.js";
import "./TeamBiosSection.scss";

function TeamBiosSection(props) {
  const items = [
    {
      avatar:
        "https://dl.airtable.com/.attachments/7a94ebc0ca627b2a99cef04c2b3c8703/9dcab7ac/profile.png",
      name: "Miguel Fernando",
      role: "Entrepreneur, Creator, Developer, and so on.",
      bio:
        "Founder of Cake (www.startacake.com) and serial entrepreneur, Miguel left a career helping manage close to $1 Billion before moving to pursue his true passion of building software and creating content/resources for other entrepreneur and creators.",
    },
  ];

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
        <CenteredColumns>
          {items.map((item, index) => (
            <div
              className="column is-two-thirds-tablet is-two-thirds-desktop is-flex"
              key={index}
            >
              <div className="TeamBiosSection__card card is-flex">
                <div className="TeamBiosSection__card-content card-content is-flex has-text-centered">
                  <div className="TeamBiosSection__avatar-wrapper">
                    <Avatar image={item.avatar} size={128} alt={item.name} />
                  </div>
                  <div className="TeamBiosSection__details">
                    <p className="is-size-5 is-spaced">{item.name}</p>

                    <p className="TeamBiosSection__role is-size-7 is-uppercase has-text-weight-semibold">
                      {item.role}
                    </p>
                    
                    <a href={"https://www.youtube.com/channel/UCzsvFtfaP3wUYLophqBzlzg?sub_confirmation=1"}>
                      <h3 style={{marginTop: "1rem"}}>
                        <span className="icon">
                          <i className="fa-youtube fab" />
                        </span>
                        Youtube
                      </h3>
                    </a>
                    
                    
                    
                    
                    
                    <p className="TeamBiosSection__bio">{item.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CenteredColumns>
      </div>
    </Section>
  );
}

export default TeamBiosSection;
