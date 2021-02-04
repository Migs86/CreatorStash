import React from "react";
import { RatingsSection } from './StyledComponents'


function Ratings(props) {

  return (
    <RatingsSection>
      { [...Array(props.ratings)].map((item, index) => <span className="icon has-text-warning" key={index}>
                    <i className="fas fa-star" />
                  </span>)
      
      }
      { [...Array(5-props.ratings)].map((item, index) => <span className="icon has-text-warning" key={index}>
                    <i className="far fa-star" />
                  </span>)
    }
    </RatingsSection>
  );
}

export default Ratings;