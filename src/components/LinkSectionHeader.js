import React from "react";
import "./LinkSectionHeader.scss";

function LinkSectionHeader(props) {
  // Render nothing if no title or subtitle
  if (!props.title && !props.subtitle) {
    return null;
  }

  const { link: link } = props;

  return (
    <>
      <header
        className={
          "LinkSectionHeader__header" +
          (props.className ? ` ${props.className}` : "")
        }
      >
        {props.title && (
          <h1
            className={
              "title has-text-weight-bold" +
              (props.size ? ` is-${props.size}` : "") +
              (props.size === 1 ? " is-size-2-mobile" : "") +
              (props.spaced ? " is-spaced" : "")
            }
          >
            {link.fields.Name ? link.fields.Name : ""}
          </h1>
        )}

        {props.subtitle && (
          <p
            className={
              "LinkSectionHeader__subtitle subtitle" +
              (props.size > 4 ? " is-6" : "")
            }
          >
            {link.fields.Description
              ? link.fields.Description
              : link.fields.Details}
          </p>
        )}
      </header>

      {link.fields["Category"] && link.fields["Category"].length > 0 && (
        <div className="LinkSectionHeader__container container">
          <div className="column has-text-centered">
            {props.ratings.map((item, index) => (
              <>
                {!link.fields.Rating && (
                  <span className="icon">
                    <i className="fa-star far" />
                  </span>
                )}

                {link.fields.Rating && link.fields.Rating >= item && (
                  <span className="icon has-text-warning">
                    <i className="fas fa-star" />
                  </span>
                )}

                {link.fields.Rating && link.fields.Rating < item && (
                  <span className="icon has-text-warning">
                    <i className="far fa-star" />
                  </span>
                )}
              </>
            ))}
          </div>

          {link.fields["Category"].map((item, index) => (
            <div className="column has-text-centered">
              <span className="tag is-info is-medium">{item}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default LinkSectionHeader;
