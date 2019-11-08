import Controller from "@ember/controller";
import { match, and, not, gte } from "@ember/object/computed";

export default Controller.extend({
  emailAddress: "",
  userMsg: "",
  showResponse: false,

  isEmailValid: match("emailAddress", /^.+@.+\..+$/),
  isUserMsgValid: gte("userMsg.length", 5),
  isBothValid: and("isEmailValid", "isUserMsgValid"),
  isDisabled: not("isBothValid"),

  actions: {
    sendContactMsg() {
      alert(`Thank you, we will get back to you shortly`);
      this.set("showResponse", true);
    }
  }
});
