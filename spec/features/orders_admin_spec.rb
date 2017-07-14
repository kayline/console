require 'rails_helper'

describe 'Orders admin', js: true do
  let!(:card_template) { CardTemplate.create!(greeting: 'Tell it to the judge') }

  it 'displays an admin page' do
    visit '/admin'

    expect(page).to have_content 'Admin'
  end

  describe 'Card list' do

    it 'displays a list of ordered cards' do
      visit '/admin'

      expect(page).to have_css '.card-list'
    end

  end

end
