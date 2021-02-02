import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import CenteredColumns from "./CenteredColumns";
import { Link } from "./../util/router.js";
import "./Categories.scss";

function Categories(props) {
  const { items } = props;

  console.log('Categories items => ', items)
  const categories = [
    {
      category: "Iconography",
      type: "Icons",
      answer: "",
    },
    {
      category: "Colors",
      type: "Color",
      answer: "",
    },
    {
      category: "Illustration",
      type: "Illustration",
      answer: "",
    },
    {
      category: "UI / UX Design",
      type: "Design",
      answer: "",
    },
    {
      category: "Stock Photos",
      type: "Stock Photos",
      answer: "",
    },
    {
      category: "Stock Images & Videos",
      type: "Prototyping",
      answer: "",
    },
    {
      category: "Video Editing",
      type: "Video Editing",
      answer: "",
    },
    {
      category: "Social Media",
      type: "Social Media",
      answer: "",
    },
    {
      category: "Video Effects",
      type: "Video Effects",
      answer: "",
    },
    {
      category: "Iconography",
      type: "Icons",
      answer: "",
    },
  ];

  return (
    <Section
      items={items}
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
        <CenteredColumns items={items}>
          {categories.map((category, index) => (
            <div className="column is-half" key={index}>
              <article className="Categories__faq-item">
                <h1 className="title is-4 is-spaced">{category.category}</h1>

                { items && items.length && items.map((item, index) => (
                  <>
                    {item.fields.Category.includes(category.type) &&
                      item.fields["Top Pick"] === true && (
                        <ul>
                          <li className="has-text-link">
                            <Link to={"/link/" + item.fields.Name}>
                              {item.fields.Name}
                            </Link>

                            {item.fields["Use Case"] &&
                              item.fields["Use Case"].length > 0 && (
                                <span className="Categories__tag tag is-light">
                                  {item.fields["Use Case"]}
                                </span>
                              )}
                          </li>
                        </ul>
                      )}
                  </>
                ))}

                <h2 className="Categories__subtitle subtitle is-6 has-text-link">
                  <Link to={"/category/" + category.type}>
                    See All {category.category}
                  </Link>
                </h2>
              </article>
            </div>
          ))}
        </CenteredColumns>
      </div>
    </Section>
  );
}

export default Categories;
