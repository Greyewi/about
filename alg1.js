const add = (a) => {
  let sum = a;

  const func = (b) => {
    sum += b;
    return func;
  };

  func.valueOf = () => sum;

  return func;
};

console.log(add(2)(3)); //