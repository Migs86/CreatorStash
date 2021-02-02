import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import CenteredColumns from "./CenteredColumns";
import { Link, useRouter } from "./../util/router.js";
import "./ContentLinksCardSection.scss";

function ContentLinksCardSection(props) {
  const router = useRouter();

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
          {props.items.records.map((item, index) => (
            <>
              {item.fields["Use Case"] &&
                item.fields["Use Case"].includes(router.query.type) && (
                  <div
                    className="column is-half-tablet is-one-quarter-desktop"
                    key={index}
                  >
                    <Link
                      className="ContentLinksCardSection__card card is-flex"
                      to={item.Website}
                    >
                      <div className="card-image">
                        <figure className="image is-4by3">
                          <img src={item.image} alt={item.title} />
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

export default ContentLinksCardSection;
