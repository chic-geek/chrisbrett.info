interface DateObject {
  startDate: string;
  endDate?: string;
}

export function formatDateRange(obj: DateObject): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  };

  const startDate = new Date(obj.startDate);
  const formattedStartDate = startDate.toLocaleString("en-US", options);

  if (!obj.endDate) {
    return `${formattedStartDate} - present`;
  }

  const endDate = new Date(obj.endDate);
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
