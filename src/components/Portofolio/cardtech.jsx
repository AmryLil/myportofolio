import React from "react";

const Cardtech = ({ title, src, style, Classname }) => {
  return (
    <div
      style={style}
      className={`border border-green-400 gap-2 h-9 rounded shadow-sm flex items-center justify-start p-1 py-2 text-slate-50 cursor-pointer hover:bg-green-500 transition-all hover:scale-105 hover:shadow-off hover:shadow-green-500 hover:text-slate-900 ${Classname} `}
    >
      <img
        src={src}
        alt={title}
        className={`w-6 h-6 object-contain filter brightness-110 drop-shadow-[1px_1px_0_rgba(0,0,0,1)]`}
      />
      <div className="text-xs font-bold tracking-wide">{title}</div>
      {/* <div className="text-xs">{level}</div> */}
    </div>
  );
};

export default Cardtech;
