function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

  // Cara cepat
  // const shortcut = result.sort(
  //   (previous, current) => previous.year - current.year
  // );
  // console.log(shortcut);

  // Manual
  // looping sampai berurutan
  let done = false;
  while (!done) {
    done = true;
    // index dari 1 biar ada previous buat perbandingan (compare previous n current) walaupun juga bisa dari index 0 (compare current n next)
    for (let i = 1; i < result.length; i++) {
      let previous = i - 1;
      let current = i;
      // compare previous (i - 1) dan current (i)
      if (result[previous].year > result[current].year) {
        done = false;
        let temp = result[previous];
        // reorder / susun ulang
        result[previous] = result[current];
        result[current] = temp;
      }
    }
  }
  console.log(result);

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
