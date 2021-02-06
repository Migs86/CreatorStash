import React from "react";
import CenteredColumns from "./CenteredColumns";
import { RatingIconNumber, RatingIconContainer, CardDescriptionParagraph, TagValueSection, Tag, CategoryTitle } from "./../components/StyledComponents";
import { Link } from "./../util/router.js";

function ResourceItems(props) {
    console.log('ITEMS IN RESOURCE => ', props.items)
  return (
      <>
      { props.title ? <CategoryTitle className="title is-4 is-spaced">{props.title}</CategoryTitle> : ''}
      { props.seeAll ? <h2 className="Categories__subtitle subtitle is-6 has-text-link">
                  <Link to={props.link}>
                    See All {props.title}
                  </Link>
                </h2> : ''}
        <CenteredColumns>
        
        
          {props.items && props.items.length ? props.items.map((item, index) => (
            <>
              {/* { props.featuredOnly ? (item.fields["Featured"] === true) : true && ( */}
              
                <div
                  className="column is-half-tablet is-one-third-desktop"
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
                        <h4>{item.fields.Name} 
                          <RatingIconContainer>
                            <span className="icon has-text-warning" key={index} style={{position: "absolute", top: 0, left: 0}}>
                              <i className="fas fa-star" />
                            </span>
                            <RatingIconNumber>{item.fields && item.fields.Rating}</RatingIconNumber>
                          </RatingIconContainer>
                        </h4>
                        <TagValueSection>
                            { props.tagValue && item.fields[props.tagValue] &&
                              item.fields[props.tagValue].length > 0 && item.fields[props.tagValue].map((usecase, index) => {
                                return <Tag>
                                        {item.fields[props.tagValue][index]}
                                      </Tag>
                              })}
                        </TagValueSection>
                        <CardDescriptionParagraph>
                          {item.fields.Description
                            ? item.fields.Description
                            : item.fields.Detail}
                        </CardDescriptionParagraph>
                      </div>
                    </div>
                  </Link>
                </div>
              
            </>
          )) : ''}
          
        </CenteredColumns>
        </>
  );
}

export default ResourceItems;


