const a = () => {
  return "Hello " + b();
};

const b = () => {
  return "there, " + c();
};

const c = () => {
  return "It's a beautiful day!";
};

const result = a();

console.log(result);
