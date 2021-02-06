import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import VideoEmbed from "./VideoEmbed";
import "./VideoListSection.scss";

function VideoListSection({color, size, backgroundImage, backgroundImageOpacity, title, subtitle, videos}) {
  return (
    <Section
      color={color}
      size={size}
      backgroundImage={backgroundImage}
      backgroundImageOpacity={backgroundImageOpacity}
    >
      <div className="VideoListSection__container container">
        <SectionHeader
          title={title}
          subtitle={videos && videos.length > 0 ? subtitle : "We don't have any videos yet.  Submit any gems and we'll put them up!"}
          size={3}
          spaced={true}
          
        />
        { videos && videos.length > 0 ?
          <div className="columns">
            {videos && videos.map((item, index) => <div className="column" key={index}>
                <VideoEmbed url={item.fields.url} />
              </div>
            )}
          </div>
        :
          <div className="columns is-centered">
            <button className="button is-primary">Submit A Video</button>
          </div>
        }
        
      </div>
    </Section>
  );
}

export default VideoListSection;
