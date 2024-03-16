import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 10rem;
  background-color: #31363f;
  color: #fff;
  text-align: center;
  padding: 2rem;
  font-size: 2rem;
  line-height: 4rem;
`;

function Footer() {
  return <StyledFooter>Made with ❤️ by chandra shekar</StyledFooter>;
}

export default Footer;
