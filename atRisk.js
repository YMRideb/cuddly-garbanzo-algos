/* 
  Given an array of person objects with the following keys:
    firstName[string]
    lastName[string]
    friends[arr of friend objects]
    isSocialDistancing[bool]
    Friend object keys:
      firstName[string]
      lastName[string]
      isSocialDistancing[bool]
      hasCovid[bool]
    return a new array of the names of people (not friends) who are at high risk of infection
    A person is at high risk of catching the virus if they meet all the below criteria:
    1. not practicing social distancing
    2. have a friend who is not practicing social distancing whom hasCovid
    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const friend1 = {
    firstName: "Friend",
    lastName: "One",
    isSocialDistancing: false,
    hasCovid: true,
};
  
const friend2 = {
    firstName: "Friend",
    lastName: "Two",
    isSocialDistancing: false,
    hasCovid: true,
};
  
const friend3 = {
    firstName: "Friend",
    lastName: "Three",
    isSocialDistancing: false,
    hasCovid: false,
};
  
const people = [
    {
      firstName: "Person",
      lastName: "One",
      isSocialDistancing: false,
      friends: [friend2, friend3],
    },
    {
      firstName: "Person",
      lastName: "Two",
      isSocialDistancing: true,
      friends: [friend2, friend1],
    },
    {
      firstName: "Person",
      lastName: "Three",
      isSocialDistancing: false,
      friends: [friend2, friend1],
    },
];
  
const expected = ["Person One", "Person Three"];
  
/**
 * @typedef {Object} Friend
 * @property {string} firstName
 * @property {string} lastName
 * @property {boolean} isSocialDistancing
 * @property {boolean} hasCovid
 *
 * @typedef {Object} Person
 * @property {Array<Friend>} friends
 * @property {string} firstName
 * @property {string} lastName
 * @property {boolean} isSocialDistancing
 */

/**
 * Finds the people who are at risk of contracting Covid.
 * - Time: O(n * m) n = persons.length, m = longest length of .friends
 *    to capture the worst case.
 * - Space: O(n) linear.
 * @param {Array<Person>} persons
 * @returns {Array<string>} An array of Person full names for those people who
 *    are at risk. A Person is at risk if:
 *    1. not practicing social distancing.
 *    2. have a friend who is not practicing social distancing whom hasCovid.
 */
function coronaVirusAtRisk(persons) {
  const atRiskPersons = [];

  for (const person of persons) {
    if (person.isSocialDistancing === false) {
      for (const friend of person.friends) {
        if (friend.isSocialDistancing === false && friend.hasCovid) {
          atRiskPersons.push(`${person.firstName} ${person.lastName}`);
          // don't need to check any other friends, already know this person
          // is at risk, and if we find they are at risk again, they will be
          // pushed again if we don't break
          break;
        }
      }
    }
  }
  return atRiskPersons;
}

/**
 * - Time: O(2n * m) -> O(n * m)  from nested loop of .findIndex.
 *    .map is another loop but not nested.
 * - Space: O(n) linear.
 */
const functionalCoronaVirusAtRisk = (persons) =>
  persons
    .filter(
      (person) =>
        person.isSocialDistancing === false &&
        person.friends.findIndex(
          (friend) => friend.isSocialDistancing === false && friend.hasCovid
        ) > -1
    )
    .map((person) => `${person.firstName} ${person.lastName}`);
********************************************************************************
  /* 
  Create a function to determine the max amount of
  servings that can be made based on a recipe and
  available ingredients.
  Input:
    - recipe object where keys are ingredient names
      and values are unit required (int)
    - available ingredients object where keys are ingredient
      names and values are unit available (int)
  Output:
    int (max servings)
  Side note (not needed for solution): Realistically, the values
  would be an object as well with the keys: unit (unit of measure), and amount.
  If the available ingredient was stored in a different unit,
  a conversion table would be needed to convert units of measure.
*/

const recipe1 = {
    "organic fat": 99,
    "broccoli seeds": 1,
    okra: 1,
    potato: 1,
    spicy: 5,
    "gourmet memes": 4200,
};
  
const available1 = {
    "organic fat": 990,
    "broccoli seeds": 1,
    okra: 10,
    potato: 10,
    spicy: 50,
    "gourmet memes": 42000,
    sugar: 9001,
    spice: 5,
    "everything nice": 1,
    "triple point water": 5,
};
const expected1 = 1;
// because only 1 broccoli seeds is available and that is the limiting ingredient

// same as available1, except broccoli seeds has 10.
const available2 = { ...available1, ["broccoli seeds"]: 10 };
const expected2 = 10;

// same as available1 except broccoli seeds key is deleted.
const available3 = { ...available1 };
delete available3["broccoli seeds"];
const expected3 = 0; // broccoli seeds key doesn't exist in available ingredients

/**
 * Determines how many servings can be made of the given recipe.
 * - Time: O(n) linear, n = recipe number of keys.
 * - Space: O(1) constant.
 * @typedef {Object<string, number>} Ingredients Key value pairs are ingredient
 *    name and a quantity.
 * @param {Ingredients} recipe
 * @param {Ingredients} available
 * @returns {number} Max servings of the recipe that can be made.
 */
 function getMaxServings(recipe, available) {
  let limitingAmount = Infinity;

  for (const reqIngred in recipe) {
    const availableAmnt = available[reqIngred];
    const reqAmnt = recipe[reqIngred];

    if (!available.hasOwnProperty(reqIngred) || availableAmnt < reqAmnt) {
      // missing ingredient, can't make any
      return 0;
    }

    // how many servings can be made based on this 1 ingredient
    let servingsPerIngred = availableAmnt / reqAmnt;

    if (servingsPerIngred < limitingAmount) {
      limitingAmount = servingsPerIngred;
    }
  }
  return Math.floor(limitingAmount);
}

/**
 * - Time: O(4n) -> O(n) linear.
 *    4n comes from counting .entries, .map, spread operator, and .min which
 *    are all loops.
 * Space: O(2n) from .entries and .map array -> O(n) linear.
 */
const functionalGetMaxServings = (recipe, available) =>
  Math.min(
    ...Object.entries(recipe).map(
      ([requiredIngred, requiredAmnt]) =>
        available[requiredIngred] / requiredAmnt
    )
  ) || 0;
//getMaxServings is very elegant
