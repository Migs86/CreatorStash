import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import CenteredColumns from "./CenteredColumns";
import { Link } from "./../util/router.js";
import "./UseCases.scss";

function UseCases(props) {
  const categories = [
    {
      category: "I need inspiration",
      type: "Inspiration",
      description: "Get inspiration for all sorts of creative blocks",
    },
    {
      category: "I'm looking for a better way",
      type: "Tools",
      description: "Find the right new tool for the job",
    },
    {
      category: "Learn a new technique",
      type: "Tutorial",
      description: "Tutorials for every technique in the book",
    },
    {
      category: "Download some fresh assets",
      type: "Downloads",
      description: "",
    },
    {
      category: "Learn a new technique",
      type: "Tutorial",
      description: "",
    },
  ];

  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          spaced={true}
          className="has-text-centered"
        />
        <CenteredColumns>
          {categories.map((category, index) => (
            <div className="column is-half" key={index}>
              <article className="UseCases__use-case-item">
                <h1 className="title is-4 is-spaced">{category.category}</h1>
                <h2 className="subtitle is-6 has-text-link">
                  {props.items && props.items.length && props.items.map((item, index) => (
                    <>
                      {item.fields["Use Case"] &&
                        item.fields["Use Case"].includes(category.type) &&
                        item.fields["Top Pick"] === "checked" && (
                          <ul>
                            <li>{item.fields.Name}</li>
                          </ul>
                        )}
                    </>
                  ))}
                </h2>
                <Link
                  className="has-text-link"
                  to={"/usecase/" + category.type}
                >
                  See All
                </Link>
              </article>
            </div>
          ))}
        </CenteredColumns>
      </div>
    </Section>
  );
}

export default UseCases;
