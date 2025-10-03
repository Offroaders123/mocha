/**
 @module Pending
*/

/**
 * Initialize a new `Pending` error with the given message.
*/
export default class Pending {
  /**
   * @param {string} message
  */
  constructor(message) {
    this.message = message;
  }
}
