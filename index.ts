/** @format */

export const formatDate = (date: Date) =>
  date.toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
