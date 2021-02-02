import React from "react";
import LinkPageSection from "./LinkPageSection";
import LinkSectionHeader from "./LinkSectionHeader";
import ScreenshotSection from "./ScreenshotSection";
import DescriptionSection from "./DescriptionSection";
import "./LinkMainSection.scss";

function LinkMainSection(props) {
  const { link: link } = props;
  return (
    <LinkPageSection
      link={props.link}
      items={props.items}
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="LinkMainSection__container container">
        <LinkSectionHeader
          link={props.link}
          title={props.title}
          subtitle={props.subtitle}
          ratings={[1, 2, 3, 4, 5]}
          size={3}
          spaced={true}
          className="has-text-centered"
        />
        <ScreenshotSection link={props.link}>
          {link.fields.screenshots.map((item, index) => (
            <div
              className="column is-half-tablet is-one-third-desktop"
              key={index}
            >
              <div className="card">
                <div className="card-image">
                  <figure className="image">
                    <img src={item.url} alt={item.filename} />
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </ScreenshotSection>
        <DescriptionSection link={link} />
      </div>
    </LinkPageSection>
  );
}

export default LinkMainSection;
