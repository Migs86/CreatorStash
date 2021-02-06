import React, {useState} from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import CenteredColumns from "./CenteredColumns";
import ContentCardsSection from "./ContentCardsSection";
import ResourceItem from "./ResourceItem";
import { RatingIconNumber, RatingIconContainer, CardDescriptionParagraph, CardDescriptionContainer } from "./../components/StyledComponents";
import { Link } from "./../util/router.js";


import "./Categories.scss";

function Categories({items, color, size, backgroundImage, backgroundImageOpacity, title, subtitle }) {

 


  console.log("my data =====>",  items)

  const categories = [
    {
      category: "Streaming Software",
      type: "Streaming Software",  
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
      category: "Website Builder",
      type: "Landing Page",
    },
    {
      category: "Monetize My Content",
      type: "Monetize",
    },
    {
      category: "Stock Photos & Videos",
      type: "Stock Photos & Videos",
    },
    {
      category: "Music and Sound FX",
      type: "Music and Sound FX",
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
      category: "Iconography",
      type: "Icons",
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
        <CenteredColumns>
          
        </CenteredColumns>
        <CenteredColumns items={items}>
          {categories.map((category, index) => (
            
            <div className="column is-full" key={index}>
              <article className="Categories__faq-item">
                <h1 className="title is-4 is-spaced">{category.category}</h1>
                <div className="columns is-variable is-4 is-multiline">
                {items && items.length ? items.filter(item => item.fields.Category && item.fields.Category.includes(category.type) && item.fields["Top Pick"]).map((item, index) => (
                  
                  
                      <div
                        className="column is-half-tablet is-one-quarter-desktop"
                        key={index}
                      >
                        <Link
                          className="ContentCardsSection__card card is-flex"
                          to={"/link/" + item.fields.Name}
                        >
                          <div className="card-image">
                            <figure className="image is-4by3">
                              <img
                                src={
                                  item.fields.screenshots
                                    ? item.fields.screenshots[0].thumbnails.large.url
                                    : "https://i.ibb.co/02Pd9D8/default.png"
                                }
                                alt={item.title}
                              />
                            </figure>
                          </div>
                          <div className="card-content">
                            <div className="content">
                              <h4>{item.fields.Name} 
                                <RatingIconContainer>
                                  <span className="icon has-text-warning" key={index} style={{position: "absolute", top: 0, left: 0}}>
                                    <i className="fas fa-star" />
                                  </span>
                                  <RatingIconNumber>{item.fields && item.fields.Rating}</RatingIconNumber>
                                </RatingIconContainer>
                              </h4>
                              <CardDescriptionParagraph>
                                {item.fields.Description
                                  ? item.fields.Description
                                  : item.fields.Detail}
                              </CardDescriptionParagraph>
                            </div>
                          </div>
                        </Link>
                      </div>
                    
                   
                )) : ''}
                </div>
                

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
