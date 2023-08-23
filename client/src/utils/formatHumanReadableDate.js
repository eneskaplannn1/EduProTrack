export default function formatHumanReadableDate(date) {
  return new Intl.DateTimeFormat("fr-CA").format(new Date(date));
}
