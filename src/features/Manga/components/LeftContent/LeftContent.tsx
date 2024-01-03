import DropDown from "components/DropDown/DropDown";

import c from "./LeftContent.module.scss";

interface LeftContentProps {
  src: string | undefined;
}

const LeftContent = ({ src }: LeftContentProps) => {
  return (
    <div className={c.leftContent}>
      <div className={c.container}>
        <div className={c.image}>
          <img src={src} alt="" />
        </div>
        <div className={c.buttons}>
          <button className={c.link}>Читать</button>
          <DropDown
            value="Добавить в закладки"
            options={["Читаю", "Буду читать", "Прочитано", "Брошено"]}
          />
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
