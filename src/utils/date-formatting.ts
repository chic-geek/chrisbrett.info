interface DateObject {
  startDate: string;
  endDate: string;
}

export function formatDateRange(obj: DateObject): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "2-digit",
  };

  const startDate = new Date(obj.startDate);
  const endDate = new Date(obj.endDate);

  const formattedStartDate = startDate.toLocaleString("en-US", options);
  const formattedEndDate = endDate.toLocaleString("en-US", options);

  return `${formattedStartDate} - ${formattedEndDate}`;
}

export function articleFormattedDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
