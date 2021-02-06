import styled, { css, keyframes } from "styled-components"

export const SectionComponent = styled.section.attrs({
    className: "SectionComponent hero section is-block is-relative is-white is-medium"
})``;

export const SectionContainer = styled.div.attrs({
    className: "container "
})`
    max-width: ${props => `${props.maxWidth ? props.maxWidth : "768px"}`};
`;

export const SectionHeader = styled.header`
    &:not(:last-child) {
        margin-bottom: 3rem;
    }

`;


export const SectionTitle = styled.h1.attrs({
    className: "title has-text-weight-bold is-spaced is-3"
})`
    &:not(:first-child) {
        margin-top: 1rem;
    }
`;

export const CategoryTitle = styled.h1.attrs({
    className: "title has-text-weight-bold is-spaced is-3"
})`
    font-size: 1rem;
    margin-bottom: 1rem !important;
    &:not(:first-child) {
        margin-top: 4rem;
    }
`;

export const SectionSubtitle = styled.h1.attrs({
    className: "subtitle"
})`
    font-family: ${props => `${props.bold ? "Stolzl Bold" : "Stolzl Book"}`};
    font-size: 1.5rem;
    max-width: 700px;
    display: block;
`;
export const SectionText = styled.p`
    font-size: 1.25rem;
`;


export const StatHeader = styled.h2`
    width: 100%;
    text-align: center;
`;


export const SectionDescription = styled.p.attrs({
    className: "subtitle"
})`
    max-width: 700px;
    display: block;
`;

export const SectionParagraph = styled.p.attrs({
    className: "subtitle"
})`
    max-width: 700px;
    margin: 0px auto;
    display: block;
`;

export const SectionLink = styled.a.attrs({
    className: "subtitle"
})`
    font-size: 1rem;
    text-align: center;
    max-width: 200px;
    display: inline-block;
    margin-bottom: 1rem;
`;

export const ScreenshotSection = styled.div.attrs({
    className: "columns is-variable is-4 is-multiline"
})`
    margin-bottom: 1rem;
`;

export const RatingsSection = styled.div.attrs({
    className: "has-text-centered"
})`
    margin: 0px auto;
    width: 100%;
    max-width: 700px;
    padding-bottom: 1rem;
`;

export const RatingIconNumber = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    width: 24px;
    line-height: 24px;
    font-size: 0.75rem;
    vertical-align: middle;
`;
export const RatingIconContainer = styled.div`
    position: relative;
    height: 24x;
    width: 24px;
    margin-left: 8px;
    display: inline;
`;
export const CardDescriptionParagraph = styled.p`
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;
export const TagValueSection = styled.div`
    margin-bottom: 0.8em;
`;

export const Tag = styled.span.attrs({
    className: "tag is-light is-info"
})`
    &:not(:last-child) {
        margin-right: 0.5rem;
    }
`;

