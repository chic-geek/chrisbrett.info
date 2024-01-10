type CodeExamplesListProps = {
  children: React.ReactNode;
};

export default function CodeExamplesList({ children }: CodeExamplesListProps) {
  return (
    <section className="code-examples">
       <h2 className="history-heading">
        <div className="constrained">
          <span className="history-heading-text">Code challenges</span>
        </div>
      </h2>

      <div className="constrained">
        <div className="code-examples-intro">
          <h3>Let me also give you a peek into how I&apos;ve tackled a few coding challenges previously.</h3>
          <p><span className="bold">Note:</span> Organisational references are intentionally omitted to maintain a degree of confidentiality, as these challenges may still be in use.</p>
        </div>
        <div className="code-examples-container">
          {children}
        </div>
      </div>
    </section>
  );
}