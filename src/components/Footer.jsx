import styled from 'styled-components';
import { InstagramLogo } from 'phosphor-react';
import { FaFacebook, FaLinkedin, FaMailchimp, FaTiktok } from 'react-icons/fa';

const StyledFooter = styled.footer`
  background-color: #f5f5f5;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  height: 100%;

  svg {
    margin-bottom: 0.5rem;
    font-size: 32px; /* Increase the icon size */
  }
`;

const StyledLink = styled.a`
  font-weight: 600;
  color: #4a5568;
  transition: color 0.3s ease;
  display: flex; /* Apply flexbox to the link */
  flex-direction: column; /* Align both icon and text vertically */
  align-items: center; /* Center items horizontally */
  text-align: center; /* Center text horizontally */
  width: 100%; /* Ensure link takes full width */

  &:hover {
    color: #2d3748;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <IconContainer>
        <StyledLink
          href="https://www.instagram.com/easycharge_jc/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramLogo size={32} />
          Follow us on Instagram
        </StyledLink>
      </IconContainer>
      <IconContainer>
        <StyledLink
          href="https://www.linkedin.com/in/easycharge-jc-3a27802a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&original_referer=https%3A%2F%2Flinktr.ee%2F"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={32} />
          Follow on LinkedIn
        </StyledLink>
      </IconContainer>
      <IconContainer>
        <StyledLink
          href="https://www.tiktok.com/@easycharge_jc?_t=8hwana6xjfo&_r=1"
          target="_blank"
          rel="noreferrer"
        >
          <FaTiktok size={32} />
          Follow on TikTok
        </StyledLink>
      </IconContainer>
      <IconContainer>
        <StyledLink
          href="https://www.facebook.com/people/EasyCharge-Jc/pfbid036zyuhy1GQvVZTZQdqoiP45cMowoVPcNpNdS92MGMoXM69agb8WnuvcXk9699W5oGl/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook size={32} />
          Follow on Facebook
        </StyledLink>
      </IconContainer>
      <IconContainer>
        <StyledLink href="mailto:office@easycharge-jc.com">
          <FaMailchimp size={32} />
          Contact: office@easycharge-jc.com
        </StyledLink>
      </IconContainer>
    </StyledFooter>
  );
}

export default Footer;
