const { Schema, model }= require('mongoose');
const repo = require('../repo');

const schoolSchema = new Schema({
    name: String,
    endereco: String,
    cursos: [{
      name: String,
      description: String,
      room: String,
      limitSubscriptionDate: {
        type: Date,
        require: true,
      },
      startDate: {
        type: Date,
        require: true,
      },
      finishDate: Date,
      limitStudents: {
        type: Number,
        require: true,
      },
      coach: {  
        type: Schema.Types.ObjectId,
        ref: 'Coach'
      },
      students: [{
        type: Schema.Types.ObjectId,
        ref: 'Student'
      }]
    }],    
});

const Model = model('School', schoolSchema);

module.exports = repo(Model);