const formatDate = (date: string): string => {
  let dataFormatada = 'Desconhecido';

  const [month, day, age] = date.split('-');

  if (month && day && age) {
    dataFormatada = `${day}/${month}/${age}`;
  }

  return dataFormatada;
};

export default formatDate;
