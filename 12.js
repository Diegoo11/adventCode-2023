/* eslint-disable no-param-reassign */
const data = `???.### 1,1,3
.??..??...?##. 1,1,3
?#?#?#?#?#?#?#? 1,3,1,6
????.#...#... 4,1,1
????.######..#####. 1,6,5
?###???????? 3,2,1`;

function res(input) {
  let objs = input.split('\n').map((line) => {
    // eslint-disable-next-line prefer-const
    let [str, nums] = line.split(' ');
    str += '.';
    nums = nums.split(',').map((n) => Number(n));
    console.log(str, nums);
    return {
      str, nums,
    };
  });

  objs = objs.map((obj) => {
    const ubis = [];
    for (let i = 0; i < obj.str.length; i += 1) {
      if (obj.str[i] === '?' || obj.str[i] === '#') {
        let init;
        let end;
        let j = i;
        while (obj.str[j] !== '.' && j >= 0) {
          init = j;
          j -= 1;
        }
        j += 1;
        while (obj.str[j] !== '.' && j < obj.str.length) {
          end = j;
          j += 1;
        }
        i = j;
        ubis.push({ init, end });
      }
    }
    return {
      str: obj.str,
      nums: obj.nums,
      ubis,
    };
  });

  objs.forEach((obj) => {
    obj.ubis = obj.ubis.filter((ubi) => {
      const str = obj.str.substring(ubi.init, ubi.end + 1);
      if (str.split('').every((c) => c === '#')) {
        obj.nums = obj.nums.filter((n) => n !== str.length); // puede haber error
        return false;
      }
      return true;
    });
  });

  objs.forEach((obj) => {
    obj.snipets = [];
    obj.ubis.forEach((ubi) => {
      const str = obj.str.substring(ubi.init, ubi.end + 1);
      obj.snipets.push(str);
    });
  });

  

  return objs;
}

console.log(res(data));
// 2 = 1
// 3 = 2
// 4 = 2
// 5 = 3
// 6 = 3
// 7 = 4
// Math.ceil(n / 2);
