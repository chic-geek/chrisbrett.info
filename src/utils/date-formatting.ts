interface DateObject {
  startDate: string;
  endDate: string;
}

export default function formatDateRange(obj: DateObject): string {
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
