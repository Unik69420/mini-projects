const dis = document.getElementById("display");
let button = (val) => {
  dis.value += val;
};
let clearScr = () => {
  dis.value = " ";
};

let result = () => {
  try {
    dis.value = eval(dis.value);
  } catch (e) {
    dis.value = "error";
  }
};
let del = () => {
  let str = dis.value;
  dis.value = str.slice(0, -1);
};
