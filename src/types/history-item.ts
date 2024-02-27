export type HistoryItemType = {
  id: string;
  company: {
    name: string;
    url: string;
  };
  position: string;
  startDate: string;
  endDate: string;
  lede: string;
  contributions: string[];
  tags?: string[];
};
