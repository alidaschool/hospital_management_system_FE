import React from "react";
import Layout from "../Layout/Layout";
import classes from "./Header.module.scss";
import { BsPersonPlus } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import imgHeader from "../../images/header.jpg";

const Header = () => {
  return (
    <Layout>
      <section className={classes.container}>
        <div>
          <h1>
            Alida Medicals,
            <br /> Number One <br />
            Topnotch in Africa
          </h1>
          <p className={classes.container__text}>Be a part of the community that makes life better, and concerned with your health.</p>
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
      <section className={classes.content}>
        <h1>
          why you should trust us?
          get to know about us
        </h1>
        <section className={classes.content__card}>
          <div className={classes.content__card__light}>
            <BsPersonPlus className={classes.content__icon} />
            <h3>All Specialist</h3>
            <p>
              Speak with experts
              get your doubts resolved
              And the right counselling.
            </p>
          </div>
          <div className={classes.content__card__light}>
            <MdSecurity className={classes.content__icon} />
            <h3>Private and Secure</h3>
            <p>
              Your conversation is protected
              Data privacy is secured
              throughout the platform.
            </p>
          </div>
          <div className={classes.content__card__light}>
            <AiOutlineMail className={classes.content__icon} />
            <h3>Chat and Support</h3>
            <p>
              It's all about patient
              Instant chat and messaging
              We offer full support 24/7
            </p>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Header;
