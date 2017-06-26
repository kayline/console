require 'rails_helper'

describe 'Card templates', js: true do
	it 'displays the greeting of each card template' do
		CardTemplate.create!(greeting: 'So Sorry')
		visit '/'

		expect(page).to have_content 'So Sorry'
	end
end