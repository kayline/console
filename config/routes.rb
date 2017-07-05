Rails.application.routes.draw do
	root to: 'card_templates#index'

	resources :card_templates, only: [:index] do
		resources :cards, only: [:new, :create]
	end

end
