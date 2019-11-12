import Controller from "@ember/controller";
import { match, not } from "@ember/object/computed";

export default Controller.extend({
  pageTitle: "Ember Home Page",
  responseMsg: "",
  isValid: match("model.email", /^.+@.+\..+$/),
  isDisabled: not("isValid")
});
