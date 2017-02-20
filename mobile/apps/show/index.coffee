#
# The show perma-link page
#

express = require 'express'
routes = require './routes'

app = module.exports = express()
app.set 'views', __dirname + '/templates'
app.set 'view engine', 'jade'
app.get '/show/:id/hours', routes.hours
app.get '/show/:id', routes.index

