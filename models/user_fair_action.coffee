Backbone = require 'backbone'
{ API_URL } = require('sharify').data

module.exports = class UserFairAction extends Backbone.Model
  url: "#{API_URL}/api/v1/user_fair_action"

  defaults:
    action: 'Attendee'
