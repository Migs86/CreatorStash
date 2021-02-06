import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import CenteredColumns from "./CenteredColumns";
import { Link } from "./../util/router.js";
import Avatar from "./Avatar";
import "./UsersSection.scss";

function UsersSection(props) {
  const items = [
    {
      headerImage: "https://source.unsplash.com/pe_R74hldW4/1080x360",
      avatarImage: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
      name: "Jason Leighton",
      username: "jleighton",
    },
    {
      headerImage: "https://source.unsplash.com/uwPBAlQyIag/1080x360",
      avatarImage: "https://uploads.divjoy.com/pravatar-150x-35.jpeg",
      name: "Lisa Zinn",
      username: "lisazinn",
    },
    {
      headerImage: "https://source.unsplash.com/pJ_DCj9KswI/1080x360",
      avatarImage: "https://uploads.divjoy.com/pravatar-150x-16.jpeg",
      name: "Diana Low",
      username: "dianalow",
    },
    {
      headerImage: "https://source.unsplash.com/2mjl2uvz9ic/1080x360",
      avatarImage: "https://i.pravatar.cc/150?img=7",
      name: "Shawn David",
      username: "shawndavid",
    },
    {
      headerImage: "https://source.unsplash.com/GJ8ZQV7eGmU/1080x360",
      avatarImage: "https://i.pravatar.cc/150?img=8",
      name: "Ian Gold",
      username: "iangold",
    },
    {
      headerImage: "https://source.unsplash.com/CSs8aiN_LkI/1080x360",
      avatarImage: "https://i.pravatar.cc/150?img=10",
      name: "Ali Pine",
      username: "alipine",
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
          
        />
        <CenteredColumns>
          {items.map((item, index) => (
            <div
              className="column is-half-tablet is-one-third-desktop is-flex"
              key={index}
            >
              <Link
                className="UsersSection__card card is-flex"
                to={`/`} //{`/user/${item.username}`}
              >
                <div className="card-image">
                  <figure className="UsersSection__image image is-3by1">
                    <img className="is-overlay" src={item.headerImage} alt="" />
                  </figure>
                </div>
                <div className="UsersSection__card-content card-content is-flex has-text-centered">
                  <div className="UsersSection__avatar-wrapper">
                    <Avatar
                      image={item.avatarImage}
                      size={96}
                      alt={item.name}
                    />
                  </div>
                  <div className="UsersSection__details">
                    <p className="is-size-6 has-text-weight-bold">
                      {item.name}
                    </p>
                    <p className="is-size-7 has-text-weight-semibold has-text-grey">
                      @{item.username}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </CenteredColumns>
      </div>
    </Section>
  );
}

export default UsersSection;
