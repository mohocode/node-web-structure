const mongoose = require("mongoose");

class blank {
  constructor(definition) {
    this.collection = definition;
    // ? ::--------- Schema Collection -----------::
    this.collection.schema = new mongoose.Schema(this.collection.definition);

    // ? ::--------- Plugin Collection -----------::
    if (typeof this.collection.plugin != "undefined")
      this.collection.schema.plugin(this.collection.plugin);

    // ? ::--------- Index Collection -----------::
    if (typeof this.collection.index != "undefined")
      this.collection.schema.index(this.collection.index);

    this.model = mongoose.model(this.collection.name, this.collection.schema);
  }
}

module.exports = function trait(constructors) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        blank.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
  return blank;
};
