const SectionShell = ({ id, className = "", containerClassName = "", children }) => {
  return (
    <section id={id} className={className}>
      <div className={`container-base ${containerClassName}`.trim()}>{children}</div>
    </section>
  );
};

export default SectionShell;
