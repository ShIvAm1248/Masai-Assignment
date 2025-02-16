let sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",

    buildSentence: function() {
        console.log(this.subject + " " + this.verb + " " + this.object);
    },

    updateProperty: function(property, value) {
        console.log(this.hasOwnProperty(property) 
            ? (this[property] = value, "Property Updated") 
            : "Invalid Property");
    }
};

sentenceBuilder.buildSentence();
sentenceBuilder.updateProperty("verb", "am learning");
