import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default function CustomLink({ children, to, ...props }) {
  // let resolved = useResolvedPath(to);
  // let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <>
      <Link
        // style={{ color: match ? "#e60000" : "white" }}
        to=""
        {...props}
      >
        {children}
      </Link>
    </>
  );
}
