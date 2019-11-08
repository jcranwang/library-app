import Controller from "@ember/controller";
import { match, not } from "@ember/object/computed";

export default Controller.extend({
  pageTitle: "Ember Home Page",
  emailAddress: "",
  responseMsg: "",
  isValid: match("emailAddress", /^.+@.+\..+$/),
  isDisabled: not("isValid"),

  actions: {
    saveInvitation() {
      const newInvitation = this.store.createRecord("invitation", {
        email: this.emailAddress
      });
      newInvitation.save().then(response => {
        this.set(
          "responseMsg",
          `Thank you! We just saved your email: ${response.email}`
        );
        this.set("emailAddress", "");
      });
    }
  }
});
