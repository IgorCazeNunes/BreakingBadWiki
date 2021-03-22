const formatDate = (date: string): string => {
  const [MM, dd, aaaa] = date.split('-');

  return `${dd}/${MM}/${aaaa}`;
};

export default formatDate;
