/**
 *  George
 *  2015/7/31 10:01
 */
var mongoose = require('mongoose');


var MovieSchema = new mongoose.Schema({
    title:String,
    language:String,
    country:String
});


MovieSchema.pre('save', function (next) {
    if(this.isNew){
        this.meta.createAt = this.meta.updateAd = Date.now()
    }

    next()
});



// model
MovieSchema.statics = {
    fetch: function (cb) {
        return this.find({}).exec(cb)
    }

}




var Movie = mongoose.model('Movie',MovieSchema);

module.exports = MovieSchema;