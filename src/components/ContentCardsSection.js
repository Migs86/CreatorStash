import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import CenteredColumns from "./CenteredColumns";
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
        <CenteredColumns>
          {props.items && props.items.length && props.items.map((item, index) => (
            <>
              {item.fields["Featured"] === true && (
                <div
                  className="column is-half-tablet is-one-quarter-desktop"
                  key={index}
                >
                  <Link
                    className="ContentCardsSection__card card is-flex"
                    to={"/link/" + item.fields.Name}
                  >
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img
                          src={
                            item.fields.screenshots
                              ? item.fields.screenshots[0].thumbnails.large.url
                              : "https://i.ibb.co/02Pd9D8/default.png"
                          }
                          alt={item.title}
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <h4>{item.fields.Name}</h4>
                        <p>
                          {item.fields.Description
                            ? item.fields.Description
                            : item.fields.Detail}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              )} 
            </>
          ))}
        </CenteredColumns>
      </div>
    </Section>
  );
}

export default ContentCardsSection;
