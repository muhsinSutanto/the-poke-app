import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import logo from "../../src/assets/pokemon-logo.png";

const { Header } = Layout;

const Navbar = () => {
   let location = useLocation();

   return (
      <Header style={{ display: "flex" }}>
         <div className="logo">
            <img src={logo} />
         </div>
         <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={location.pathname === "/my-pokemon" ? ["2"] : ["1"]}
         >
            <Menu.Item key="1">
               Pokemon Bank <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2">
               Cage <Link to="/my-pokemon" />
            </Menu.Item>
         </Menu>
      </Header>
   );
};

export default Navbar;
