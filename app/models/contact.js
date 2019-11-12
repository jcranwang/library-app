import DS from 'ember-data';
import { match, and, not, gte } from "@ember/object/computed";

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),

  showResponse: false,
  isEmailValid: match("email", /^.+@.+\..+$/),
  isUserMsgValid: gte("message.length", 5),
  isBothValid: and("isEmailValid", "isUserMsgValid"),
  isDisabled: not("isBothValid"),
});
