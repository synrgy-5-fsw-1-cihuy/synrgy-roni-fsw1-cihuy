function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

  // Cara cepat
  // const shortcut = result.sort(
  //   (previous, current) => current.year - previous.year
  // );
  // console.log(shortcut);

  // Manual
  const sortWithBubble = (cars) => {
    const temp = [...cars];
    // looping sampai berurutan
    let done = false;
    while (!done) {
      done = true;
      // index dari 0 biar ada next buat perbandingan (compare current n next) walaupun juga bisa dari index 1 (compare previous n current)
      for (let i = 0; i < temp.length - 1; i++) {
        let current = temp[i];
        let next = temp[i + 1];
        // compare current (i) dan next (i + 1)
        if (current.year < next.year) {
          done = false;
          // reorder / susun ulang
          temp[i] = temp[i + 1];
          temp[i + 1] = current;
        }
      }
    }
    return temp;
  };

  const manual = sortWithBubble(result);
  console.log(manual);

  // Rubah code ini dengan array hasil sorting secara descending
  return manual;
}
