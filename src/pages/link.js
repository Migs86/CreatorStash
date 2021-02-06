import React, {useState, useEffect} from "react";
// import LinkMainSection from "./../components/LinkMainSection";
import { SectionComponent, SectionContainer, SectionHeader, SectionTitle, SectionSubtitle, SectionLink, ScreenshotSection, SectionText, StatHeader } from "./../components/StyledComponents";
import Our2CentsSection from "./../components/Our2CentsSection";
import VideoListSection from "./../components/VideoListSection";
import Ratings from "./../components/RatingsComponent";
import VideoEmbed from './../components/VideoEmbed';
import { useRouter } from "./../util/router.js";
import getRecords from '../util/airtable';

function LinkPage(props) {
  const router = useRouter();
  const [link, setLink] = useState({});
  const [tutorials, setTutorials] = useState([]);
  

  const [state, setState] = useState({
    showModal: false,
    modalImage: '',
    modalImageFilename: ''
  })

  useEffect(() => {
      // filterByFormula: 'OR(Find("Subscription", {Cost}),Find("One-Time Fee", {Cost}))', 
      // filterByFormula: '{Rating}>3',
      
    const linkFilter = {
      filterByFormula: `({Name} = '${router.query.name}')`,
      maxRecords: 1,
      view: "Grid view"
    };
    
    if (!link.fields) {
      getRecords('Overview', linkFilter, setLink, true);    
    } else {
      const tutorialFilter = {
        filterByFormula: `Find("${link.fields.Category[0]}", {Category})`,
        maxRecords: 3,
        view: "Grid view"
      };
      getRecords('Tutorials', tutorialFilter, setTutorials);
    }
    
    
    
  }, [link]);
  console.log('Tutorials => ', tutorials);
  return (
    <>
      
      <SectionComponent>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>{link.fields && link.fields.Name}</SectionTitle>
            <SectionLink href={link.fields && link.fields.Website} target="_blank">
              Visit website
              <span class="icon">
                <i class="fas fa-external-link-square-alt"></i>
              </span>
            </SectionLink>
          </SectionHeader>
          
        </SectionContainer>
      

        <SectionContainer>
          <ScreenshotSection className="columns is-centered is-variable is-4 is-multiline">
            {link.fields && link.fields.screenshots && link.fields.screenshots.map((item, index) => (
              <>
                <div
                  className="column is-half-tablet is-one-third-desktop"
                  key={index}
                  onClick={() => {
                    setState({
                      modalImage: item.url,
                      modalImageFilename: item.filename,
                      showModal: true
                    });
                  }}
                >
                  <div className="card">
                    <div className="card-image">
                      <figure className="image">
                        <img src={item.thumbnails.large.url} alt={item.filename} />
                      </figure>
                    </div>
                  </div>
                </div>
                
              </>
            ))}
            { state.showModal ? <div className="modal is-active" onClick={() => { setState({
                ...state,
                showModal: false
              }) }}>
              <div className="modal-background"></div>
              <div className="modal-content">
                <p className="image is-4by3">
                  <img src={state.modalImage} alt={state.modalImageFilename} />
                </p>
              </div>
              <button className="modal-close is-large" aria-label="close" ></button>
            </div> : '' }
          </ScreenshotSection>
        </SectionContainer>
      </SectionComponent>
      
      <SectionComponent>
        <SectionContainer>
          <SectionHeader>
            <SectionSubtitle bold >TL;DR</SectionSubtitle>
            <SectionText>{link.fields && link.fields.Description}</SectionText>
          </SectionHeader>
          <div className="columns">
            <div className="column">
              <article class="message is-dark">
                <div class="message-header">
                  <StatHeader>Rating</StatHeader>
                </div>
                <div class="message-body">
                  <Ratings ratings={link.fields && link.fields.Rating ? link.fields.Rating : 0} />
                  {link.fields && link.fields.Review}
                </div>
              </article>
            </div>
          </div>
          <div className="columns">
            { link.fields && link.fields.Cost && link.fields.Cost.length ? <div className="column">
              <article class="message is-dark">
                <div class="message-header">
                  <StatHeader>Cost</StatHeader>
                </div>
                <div class="message-body">
                  <ul>
                    {link.fields && link.fields.Cost && link.fields.Cost.map((item, index) => 
                      <li>{link.fields.Cost[index]}</li>
                    )}
                  </ul>
                  
                </div>
              </article>
            </div> : ''}
            { link.fields && link.fields.Cost && link.fields.Cost.length ? <div className="column">
              <article class="message is-dark">
                <div class="message-header">
                  <StatHeader>Works with</StatHeader>
                </div>
                <div class="message-body">
                  
                  {link.fields && link.fields.App}
                </div>
              </article>
            </div> : ''}
          </div>
        </SectionContainer>
      </SectionComponent>
      

        { link.fields && link.fields['Review Video'] ? (
        <SectionComponent>
          <SectionContainer>
            <>
              <SectionHeader center>
                <SectionTitle>Our 2 Cents</SectionTitle>
                <SectionSubtitle>The algorithm told us to tell you to watch it</SectionSubtitle>
              </SectionHeader>
              <VideoEmbed url={link.fields && link.fields['Review Video'] ? link.fields['Review Video'] : "https://www.youtube.com/embed/YTdDqYZmdKo"} />
            </>
          </SectionContainer>
        </SectionComponent>) : ''}
        
        <VideoListSection
            color="white"
            size="medium"
            backgroundImage=""
            backgroundImageOpacity={1}
            title="Tutorials"
            subtitle="We watched the bad ones so you can only watch the good ones"
            videos={tutorials}
          />
      
      
      
    </>
  );
  
}

export default LinkPage;
