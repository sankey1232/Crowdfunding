import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    <Menu inverted style={{ marginTop: 10 + "px" }}  backgroundColor="blue">
      <Link route="/">
        <a>
          <Menu.Item>CrowdFund</Menu.Item>
        </a>
      </Link>
      <Menu.Menu position="right">
        <Menu.Item>Campaigns</Menu.Item>
        <Menu.Item>+</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
