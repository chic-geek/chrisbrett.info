import { useState } from "react";
import formatDateRange from "@/utils/date-formatting";
import { HistoryItemType } from ".";

type HistoryListItemProps = {
  history: HistoryItemType;
};

const contractedStyles = {
  maskImage: `linear-gradient(to bottom, black 0%, transparent 100%)`,
  maxHeight: `105px`,
  overflow: `hidden`,
};

const expandedStyles = {
  maskImage: `none`,
  maxHeight: `100%`,
  overflow: `visible`,
};

export default function HistoryListItem({ history }: HistoryListItemProps) {
  const { company, position, startDate, endDate, lede, contributions } =
    history;

  const formattedDate = formatDateRange({ startDate, endDate });

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="history-item">
      <div>
        <h3 className="history-item-meta">
          <a className="history-item-meta-name" href={company.url}>
            {company.name}
          </a>
          <span className="history-item-meta-role">{position}</span>
          <span className="history-item-meta-timeserved">{formattedDate}</span>
        </h3>
      </div>

      <div>
        <div className="history-item-body">
          <p className="history-item-body-intro">{lede}</p>
          <p>Key contributions include:</p>
          <ul style={!isExpanded ? contractedStyles : expandedStyles}>
            {contributions.map((contribution, arrIndex) => (
              <li key={arrIndex}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
                <div>{contribution}</div>
              </li>
            ))}
          </ul>
          <button
            className="history-item-expand-button"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {!isExpanded ? "Show more" : "Show less"}
          </button>
        </div>
      </div>
    </section>
  );
}
