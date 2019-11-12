import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord("invitation");
  },

  actions: {
    saveNewInvitation(newInvitation) {
      newInvitation.save().then(() => this.controller.set("responseMsg", newInvitation.email));  
    },

    willTransition() {
      this.controller.model.rollbackAttributes();
    }
  }
});
