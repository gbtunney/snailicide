/**
 * @typedef {Object} Food
 * @property {string} name - What the food should be called
 * @property {('meat' | 'veggie' | 'other')} type - The food's type
 */

/**
 * This function turns a string into a veganized version of the food
 * For example 'beef' will turn into 'vegan beef'
 * @param {string} food the food item we want to veganize
 * @returns {string} the veganized version of our food name
 */
function getVeganFood (food) {
    const veganizedFood = 'vegan ' + food;
    return  veganizedFood;
}
