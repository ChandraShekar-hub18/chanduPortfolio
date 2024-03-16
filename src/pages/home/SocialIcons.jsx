import { NavLink } from "react-router-dom";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "@remixicon/react";

function SocialIcons() {
  return (
    <>
      <NavLink to="https://github.com/ChandraShekar-hub18">
        <RiGithubFill
          size={43} // set custom `width` and `height`
          color="black" // set `fill` color
          className="my-icon" // add custom class name
        />
      </NavLink>
      <NavLink to="https://www.linkedin.com/in/chandra-shekar-m-961165173/">
        <RiLinkedinBoxFill
          size={43} // set custom `width` and `height`
          color="black" // set `fill` color
          className="my-icon" // add custom class name
        />
      </NavLink>
      <NavLink to="https://twitter.com/Chandra54561208">
        <RiTwitterFill size={43} color="black" className="" />
      </NavLink>
      <NavLink to="https://www.instagram.com/chandra_shekar._._/">
        <RiInstagramFill size={43} color="black" />
      </NavLink>
    </>
  );
}

export default SocialIcons;
