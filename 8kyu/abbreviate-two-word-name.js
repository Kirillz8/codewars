function abbrevName(name) {
  return name
    .toUpperCase()
    .split(" ")
    .map((el) => el[0])
    .join(".");
}

console.log(abbrevName("ldjkasjlkbsajfbdasjhb laksjdbfljksadbfjladskbflj"));
abbrevName("Patrick Feenan");
abbrevName("Evan Cole");
abbrevName("P Favuzzi");
abbrevName("David Mendieta");
