import "./style.css";

export const Scene = ({ frameImageSrc, frameText }) => (
  <div className="h-full">
    <div className={`absolute top-[40px] left-[5%]`}>
      <p className="scene-text text-[1.5vw]">{frameText}</p>
    </div>
    <div className="h-full">
      <img className="w-full h-full" src={frameImageSrc} alt="" />
    </div>
  </div>
);
