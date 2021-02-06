import React from "react";
import "./LinkSectionHeader.scss";

function LinkSectionHeader({ link, className, size, spaced, title, subtitle, ratings }) {
  // Render nothing if no title or subtitle
  if (!title && !subtitle) {
    return null;
  }


  return (
    <>
      <header
        className={
          "LinkSectionHeader__header" +
          (className ? ` ${className}` : "")
        }
      >
        {title && (
          <h1
            className={
              "title has-text-weight-bold" +
              (size ? ` is-${size}` : "") +
              (size === 1 ? " is-size-2-mobile" : "") +
              (spaced ? " is-spaced" : "")
            }
          >
            {link[0].fields.Name ? link[0].fields.Name : ""}
          </h1>
        )}

        {subtitle && (
          <p
            className={
              "LinkSectionHeader__subtitle subtitle" +
              (size > 4 ? " is-6" : "")
            }
          >
            {link[0].fields.Description
              ? link[0].fields.Description
              : link[0].fields.Details}
          </p>
        )}
      </header>

      {link[0].fields["Category"] && link[0].fields["Category"].length > 0 && (
        <div className="LinkSectionHeader__container container">
          <div className="column ">
            {ratings.map((item, index) => (
              <>
                {!link[0].fields.Rating && (
                  <span className="icon">
                    <i className="fa-star far" />
                  </span>
                )}

                {link[0].fields.Rating && link[0].fields.Rating >= item && (
                  <span className="icon has-text-warning">
                    <i className="fas fa-star" />
                  </span>
                )}

                {link[0].fields.Rating && link[0].fields.Rating < item && (
                  <span className="icon has-text-warning">
                    <i className="far fa-star" />
                  </span>
                )}
              </>
            ))}
          </div>

          {link[0].fields["Category"].map((item, index) => (
            <div className="column " key={index}>
              <span className="tag is-info is-medium">{item}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default LinkSectionHeader;
