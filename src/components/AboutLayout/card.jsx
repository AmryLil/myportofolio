const SkillCard = ({ title, src, style, Classname }) => {
  return (
    <div
      style={style}
      className={`border border-green-400 gap-2 h-11 rounded shadow-sm flex items-center justify-start p-2 py-5 text-slate-50 cursor-pointer hover:bg-green-500 transition-all hover:scale-105 hover:shadow-off hover:shadow-green-500 hover:text-slate-900 ${Classname} `}
    >
      <img
        src={src}
        alt={title}
        className={`w-8 h-8 object-contain filter  drop-shadow-[1px_1px_0_rgba(0,0,0,1)]`}
      />
      <div className="text-sm font-bold">{title}</div>
      {/* <div className="text-xs">{level}</div> */}
    </div>
  );
};
export default SkillCard;
