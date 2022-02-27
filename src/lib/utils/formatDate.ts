export const formatDate = (value: Date | string) => {
  if (!value) return "";
  const dateString = new Date().toLocaleDateString().split('/');
  const day = Number(dateString[0]) < 10 ? `0${dateString[0]}` : dateString[0]
  return `${dateString[1]}.${day}.${dateString[2]}`;
};
