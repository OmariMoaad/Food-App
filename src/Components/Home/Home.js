import React from "react";
import Button from '../UIi/Button/Button';
import Cardd from "../UIi/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <Cardd className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={props.onLogout}> Log out</Button>
    </Cardd>
  );
};

export default Home;
