const input = {
  times: [46807866],
  distance: [214117714021024],
};
/*
const input = {
  times: [7, 15, 30],
  distance: [9, 40, 200],
};
*/
function res(data) {
  const response = [];

  for (let i = 0; i < data.times.length; i += 1) {
    response[i] = 0;
    for (let j = 0; j < data.times[i]; j += 1) {
      if ((data.times[i] - j) * j > data.distance[i]) response[i] += 1;
    }
  }
  return response.reduce((acc, val) => acc * val, 1);
}

console.log(res(input));
