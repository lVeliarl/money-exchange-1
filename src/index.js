module.exports = function makeExchange(currency) {
  let coins = {};
  if (currency > 10000) {
    return  {error: "You are rich, my friend! We don't have so much coins for exchange"};
  } 
  else if (currency <= 0) {
    return {};
  }
  while (currency / 50 >= 1) {
    coins.H = Math.floor(currency / 50);
    currency = currency - coins.H * 50;
  }
  while (currency / 25 >= 1) {
    coins.Q = Math.floor(currency / 25);
    currency = currency  - coins.Q * 25;
  }
  while (currency / 10 >= 1) {
    coins.D = Math.floor(currency / 10);
    currency = currency - coins.D * 10;
  }
  while (currency / 5 >= 1) {
    coins.N = Math.floor(currency / 5);
    currency = currency - coins.N * 5;
  }
  if (currency >= 1) {
    coins.P = currency;
  }
  return coins;
}
