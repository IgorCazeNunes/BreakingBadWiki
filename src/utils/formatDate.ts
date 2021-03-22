const formatDate = (date: string): string => {
  let dataFormatada = 'Desconhecida';

  if (!(date === 'Unknown')) {
    const [month, day, age] = date.split('-');

    dataFormatada = `${day}/${month}/${age}`;
  }

  return dataFormatada;
};

export default formatDate;
