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
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < cars.length; i++) {
        if (cars[i - 1].year < cars[i].year) {
          done = false;
          let temp = cars[i - 1];
          cars[i - 1] = cars[i];
          cars[i] = temp;
        }
      }
    }
    return cars;
  };

  const manual = sortWithBubble(result);
  console.log(manual);

  // Rubah code ini dengan array hasil sorting secara descending
  return manual;
}
