import React from "react";
import BackgroundImage from "./BackgroundImage";
import "./LinkPageSection.scss";

function LinkPageSection(props) {
  const {
    color,
    size,
    backgroundImage,
    backgroundImageOpacity,
    backgroundImageRepeat,
    className,
    children,
   
    // Passed to section element
    ...otherProps
  } = props;

  return (
    <section
      className={
        "LinkPageSection hero section is-block is-relative" +
        (color ? ` is-${color}` : "") +
        (size ? ` is-${size}` : "") +
        (className ? ` ${className}` : "")
      }
      {...otherProps}
    >
      {backgroundImage && (
        <BackgroundImage
          image={backgroundImage}
          opacity={backgroundImageOpacity}
          repeat={backgroundImageRepeat}
        />
      )}

      {props.children}
    </section>
  );
}

export default LinkPageSection;
