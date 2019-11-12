import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return this.store.findAll("invitation");
  },

  actions: {
    deleteInvitation(target) {
      let confirmation = confirm("Are you sure?");
      if (confirmation) {
        target.destroyRecord();
      }
    }
  }
});
