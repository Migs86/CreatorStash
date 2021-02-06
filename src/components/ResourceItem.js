import React from "react";
import CenteredColumns from "./CenteredColumns";
import { RatingIconNumber, RatingIconContainer } from "./../components/StyledComponents";
import { Link } from "./../util/router.js";

function ResourceItems(props) {

  return (
    <CenteredColumns>
          {props.items && props.items.length ? props.items.map((item, index) => (
            <>
              {/* { props.featuredOnly ? (item.fields["Featured"] === true) : true && ( */}
              
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
                        <h4>{item.fields.Name} 
                          <RatingIconContainer>
                            <span className="icon has-text-warning" key={index} style={{position: "absolute", top: 0, left: 0}}>
                              <i className="fas fa-star" />
                            </span>
                            <RatingIconNumber>{item.fields && item.fields.Rating}</RatingIconNumber>
                          </RatingIconContainer>
                        </h4>
                        <div>
                            { props.tagValue && item.fields[props.tagValue] &&
                              item.fields[props.tagValue].length > 0 && item.fields[props.tagValue].map((usecase, index) => {
                                return <span className="Categories__tag tag is-light is-info">
                                        {item.fields[props.tagValue][index]}
                                      </span>
                              })}
                        </div>
                        <p>
                          {item.fields.Description
                            ? item.fields.Description
                            : item.fields.Detail}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              
            </>
          )) : ''}
        </CenteredColumns>
  );
}

export default ResourceItems;


