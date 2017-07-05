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
		it 'creates a card with all relevant fields' do
			visit "card_templates/#{card_template.id}/cards/new"

			fill_in 'Custom Message', with: 'Not having the sorry'
			fill_in 'Signature', with: 'Kindly, James'
			fill_in 'Recipient Name', with: 'Bad Friend'
			fill_in 'Street Address', with: '123 Main Street'
			fill_in 'City', with: 'Oakland'
			fill_in 'State', with: 'CA'
			fill_in 'Zip Code', with: '94607'
			click_on 'Send Card'

			expect(page).to have_content 'Your card has been ordered'

			expect(page).to have_content 'So Sorry'
			expect(page).to have_content 'Not having the sorry'
			expect(page).to have_content 'Kindly, James'

			expect(page).to have_content 'Bad Friend'
			expect(page).to have_content 'Oakland'
			expect(page).to have_content 'CA'
			expect(page).to have_content '94607'
		end
	end
end