import { StyledLink } from "../ui/StyledLink";

function NavLinks() {
  return (
    <>
      <li>
        <StyledLink to="/">Home</StyledLink>
      </li>
      <li>
        <StyledLink to="/experience">Experience</StyledLink>
      </li>
      <li>
        <StyledLink to="/education">Education</StyledLink>
      </li>
      <li>
        <StyledLink to="/projects">Project</StyledLink>
      </li>
      <li>
        <StyledLink to="/about">About</StyledLink>
      </li>
    </>
  );
}

export default NavLinks;
