const asyncFn = async () => {
  console.log("asyncFn bar.js");
};

export const log = () => {
  console.log("log bar.js");
  asyncFn();
};
