'use strict';

const RetrospectiveModel = require('./retrospective.model');

class RetrospectiveController {

  static createRetrospective() {
    Promise.resolve('Success').then(() => {
      console.log(value); // "Success"
    }, function(value) {
      // not called
    });
  }

  static getAllRetrospectives() {
    Promise.resolve('Success').then(() => {
      console.log('Get all retrospectives'); // "Success"
    }, function(value) {
      // not called
    });
  }

  static getRetrospectiveById() {

  }

  static addItem() {

  }

  static deleteItem() {

  }

  static updateItem() {

  }

  static updateItemVotes() {

  }

}

module.exports = RetrospectiveController;
