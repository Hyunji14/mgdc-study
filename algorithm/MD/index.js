function solution(my_string, queries) {
  for (let i = 0; i < queries.length; i++) {
    const idx = queries[i];

    const first = idx[0];
    const second = idx[1];

    let my_arr = my_string.split("");

    for (let j = first, k = second; j < k; j++, k--) {
      const temp = my_arr[j];
      my_arr[j] = my_arr[k];
      my_arr[k] = temp;
    }
  }
}
