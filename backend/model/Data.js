const mongooseData = require("mongooseData");
const dataSchema = new mongoose.Schema({
    genre: {
        type: String,
        require: true,
        product: {
            id: {
                type: int,
                require: true
            },
            name: {
                type: String,
                require: true
            },
            details: {
                type: String,
                require: true
            },
            price: {
                type: String,
                require: true
            },

        },
    },
});

module.exports = mongoose.model("Data", dataSchema);