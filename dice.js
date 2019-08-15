const { DiceRoller } = require('rpg-dice-roller');

exports.dice = (dice) => {
  if(dice[1].toLowerCase().includes('d1')){return 'Error: d1 is not valid';}
  const diceRoller = new DiceRoller();
  diceRoller.roll(dice[1]);
  let latestRoll = diceRoller.log.shift();
  return `${latestRoll}`;
  //TODO: Come up with an actually good result output format
}