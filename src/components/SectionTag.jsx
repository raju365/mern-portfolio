// Small boxed label with square corner handles, e.g. "SELECTED WORK"
const SectionTag = ({ children, light = false }) => {
  return (
    <span
      className={`handle-box bg-brand/10 px-3 py-1 text-xs uppercase tracking-[0.2em]
        ${light ? "on-light text-black/70" : "text-white/70"}`}
    >
      {children}
      <i />
    </span>
  );
};

export default SectionTag;