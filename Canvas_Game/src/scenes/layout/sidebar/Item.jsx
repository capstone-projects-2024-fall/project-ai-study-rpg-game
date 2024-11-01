/* eslint-disable react/prop-types */
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> cca5d74aa5064df46b9fe144826e622a75f7ab59
import { MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";

const Item = ({ title, path, icon }) => {
  const location = useLocation();
  return (
    <MenuItem
      component={<Link to={path} />}
      to={path}
      icon={icon}
      rootStyles={{
        color: path === location.pathname && "#6870fa",
      }}
    >
      {title}
    </MenuItem>
  );
};

export default Item;
