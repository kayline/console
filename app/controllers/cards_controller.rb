class CardsController < ApplicationController
	layout 'react_view'

	def new 
		@template = CardTemplate.find(params[:card_template_id])
	end

	def create
		@card = Card.create!(
			card_template_id: params[:card_template_id], 
			custom_message: params[:custom_message]
		)
		@greeting = CardTemplate.find(params[:card_template_id]).greeting
	end
end