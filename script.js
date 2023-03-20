class AlienShip {
  constructor(hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
}

const alienShips = [];
for (let i = 1; i <= 6; i++) {
  const hull = Math.floor(Math.random() * (7 - 3) + 3);
  const firepower = Math.floor(Math.random() * (5 - 2) + 2);
  const accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
  const alienShipItem = new AlienShip(hull, firepower, accuracy);
  alienShips.push(alienShipItem);
}
// console.log(alienShips[1].hull);

const userShip = {
  name: "USS",
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
};

let currentAlienIndex = 0;

while (alienShips.length > currentAlienIndex) {
  let userInput = "attack";

  function userAttack() {
    if (currentAlienIndex === 0 && alienShips.hull < 6) {
      console.log(`The battle between you and Alien fleet is about to start...

      You get to fire first!
      `);
    } else if (alienShips.hull > 3) {
      console.log(`
      Continue battling Alien ship #${currentAlienIndex}`);
    }

    if (Math.random() <= userShip.accuracy) {
      // The alert and the prompt are not working properly

      // if (currentAlienIndex === 0) {
      //     let welcome = alert("Are you ready for the battale between USS-1 and the Alien Fleet?")
      //       console.log(welcome);

      // } else
      //  if (currentAlienIndex !== 0) {
      //   let userInput = prompt(`Would you like to attack or retreat? Please type below`)
      //     if(userInput === "retreat"){
      //       console.log(`You've retreated, game over.`);
      //       console.log(`You've retreated, game over.`);
      //       // break
      //     } else {
      //       return userAttack()
      //     }

      //   }

      console.log(`
    You are now battling Alien ship #${currentAlienIndex}`);

      // console.log(alienShips[currentAlienIndex].hull -= userShip.firepower);

      alienShips[currentAlienIndex].hull -= userShip.firepower;

      console.log(`
    Fire at the Alien ship!

    !Great shot! 
    
    The Alien ship was hit. Its current hull level is ${alienShips[currentAlienIndex].hull}. 
    `);

      console.log(`Your ship's current hull level is ${userShip.hull}.
    `);

      if (alienShips[currentAlienIndex].hull <= 0) {
        console.log(`Congrats! You have defeated Alien ship #${currentAlienIndex}.
                  `);

        if (currentAlienIndex >= 5) {
          console.log(`Congrats! You've defeated all of the aliens.
                    GAME OVER!
                    `);
        }
        currentAlienIndex++;
        userAttack();
      } else {
        console.log(`Alien ship #${currentAlienIndex} survived your attack!
                  
                  `);
        console.log(` Get ready, the Alien ship is about to fireback!
                  `);
        alienAttack();
      }
    } else {
      console.log(`
      !Great shot!
      Alien ship #${currentAlienIndex} survived your attack! It's hull level is ${alienShips[currentAlienIndex].hull}, it was not completely destroyed.
      `);
      console.log(` Get ready, the Alien ship is about to attack you!
      `);
      alienAttack();
    }
  }

  function alienAttack() {
    if (Math.random() <= alienShips[currentAlienIndex].accuracy) {
      // console.log(alienShips[currentAlienIndex].hull)
      userShip.hull -= alienShips[currentAlienIndex].firepower;
      if (userShip.hull <= 0) {
        console.log("Your ship is completely damaged, you were defeated.");
        // break;
      } else {
        console.log(`AlienShip is initiating an attack!
      `);
        console.log(`You got hit! You'r current hull level is ${userShip.hull}
      .`);
        console.log(`Now it's your turn to fireback at Alien ship #${currentAlienIndex}!
      `);

        userAttack();
      }
    } else {
      // console.log("It's your turn to attack!");
      // console.log(`battle alienShip #${currentAlienIndex}`);
      userAttack();
    }
  }

  userAttack();
}
