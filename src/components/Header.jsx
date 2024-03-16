import { RiMenu3Fill } from "@remixicon/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from "./Header.module.css";
// import { useState } from "react";
import NavLinks from "./NavLinks";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: aliceblue; */
  height: 10rem;
  padding: 0 3rem;
  font-size: 1.6rem;
  z-index: 2;
`;

const StyledNavList = styled.ul`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  gap: 5rem;
  margin: auto 5rem;
  list-style: none;

  @media (max-width: 980px) {
    gap: 2.5rem;
    margin: auto 1rem;
  }

  li:hover:after {
    transform: scaleX(1);
  }
  li:after {
    display: block;
    content: "";
    border-bottom: solid 3px #019fb6;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 100% 50%;
  }

  @media (max-width: 800px) {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: end;
    position: absolute;
    left: 0;
    top: 10;

    width: 90%;
    height: 40rem;
    font-size: 2rem;
    padding: 4rem;
    gap: 2rem;
    backdrop-filter: blur(20px);
    transition: all 1s;
  }
`;

const StyledHeader = styled(Link)`
  text-decoration: none;
  font-size: 2.4rem;
  color: black;
  font-weight: 600;
  cursor: pointer;
  z-index: 2;
`;

// const StyledNavMobile = styled.ul`
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: column;
//   align-items: end;
//   position: absolute;
//   width: 100%;
//   height: 40rem;
//   font-size: 2rem;
//   padding: 4rem;
//   gap: 2rem;
//   backdrop-filter: blur(20px);
//   transition: all 1s;

//   li:hover:after {
//     transform: scaleX(1);
//   }
//   li:after {
//     display: block;
//     content: "";
//     border-bottom: solid 3px #019fb6;
//     transform: scaleX(0);
//     transition: transform 250ms ease-in-out;
//     transform-origin: 100% 50%;
//   }
// `;

function Header() {
  const [openMenu, setOpenMenu] = useState();
  const isDesktop = useMediaQuery({ minWidth: 800 });

  function handleClick(event) {
    if (event) {
      setOpenMenu(false);
    }
  }

  return (
    <>
      <div className={styles.container} onMouseLeave={() => setOpenMenu(false)}>
        <StyledNav>
          <StyledHeader to="/">ChandraShekar.dev</StyledHeader>
          <RiMenu3Fill
            onMouseEnter={() => setOpenMenu(true)}
            className={styles.menuBtn}
          />
        </StyledNav>
        <div onClick={handleClick}>
          {isDesktop ? (
            <StyledNavList>
              <NavLinks />
            </StyledNavList>
          ) : (
            openMenu && (
              <StyledNavList>
                <NavLinks />
              </StyledNavList>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
