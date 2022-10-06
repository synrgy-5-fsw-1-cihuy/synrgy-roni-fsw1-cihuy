function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini

  // Cara cepat
  // const shortcut = cars.filter((car) => car.available === true);
  // console.log(shortcut);

  // Manual
  for (let car of cars) {
    if (car.available === true) {
      result.push(car);
    }
  }
  console.log(result);

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
