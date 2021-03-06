import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    return this.store.findRecord("library", params.library_id);
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set("title", "Edit a library");
    controller.set("buttonLabel", "Save changes");
  },

  renderTemplate() {
    this.render("libraries/form");
  },

  actions: {
    saveNewLibrary(editLibrary) {
      editLibrary.save().then(() => this.transitionTo("libraries"));
    },

    willTransition(transition) {
      const model = this.controller.get("model");

      if (model.get("hasDirtyAttributes")) {
        let confirmation = confirm(
          "Your changes have not been saved. Would you like to leave this form?"
        );
        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
