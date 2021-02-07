import React, {useEffect} from "react";
import LinkPageSection from "./LinkPageSection";
import LinkSectionHeader from "./LinkSectionHeader";
import DescriptionSection from "./DescriptionSection";
import "./LinkMainSection.scss";

function LinkMainSection({ link, color, size, backgroundImage, backgroundImageOpacity, title, subtitle}) {

  useEffect(() => {
    
  }, [link]);

  return (
    <LinkPageSection
      link={link}
      color={color}
      size={size}
      backgroundImage={backgroundImage}
      backgroundImageOpacity={backgroundImageOpacity}
    >
      <div className="LinkMainSection__container container">
        <LinkSectionHeader
          link={link}
          title={title}
          subtitle={subtitle}
          ratings={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          size={3}
          spaced={true}
          
        />
        

        <div className="columns is-centered is-variable is-4 is-multiline">
          {link[0].fields && link[0].fields.screenshots && link[0].fields.screenshots.map((item, index) => (
            <div
              className="column is-half-tablet is-one-third-desktop"
              key={index}
            >
              <div className="card">
                <div className="card-image">
                  <figure className="image">
                    <img src={item.thumbnails.large.url} alt={item.filename} />
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>
        <DescriptionSection link={link} />
      </div>
    </LinkPageSection>
  );
}

export default LinkMainSection;
