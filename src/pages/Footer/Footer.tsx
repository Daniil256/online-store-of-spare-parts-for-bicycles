import "./Footer.scss";
import React, { FC } from "react";
export const Footer: FC = () => {
  return (
    <footer className="footer">
      <p>
        &copy; Велозапчасти, <time>2021</time> Интернет магазин запчастей для
        велосипедов ИНН 61655757535858 ОГРНИП 3180004940-69390 Заказы
        отправляются из г. Самара
      </p>
    </footer>
  );
};
