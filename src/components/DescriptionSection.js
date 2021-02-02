import React from "react";

function DescriptionSection(props) {
  const { link } = props;

  return (
    <div className="columns">
      <div className="column">
        <article className="message">
          <div className="message-header">
            <p>TL;DR</p>
          </div>
          <div className="message-body">
            {link.fields.Description
              ? link.fields.Description
              : link.fields.Details}
          </div>
        </article>
      </div>
      <div className="column">
        <article className="message">
          <div className="message-header">
            <p>Reaction</p>
          </div>
          <div className="message-body">
            {link.fields.Review ? link.fields.Review : ""}
          </div>
        </article>
      </div>
    </div>
  );
}

export default DescriptionSection;
