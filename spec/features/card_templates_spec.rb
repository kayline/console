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

			fill_in_card_form(
				message: 'Not having the sorry',
				signature: 'Kindly, James',
				recipient_name: 'Bad Friend',
				street_address: '123 Main Street',
				city: 'Oakland',
				state: 'CA',
				zip_code: '94607'
			)

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

		it 'displays an error message if recipient info is missing' do
			visit "card_templates/#{card_template.id}/cards/new"

			fill_in_card_form(
				message: 'Not having the sorry',
				signature: 'Kindly, James',
				recipient_name: nil,
				street_address: '123 Main Street',
				city: 'Oakland',
				state: 'CA',
				zip_code: '94607'
			)

			click_on 'Send Card'
			expect(page).to have_no_content 'Your card has been ordered'
			validation_message = page.find("#recipient_name").native.attribute("validationMessage")
			expect(validation_message).to eq "Please fill out this field."
		end
	end

	def fill_in_card_form(message:, signature:, recipient_name:, street_address:, city:, state:, zip_code:)
		fill_in 'Custom Message', with: message
		fill_in 'Signature', with: signature
		fill_in 'Recipient Name', with: recipient_name
		fill_in 'Street Address', with: street_address
		fill_in 'City', with: city
		fill_in 'State', with: state
		fill_in 'Zip Code', with: zip_code
	end
end