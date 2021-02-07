import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import LeftColumns from "./LeftColumns";
import { Link } from "./../util/router.js";
import "./UseCases.scss";

function UseCases(props) {
  const {
    items
  } = props;

  const categories = [
    {
      category: "I need inspiration",
      type: "Inspiration",
      description: "Get inspiration for all sorts of creative blocks",
    },
    {
      category: "Download some fresh assets",
      type: "Downloads",
      description: "",
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
    }
    
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
          
        />
        <LeftColumns>
          {categories.map((category, index) => (
            <div className="column is-half" key={index}>
              <article className="UseCases__use-case-item">
                <h1 className="title is-4 is-spaced">{category.category}</h1>

                { items && items.length ? items.map((item, index) => (
                  <>
                    {item.fields["Use Case"] && item.fields["Use Case"].includes(category.type) &&
                      item.fields["Top Pick"] === true && (
                        <ul>
                          <li className="has-text-link">
                            <Link to={"/link/" + item.fields.Name}>
                              {item.fields.Name}
                            </Link>
                            {item.fields["Category"] &&
                              item.fields["Category"].length > 0 && item.fields["Category"].map((usecase, index) => {
                                return <span className="Categories__tag tag is-light is-info" key={index}>
                                        {item.fields["Category"][index]}
                                      </span>
                              })}
                           
                          </li>
                        </ul>
                      )}
                  </>
                )): ''}

                <h2 className="Categories__subtitle subtitle is-6 has-text-link">
                  <Link to={"/category/" + category.type}>
                    See All {category.category}
                  </Link>
                </h2>
              </article>
            </div>
          ))}
        </LeftColumns>
      </div>
    </Section>
  );
}

export default UseCases;
