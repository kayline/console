require 'rails_helper'

describe 'Card templates', js: true do

	describe 'Card template list' do

		it 'displays the greeting of each card template' do
			CardTemplate.create!(greeting: 'So Sorry')
			visit '/'

			expect(page).to have_content 'So Sorry'
		end

		it 'displays a form when a greeting is selected' do
			CardTemplate.create!(greeting: 'whoops')
			visit '/'
			click_on("Send")

			expect(page).to have_content 'Customize your card'
			expect(page).to have_content 'whoops'
		end

	end

end