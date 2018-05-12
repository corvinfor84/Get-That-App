const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
  //the unique identifier of the database
  _id: { type: Schema.Types.ObjectId, required: true },
  //the user who saved the item, usernames are unique to user
  username: { type: String, required: true },
  //title of item user saved
  title: { type: String, required: true },
  //url of item saved
  url: { type: String, required: true },
  //image url of item saved
  image: { type: String },
  //department of item saved
  department: { type: String },
  //price of item saved (need to be greater than 0)
  price: { type: Number
          // ,validate: [
          // function(input){
          //   return input > 0;
          // },
          // "Price needs to be bigger than 0"
          // ]
        },
  //the date the item should be purchased by user
  goal_date: { type: Date, default: Date.now }, //Cornell's idea is actually not have goal date, just say how mahy days they would like to save
  //the saving frequency
  units: { type: Number, default: 7 },
  //amount to be saved/unit as calculated when user added to watch list
  daily_save: { type: Number, default: 0 },
  //is this item active? default is yes, function below to chnage to inactive
  active: { type: Boolean, default: true }
});

//if an item is past goal date or item is no longer on user's watch list (user deleted it or user no longer wants it), then set to inactive
//may not need this
purchaseSchema.methods.Status = function (){
  this.active = false;
  return this.active;
}
const Purchase = mongoose.model("Purchase", purchaseSchema);

module.exports = Purchase;
