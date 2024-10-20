import React from "react";
import styled from "styled-components";
import { FaTwitter, FaLinkedin, FaFileAlt, FaTelegram, FaEnvelope, FaGitlab } from 'react-icons/fa'; // Importing icons for social links

const primaryColor = "#27428B"; // Primary color of the Cyber4nt website

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 0 15px;
`;

const Title = styled.h1`
  color: var(--ifm-font-color-base); // Use the base font color
  font-size: 1.5em; // Adjust font size similar to blog titles
  margin-bottom: 20px;
  text-align: left; // Align text to the left
  font-family: var(--ifm-font-family-base); // Use the base font family
`;

// Styled component for the horizontal line
const HorizontalLine = styled.hr`
  border: 0;
  height: 1px;
  background: #e0e0e0; // You can adjust the color as needed
  margin-bottom: 20px; // Adjust spacing as needed
`;

const Content = styled.div`
  font-size: var(--ifm-font-size-base); // Use the base font size
  color: var(--ifm-font-color-base); // Use the secondary font color
  line-height: 1.6; // Adjust line height to match blog content
  font-family: var(--ifm-font-family-base); // Use the base font family
`;

const ListItem = styled.li`
  margin-bottom: 15px;
  list-style-type: disc; // Adds bullet points
  padding-left: 20px; // Adds space before the bullet point
`;

const SocialLink = styled.a`
  color: var(--icon-color); /* Use CSS variable for color */
  margin-right: 10px;
  margin-left: 10px;
  &:hover {
    text-decoration: underline;
    color: #1A3D7C; 
  }
`;


const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

function AboutMe() {
  return (
    <Container>
      <Title>Defending digital assets.</Title>
      <Content>
        <p>🖐️ Hey, I'm Elias, a Cyber Security Engineer.</p>
        <p>I am fascinated by <span style={{backgroundColor: 'var(--tech-bg-color)'}}>tech</span>, in love with <span style={{backgroundColor: 'var(--cyber-security-bg-color)'}}>cyber security</span>. Switched roles to understand how everything works from the inside. </p>        
        <p>What I do:</p>
        <ul>
          <ListItem><strong>Cyber Security</strong><br />Raw logs ➡️ Clear, actionable reports</ListItem>
          <ListItem><strong>Cloud</strong><br />Building secure, scalable cloud solutions 💨</ListItem>
          <ListItem><strong>Python and Automation</strong><br />Coding and stuff 💾</ListItem>
          <ListItem><strong>Ambient and Hiking</strong><br />Balance and inspiration 🏞️</ListItem>
        </ul>
        <p>Join me on this exciting journey!</p>
        <IconContainer>
          <SocialLink href="/cv"><FaFileAlt size={25} /></SocialLink>
          <SocialLink href="https://gitlab.com/ant6581"><FaGitlab size={25} /></SocialLink>
          <SocialLink href="https://t.me/Elias_6581"><FaTelegram size={25} /></SocialLink>
          <SocialLink href="https://twitter.com/cyber4nt_x"><FaTwitter size={25} /></SocialLink>
          <SocialLink href="mailto:cyber4nt@gmail.com"><FaEnvelope size={25} /></SocialLink>
          <SocialLink href="https://cy.linkedin.com/in/ilias-antoniadis"><FaLinkedin size={25} /></SocialLink>
        </IconContainer>
      </Content>
      <HorizontalLine />
    </Container>
  );
}

export default AboutMe;
