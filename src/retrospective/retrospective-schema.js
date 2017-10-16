'use strict';

const retrospectiveSchema = {
  'type': 'object',
  'properties': {
    'name': {
      'type': 'string'
    },
    'maxRateByUser': {
      'type': 'number'
    },
    'teamMembers': {
      'type': {
        'userId': 'string'
      }
    },
    'categories': {
      'type': 'array'
    }
  },
  'required': ['name', 'maxRateByUser']
}

module.exports = retrospectiveSchema;
