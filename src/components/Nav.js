import React from "react";
import { Form, NavLink } from "react-router-dom";

import { TrashIcon } from "@heroicons/react/16/solid";

import logomark from "../assests/logomark.svg";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go To Home">
        <img src={logomark} alt="" height={30}></img>
        <span>Home Budget</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="logout"
          onSubmit={(event) => {
            if (!window.confirm("Delete all user data")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
