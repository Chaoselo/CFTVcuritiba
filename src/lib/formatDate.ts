const MONTHS_PT = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

export function formatDatePt(iso: string): string {
  const [year, monthStr, dayStr] = iso.split("-");
  const day = parseInt(dayStr, 10);
  const month = MONTHS_PT[parseInt(monthStr, 10) - 1] ?? "";
  return `${day} de ${month} de ${year}`;
}
