//print Hello 5 five times

const message1 = () => {
  console.log("Hello");
  message2();
};

const message2 = () => {
  console.log("Hello");
  message3();
};
const message3 = () => {
  console.log("Hello");
  message4();
};
const message4 = () => {
  console.log("Hello");
  message5();
};

const message5 = () => {
  console.log("Hello");
};

message1();
