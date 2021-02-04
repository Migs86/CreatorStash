import React, {useState} from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import CenteredColumns from "./CenteredColumns";
import { Link } from "./../util/router.js";


import "./Categories.scss";

function Categories({items, color, size, backgroundImage, backgroundImageOpacity, title, subtitle }) {

 


  console.log("my data =====>",  items)

  const categories = [
    {
      category: "Iconography",
      type: "Icons",  
    },
    {
      category: "Color Schemes",
      type: "Color",  
    },
    {
      category: "Illustration",
      type: "Illustration",
    },
    {
      category: "Video Editing",
      type: "Video Editing",
    },
    {
      category: "Social Media",
      type: "Social Media",
    },
    {
      category: "Video Effects",
      type: "Video Effects",
    },
    {
      category: "Webpage Builder",
      type: "Landingpage",
    },
    {
      category: "Monetize My Content",
      type: "Monetize",
    },
    {
      category: "Newsletter",
      type: "Newsletter",
    },
    {
      category: "Blog",
      type: "Blog",
    },
    {
      category: "UI / UX Design",
      type: "Design Tools",
    },
    {
      category: "Stock Photos/Videos",
      type: "Stock Photos",
    },
    {
      category: "Prototyping",
      type: "Prototyping",
    },
    {
      category: "Mockups",
      type: "Mockups",
    },
    
  ];

  return (
    <Section
      items={items}
      color={color}
      size={size}
      backgroundImage={backgroundImage}
      backgroundImageOpacity={backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          size={3}
          spaced={true}
          className="has-text-centered"
        />
        <CenteredColumns items={items}>
          {categories.map((category, index) => (
            <div className="column is-half" key={index}>
              <article className="Categories__faq-item">
                <h1 className="title is-4 is-spaced">{category.category}</h1>

                { items && items.length ? items.map((item, index) => (
                  <>
                    {item.fields.Category && item.fields.Category.includes(category.type) &&
                      item.fields["Top Pick"] === true && (
                        <ul>
                          <li className="has-text-link">
                            <Link to={"/link/" + item.fields.Name}>
                              {item.fields.Name}
                            </Link>

                            {item.fields["Use Case"] &&
                              item.fields["Use Case"].length > 0 && item.fields["Use Case"].map((usecase, index) => {
                                return <span className="Categories__tag tag is-light is-info">
                                        {item.fields["Use Case"][index]}
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
        </CenteredColumns>
      </div>
    </Section>
  );
}

export default Categories;
