import React, {useState, useEffect} from "react";
import HeroSection from "./../components/HeroSection";
import Categories from "./../components/Categories";
import UseCases from "./../components/UseCases";
import NewsletterSection from "./../components/NewsletterSection";
import ContentCardsSection from "./../components/ContentCardsSection";
import UsersSection from "./../components/UsersSection";



function IndexPage(props) {
  const {
    records
  } = props;
  useEffect(() => {
    console.log('index records ', records)
  }, [records])

  
  return (
    <>
      <HeroSection
        items={records}
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Everything you need to succeed as a creator"
        subtitle="A massive compilation of resources to give fuel to your journey as a creator or entrepreneur."
        image="https://dl.airtable.com/.attachments/ca643f9a5257c1fd19297bf55123bde8/d9aabd5d/undraw_video_influencer_9oyy.svg"
        buttonText="Show Me Something Cool"
        buttonColor="primary"
        buttonInverted={false}
        buttonPath={'/link'}
      />
      <Categories
        items={records}
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Categories"
        subtitle="Find some cool resources for your next project."
      />
      <UseCases
        items={records}
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Use Cases"
        subtitle="Find help for a specific problem."
      />
      <NewsletterSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="primary"
        buttonInverted={false}
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
      <ContentCardsSection
        items={records}
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="All Top Picks"
        subtitle=""
      />
      <UsersSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Join other creators and entrepreneurs"
        subtitle=""
      />
      <NewsletterSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="primary"
        buttonInverted={false}
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
    </>
  );
}

export default IndexPage;
