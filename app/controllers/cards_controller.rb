class CardsController < ApplicationController
	def new 
		@template = CardTemplate.find(params[:card_template_id])
	end

end