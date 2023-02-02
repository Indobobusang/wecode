const even = () => {
  let result = [];
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  console.log(result);
};

even();
