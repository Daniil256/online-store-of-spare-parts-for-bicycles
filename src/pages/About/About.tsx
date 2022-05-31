import React, { FC } from "react";
import "./About.css";

export const About: FC = () => {
  return (
    <div className="about content pink">
      <h3>О магазине</h3>
      <h4>Магазин (велосипеды, аксессуары, запчасти, тюнинг)</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde fugiat
        pariatur vero, quidem impedit voluptate ab nesciunt obcaecati natus
        repellat, culpa nemo eius. Quia placeat ut corrupti perspiciatis,
        similique esse.
      </p>
      <iframe
        className="google_map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11360.801124729303!2d50.21021941859848!3d53.2301431668506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x416619363c52adb7%3A0x680eb1bc8f52b1a4!2z0J_QsNGA0Log0KXQsNGD0YE!5e0!3m2!1sru!2sru!4v1636367569297!5m2!1sru!2sru"
        loading="lazy"
      ></iframe>

      <ul className="block__social">
        <li className="social social__1">
          <img className="img_social" src="./icons/facbook.png" alt="social" />
        </li>
        <li className="social social__2">
          <img className="img_social" src="./icons/google.png" alt="social" />
        </li>
        <li className="social social__3">
          <img className="img_social" src="./icons/inst.png" alt="social" />
        </li>
        <li className="social social__4">
          <img className="img_social" src="./icons/teleg.png" alt="social" />
        </li>
        <li className="social social__5">
          <img className="img_social" src="./icons/vk.png" alt="social" />
        </li>
        <li className="social social__6">
          <img className="img_social" src="./icons/youtube.png" alt="social" />
        </li>
      </ul>
    </div>
  );
};
