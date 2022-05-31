import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Component for wrapping react-router-dom Link's component : change style with active Link
 * @component
 * @param {string} to destination to link 
 * @param {string|component} children 
 */
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

CustomLink.propTypes = {
  /**
   * Link's destination
   * @type {string}
   * @required
   */
  to: PropTypes.string.isRequired,

  /**
   * This can be a react component or a string
   * 
   * @type {string|component}
   * @required
   */
  children: PropTypes.string.isRequired,
}