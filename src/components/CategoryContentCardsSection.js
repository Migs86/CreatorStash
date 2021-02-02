import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import CenteredColumns from "./CenteredColumns";
import { Link, useRouter } from "./../util/router.js";
import "./CategoryContentCardsSection.scss";

function CategoryContentCardsSection(props) {
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
              {item.fields.Category.includes(router.query.category) && (
                <div
                  className="column is-half-tablet is-one-quarter-desktop"
                  key={index}
                >
                  <Link
                    className="CategoryContentCardsSection__card card is-flex"
                    to={item.Website}
                  >
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img
                          src="https://i.ibb.co/02Pd9D8/default.png"
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
                            : item.fields.Details}
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

export default CategoryContentCardsSection;
