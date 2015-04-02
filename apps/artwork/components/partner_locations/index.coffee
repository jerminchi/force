_ = require 'underscore'
_s = require 'underscore.string'
Partner = require '../../../../models/partner.coffee'
PartnerPhoneNumberView = require '../partner_phone_number/view.coffee'
splitTest = require '../../../../components/split_test/index.coffee'

# Sets up the partner phone numbers while simultaneously rendering
# partner locations, since they are relying on the same data
module.exports = class PartnerLocations
  constructor: (options = {}) ->
    { @$el, @artwork } = options
    return unless @artwork.has 'partner'
    @partner = new Partner(@artwork.get 'partner')
    @locations = @partner.locations()
    @locations.fetchUntilEnd success: =>
      @renderLocations @locations
      @setupPhoneNumbers @locations

  renderLocations: (locations) ->
    if locations.length
      locationString = if locations.length > limit = 3
        "#{locations.length} Locations"
      else
        @renderFirstCities locations, limit
      text = if splitTest('inquiry_flow').outcome() is 'original_flow' then ", #{locationString}" else "#{locationString}"
      @$el.find('#artwork-partner-locations')
        .text text

  renderFirstCities: (locations, n) ->
    cities = _.take _.uniq(locations.pluck 'city'), n
    _s.toSentence(cities, ', ', ' & ') if cities.length

  setupPhoneNumbers: (locations) ->
    if @artwork.isContactable() and @$el.find('#artwork-partner-phone-container').length
      new PartnerPhoneNumberView
        el: @$el.find('#artwork-partner-phone-container')
        collection: locations
        model: @artwork
