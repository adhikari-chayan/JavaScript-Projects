// Task 4: get the neigher countries of Columbia

const fetchCountry = async (alpha3Code) => {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${alpha3Code}`);

    const data = await res.json();

    return data[0];
  } catch (error) {
    console.log(error);
  }
};

const fetchCountryAndNeighbors = async () => {
  const columbia = await fetchCountry("col");

  const neighbors = await Promise.all(
    columbia.borders.map((border) => fetchCountry(border))
  );

  console.log(neighbors);
};

fetchCountryAndNeighbors();