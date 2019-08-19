//still not working. Under construction
exports.explore = (environment) => {
    environment = environment[1];
    
    const arr = finds[environment];
    if (!arr) return `Error: ${environment} is not an environment`;
    const rolls = {
      success: Math.floor(Math.random() * 5),
      result: Math.floor(Math.random() * arr.length)
    };
    if (rolls.success < 1) {
      return "Found nothing";
    } else {
      return arr[rolls.result];
    }
}

const finds = {
  'space' : [
      `The ship has a fire in one of it's sections`,
      `The system that maintains the ship's position relative to the nearest celestial body is offline`,
      `The power to a section of the ship has been cut by a surge`,
      `The ship systems have a glitch resulting in a bumpy ride`,
      `The artificial gravity is at 50% power`,
      `The shields have gone down. Micrometeorites can be heard pinging off of the ship occasionally`,
      `The ship alarms falsely go off and lock-down is triggered`,
      `The warpdrive fails`,
      `The main thrusters fail`,
      `The maneuvering thrusters fail`,
      `The cargo bay doors break open, releasing cargo`,
      `The temperature control malfunctions, resulting in wild variation of temperature between rooms`,
      `The doors all open except airlocks`,
      `The airlocks all open`,
      `The defensive systems malfunction, all are disabled`,
      `The assistive AI is offline`,
      `The Solar Positioning System is offline`,
      `The RADAR is offline`,

      `The ship skims a meteor and the shields barely take it`,
      `The ship found an uninhabitable planet`,
      `The ship found an empty inhabitable planet`,
      `The ship found a planet full of life, none of it intelligent`,
      `The ship found a planet with intelligent, prespace-age life`,
      `The ship found a gas giant`,
      `The ship found a planet with space-age life`,
      `The ship found a colony planet`,
      `The ship found a planet after the extinction of intelligent life`,
      `The ship found an old satellite sent to space at the dawn of a civilization's space age`,
      `The ship found a factory planet`,
      `The ship found a derelict ship`,
      `The ship found the debris of a battle`,
      `The ship found an asteroid field`,
      `The ship found a mine field`,
      `The ship found a derelict space station`,
      `The ship found a self-sufficient space station`,
      `The ship passes a stray satellite`,
      `The ship passes a stray rocket from an ancient battle`,
      `The ship finds long lost cargo`,

      `The ship encounters a giant planet-eating lifeform`,
      `The ship encounters a patrol of ${Math.round(Math.random() * 6)} fighters`,
      `The ship encounters a group of ${Math.round(Math.random() * 20)} freight ships`,
      `The ship encounters a capital ship`,
      `The ship encounters a colony ship`,
      `The ship encounters a sector of ${Math.round(Math.random() * 20)} space stations`,
      `The ship encounters an explorer ship`,
      `The ship encounters a group of ${Math.round(Math.random() * 20)} escape pods`,
      `The ship encounters a luxury ship`,
      `The ship encounters a diplomat ship`,
      `The ship encounters a pirate carrier disguised as a freighter`,
      `The ship encounters an organic ship`,
      `The ship encounters an experimental ship`,
      `The ship encounters a robot floating through space`,
      `The ship encounters an emergency ship`,
      `The ship encounters a repair ship`,
      `The ship encounters a mining ship`,
      `The ship encounters a ship built into an asteroid`,
      `The ship encounters a salvage ship`,
      `The ship encounters a civilian transport ship analogous to a bus`,

      `The ship found a dyson sphere`,
      `The ship is being followed by police that believe something on the ship is illegal`,
      `The ship finds a planet under siege`,
      `The ship finds a ship that needs to be escorted through space`,
      `The ship finds a heavily damaged ship asking for repairs`,
      `The ship detects an unknown signal coming from a nearby station`,
      `The ship detects a ship coming out of hyperspace being followed`,
      `The ship finds a science ship looking for help with an experiment nearby`,
      `The ship receives word that a wormhole has opened nearby and a fleet is being put together to explore the other side`,
      `The ship has something strange aboard`,
      `The ship finds a ship so large it bends reality around it in order to keep from collapsing in on itself`,
      `The ship finds an abandoned colony ship which still has animals onboard. They have evolved to survive in the strange environment`,
      `The ship finds a space station inhabited by those exiled from their own species`,
      `The ship received word of a star system about to be consumed by its own star. The reward for evacuating the only colony there is substantial enough to cause fighting over who will`,
      `The ship scanners detect a space suit with low vital signs`,
      `The ship detects a massive heat bloom under the polar ice cap of a nearby planet`,
      `The ship finds a ship made entirely of greenhouses wrapped around an artificial light source. There are many lifesigns but it has no signs of habitation`,
      `The ship communications are flooded by gibberish from a nearby colony`,
      `The ship enters a nebula and the ship readings go haywire.`,
      `The ship sees a ship eject its cargo before self-destructing`
  ]
};