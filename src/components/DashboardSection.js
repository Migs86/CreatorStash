import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { Link, useRouter } from "./../util/router.js";
import { useAuth } from "./../util/auth.js";
import "./DashboardSection.scss";

function DashboardSection(props) {
  const auth = useAuth();
  const router = useRouter();

  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          spaced={true}
          className="has-text-centered"
        />

        {router.query.paid && auth.user.planIsActive && (
          <article className="DashboardSection__paid-message message is-success mx-auto">
            <div className="message-body">
              You are now subscribed!  
              <span className="ml-2" role="img" aria-label="party">
                🥳
              </span>
            </div>
          </article>
        )}

        <div className="columns is-vcentered is-desktop mt-5">
          <div className="column is-6-desktop">
            <div className="content">
              <p>
                Soon you'll be able to favorite resources, review them, and submit ones we're missing.
              </p>
              <p>
                If you want to submit any cool resources, send them to me at miguel@fernando.com.
              </p>
              <p>
                In the meantime, you can subscribe to the newsletter and get updates from us there!
              </p>
              <iframe src="https://creatorstash.substack.com/embed" width="480" height="320" style={{ background: "white" }} frameborder="0" scrolling="no"></iframe>
            </div>
          </div>
          <div className="column is-1" />
          <div className="column">
            <figure className="DashboardSection__image image">
              <img
                src="https://uploads.divjoy.com/undraw-personal_settings_kihd.svg"
                alt="Illustration"
              />
            </figure>
          </div>
        </div>
        <div
          className="mx-auto has-text-centered mt-5"
          style={{
            maxWidth: "460px",
          }}
        >
          <small>
            Some helpful debug info
            <span className="ml-1" role="img" aria-label="bug">
              🐛
            </span>
          </small>
          <nav className="panel mt-3">
            <div className="panel-block is-block">
              Logged in as&nbsp;<strong>{auth.user.email}</strong>
            </div>
            <div className="panel-block is-block">
              {auth.user.stripeSubscriptionId && (
                <>
                  Subscription data
                  <br />
                  ID: <strong>{auth.user.stripeSubscriptionId}</strong>
                  <br />
                  Price ID: <strong>{auth.user.stripePriceId}</strong>
                  <br />
                  Status: <strong>{auth.user.stripeSubscriptionStatus}</strong>
                </>
              )}

              {!auth.user.stripeSubscriptionId && (
                <Link to="/pricing">Subscribe to a plan</Link>
              )}
            </div>
            <div className="panel-block is-block">
              <Link to="/settings/general">Account settings</Link>
            </div>
          </nav>
        </div>
      </div>
    </Section>
  );
}

export default DashboardSection;
