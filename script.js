/*
- make a game factory to have:
    - the rounds of battle 
    - the attacks 
    - end of the game

- Make a ship factory to:
    - produce USS Per Scholas AND 6 Alien Ships
    - create a hull, firepower, accruacy
    - give USSPS: hull - 20, firepower - 5, accuracy - .7.
    - give each of the 6 AlienShips unique: hull - between 3and 6, firepower - between 2and 4, accuracy - between .6and .8

*/

//making an alienShip class and assigning hull, firepower, accuracy to constructor
  //
  // const alienShips = new AlienShip();
  // console.log(alienShips);
  
  // making a n empty arr where we will push alienShips to it
  
  // looping over nums 1 to 6 
  // and declaring vars where we will assign the alienShips properties hull, firepower, and accuracy using math.random() 
  // this will assign random porperties level each time the loop is interating 
  // then we are storing all of the properties in a new alienShipItem
  // this will make the loop iterating 6 times over the alienShipItem creating a new alienShip one at a time
  // then we push the 6 alienShips into the empty alienShip arr that will store 6 alienShips 
  
  
  // here, bc we only need one userShip, we're making a userShip object with assigned hull, firepower, and accuracy properties.
  
  
  // we are declaring a var to keep track of the num of Alienships we are looping over in the while loop
  
  
  // this while loop is testing our first battle btwn the userShip and AlienShips w/t giving the userShip the chance to retreat
  
  //the while loop is looping over the alienShip arr elements and will execute the block of code as long as "the condition" that the alienShip arr elements is true, which means greater than 0. the loop will stop when there. 
  // in a nutshell, this while loop will loop over the alienShip.length, which is 6, and as long as alienShip element is true/not 6 it will keep executing the code one time after another -AND incrmenting the currentAlienIndex along the way- until there are no more elements.
  
  // in the game terms, this while loop will give the userShip the chance to  attack alienShip #0 - bc the array indexed in 0- until it defeats an Alien#0. Then when alien is defeated, the userShip will move to attack the next alienShip, #1 - the incrimination condition will log to us the num of the Alienship being attacked- and so on until user reach to attack the last alienShip #5 - which is less than 6 - then the loop will stop running. 
  
  //  prompt
  
  //creating functions where the ships will battle
    // it will always begin w/ the user attack
    // user accuracy always higher to attack first

/////////////////////////////////////////////////////////////////////////////


class AlienShip {
  constructor(hull, firepower, accuracy) {
    this.hull = hull; 
    this.firepower = firepower; 
    this.accuracy = accuracy; 
  }
}


const alienShips = [];
  for (let i = 1; i <= 6; i++) {
  const hullValue = Math.floor(Math.random() * (7 - 3) + 3);
  const firepowerValue = Math.floor(Math.random() * (5 - 2) + 2);
  const accuracyValue = (Math.floor(Math.random() * 3) + 6) / 10;
  const alienShipItem = new AlienShip(hullValue, firepowerValue, accuracyValue);
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

let fromSecondBattle = 1;

let IntroPrompt = console.log(`The battle between you and Alien fleet is about to start...
`);
let continueBattlePrompt = `
Would you like to retreat? Or continue the battle against the Alien Fleet?
`

let battleNextAlien = true; 

let endPrompt = false;




while (alienShips.length > currentAlienIndex) {
  console.log(alienShips.length);
  function endingGame(){
    if (currentAlienIndex > 5 || endPrompt) {
      console.log("Congrats! You've defeated all of the aliens.");
      gameOver() 
      return
   } 
}

  function userAttack() {
    if (currentAlienIndex === 0 && alienShips.hull < 6){
     console.log(IntroPrompt);
    } else if (alienShips.hull > 3){
      console.log(`
      Continue battling Alien ship #${currentAlienIndex}`);
    }
    
     if (Math.random() <= userShip.accuracy) {
        
        console.log(`
        You are now battling Alien ship #${currentAlienIndex}`);

        alienShips[currentAlienIndex].hull -= userShip.firepower;

        console.log( `
        Fire at the Alien ship!

        !Great shot! 
        
        The Alien ship was hit. Its current hull level is ${ alienShips[currentAlienIndex].hull}. 
        `); 


        console.log(`Your ship's current hull level is ${userShip.hull}.
        `); 


        if (alienShips[currentAlienIndex].hull <= 0) {
          console.log(`Congrats! You have defeated Alien ship #${currentAlienIndex}.
          `);
          console.log(continueBattlePrompt)
          if (continueBattlePrompt === battleNextAlien || currentAlienIndex <= alienShips.length) {
            console.log(` You chose to continue, get ready...
            `)
            currentAlienIndex++;
            
            return userAttack()
          } else {
            endingGame()
          }

        } else {
          console.log(`Alien ship #${currentAlienIndex} survived your attack!
          
          `)
          console.log(` Get ready, the Alien ship is about to fireback!
          `)
          return alienAttack()
        }
        
      } else {
          console.log(`
          !Great shot!
          Alien ship #${currentAlienIndex} survived your attack! It's hull level is ${alienShips[currentAlienIndex].hull}, it was not completely destroyed.
          `)
          console.log(` Get ready, the Alien ship is about to attack you!
          `)
          return alienAttack();
      }
  }
  





  function alienAttack() {
    if (Math.random() <= alienShips[currentAlienIndex].accuracy) {
      // console.log(alienShips[currentAlienIndex].hull)
      userShip.hull -= alienShips[currentAlienIndex].firepower;
      if (userShip.hull <= 0) {
        console.log("User defeated.");
        return;
      } else {
        console.log(`AlienShip is initiating an attack!
        `)
        console.log(`You got hit! You'r current hull level is ${userShip.hull}
        .`);
        console.log(`Now it's your turn to fireback!
        `);

        return userAttack();
      }
    } else {
      // console.log("It's your turn to attack!");
      // console.log(`battle alienShip #${currentAlienIndex}`);
      return userAttack();
    }
  }

  userAttack();

  
}

function gameOver(){
  return console.log(`This is the end of the Game. 
  See you nest time!
  `)
}