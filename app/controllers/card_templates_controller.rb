class CardTemplatesController < ApplicationController
	layout 'react_view'
	
	def index
		@templates = CardTemplate.all
	end
end