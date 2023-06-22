export const getHeroesByName = (array, name = "") => {
  name = name.toLocaleLowerCase().trim();

  if (name.length  < 1) return array;

  return array.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
