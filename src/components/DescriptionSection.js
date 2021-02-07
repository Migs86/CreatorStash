import React, {useEffect} from "react";

function DescriptionSection({ link }) {

  // console.log('desc link ', link[0])
  
  return (
    <div className="columns">
      <div className="column">
        <article className="message">
          <div className="message-header">
            <p>TL;DR</p>
          </div>
          <div className="message-body">
            {link[0] && link[0].fields && link[0].fields.Description
              ? link[0].fields.Description
              : (link[0] && link[0].fields && link[0].fields.Details ? link[0].fields.Details : '')}
          </div>
        </article>
      </div>
      <div className="column">
        <article className="message">
          <div className="message-header">
            <p>Reaction</p>
          </div>
          <div className="message-body">
            {link[0] && link[0].fields && link[0].fields.Review ? link[0].fields.Review : ''}
          </div>
        </article>
      </div>
    </div>
    
  );
  
}

export default DescriptionSection;
