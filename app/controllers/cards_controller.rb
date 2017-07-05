class CardsController < ApplicationController
	layout 'react_view'

	def new 
		@template = CardTemplate.find(params[:card_template_id])
	end

	def create
		@card = Card.create!(
			card_template_id: params[:card_template_id], 
			custom_message: params[:custom_message],
			signature: params[:signature],
			recipient_name: params[:recipient_name],
			street_address: params[:street_address],
			city: params[:city],
			state: params[:state],
			zip_code: params[:zip_code],
		)
		@greeting = CardTemplate.find(params[:card_template_id]).greeting
	end

	def show
		@card = Card.find(params[:id])
		@greeting = @card.card_template.greeting
	end
end