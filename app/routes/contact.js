import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return this.store.createRecord("contact");
  },

  actions: {
    saveNewContact(newContact) {
      newContact
        .save()
        .then(() => this.controller.model.set("showResponse", true));
    },

    willTransition() {
      this.controller.get("model").rollbackAttributes();
    }
  }
});
