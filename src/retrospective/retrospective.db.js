'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RetrospectiveSchema = new Schema ({
  name: {
    type: String,
    trim: true,
    required: true
  },
  maxRateByUser: {
    type: Number,
    required: true,
    default: 5
  },
  teamMembers: [
    {
      player: {
        type: Schema.Types.ObjectId,
        ref: 'players'
      }
    }
  ],
  categories: [
    {
      name: {
        type: String,
        trim: true
      },
      items: [
        {
          summary: {
            type: String,
            trim: true
          }
          childs: [
            {
              itemId: {
                type: String,
                trim: true
              }
            }
          ],
          rates: [
            {
              player: {
                type: Schema.Types.ObjectId,
                ref: 'players'
              },
              votes: {
                type: Number
              }
            }
          ],
          actionItems: [
            {
              name: {},
              responsible: {
                type: Schema.Types.ObjectId,
                ref: 'players'
              }
            }
          ]
        }
      ]
    }
  ]
});

module.exports = mongoose.model('retrospective', RetrospectiveSchema);
