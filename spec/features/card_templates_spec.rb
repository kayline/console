require 'rails_helper'

describe 'Card templates', js: true do
	let!(:card_template) { CardTemplate.create!(greeting: 'So Sorry') }

	describe 'Card template list' do
		it 'displays the greeting of each card template' do
			visit '/'

			expect(page).to have_content 'So Sorry'
		end

		it 'displays a customization page when a greeting is selected' do
			visit '/'
			click_on("Use This Greeting")

			expect(page).to have_content 'Customize your card'
		end
	end

	describe 'customizing and ordering a card' do
		it 'creates a card with greeting and a custom message' do
			visit "card_templates/#{card_template.id}/cards/new"
			expect(page).to have_content 'So Sorry'

			fill_in 'Custom Message', with: 'Not having the sorry'
			click_on 'Send Card'
			expect(page).to have_content 'Your card has been ordered'
			expect(page).to have_content 'So Sorry'
			expect(page).to have_content 'Not having the sorry'
		end
	end

end