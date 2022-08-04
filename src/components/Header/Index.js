import React from "react";
import Layout from "../Layout/Layout";
import classes from './Header.module.scss';
import imgHeader from "../../images/header.jpg";

const Header = () => {
  return (
    <Layout>
      <section className={classes.container}>
        <div>
          <p className={classes.container__text}>Alida Medicals,<br /> Number One <br />Topnotch in Africa</p>
          <button className={classes.container__btn}>Sign Up</button>
        </div>
        <div>
          <img
            src={imgHeader}
            alt="doctor-patient-nurse"
            className={classes.container__img}
          />
        </div>
      </section>
    </Layout>
  );
};

export default Header;
