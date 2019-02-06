const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ContractSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  url: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: true
  },
  exclusive: {
    type: Boolean,
    required: true
  },
  credit: {
    type: Boolean,
    required: true
  },
  length_usage: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  comment: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = Contract = mongoose.model('contract', ContractSchema);
