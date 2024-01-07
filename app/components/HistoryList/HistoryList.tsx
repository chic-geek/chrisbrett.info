type HistoryListProps = {
  children: React.ReactNode;
};

export default function HistoryList({ children }: HistoryListProps) {
  return (
    <section className="history">
      <h2 className="history-heading">
        <div className="constrained">
          <span className="history-heading-text">Recent history</span>
        </div>
      </h2>

      <div className="constrained">{children}</div>
    </section>
  );
}
