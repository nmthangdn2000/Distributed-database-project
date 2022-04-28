const sortData = (data) => {
  return data.map((item) => {
    const id = item[Object.keys(item)[0]].match(/\d+/g)[0];
    return { id, ...item };
  });
  //   return data.sort((a, b) => {
  //     const numAId = a.EMPLOYEE_ID.split('NV')[1];
  //     const numBId = b.EMPLOYEE_ID.split('NV')[1];
  //     if (numAId === 0) return 1;
  //     else if (numBId === 0) return -1;
  //     else return numAId - numBId;
  //   });
};

export { sortData };
