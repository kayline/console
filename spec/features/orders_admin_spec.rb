require 'rails_helper'

describe 'Orders admin', js: true do
  let!(:card_template) { CardTemplate.create!(greeting: 'Tell it to the judge') }
  let!(:first_card) { Card.create(
      card_template_id: card_template.id,
      custom_message: 'some text',
      signature: 'a signature',
      recipient_name: 'your friend',
      street_address: 'Here',
      city: 'There',
      state: 'CA',
      zip_code: '55555',
  )}
  let!(:second_card) { Card.create(
      card_template_id: card_template.id,
      custom_message: 'happy moving away day',
      signature: 'the cat next door',
      recipient_name: 'doggo',
      street_address: '123 4 St',
      city: 'Wherever',
      state: 'CA',
      zip_code: '55555',
  )}

  it 'displays an admin page' do
    visit '/admin'

    expect(page).to have_content 'Admin'
  end

  describe 'Card list' do

    it 'displays a list of ordered cards' do
      visit '/admin'

      expect(page).to have_css '.card-list'
    end

    it 'displays the ordered card ids' do
      visit '/admin'

      expect(page).to have_content "#{first_card.id}"
      expect(page).to have_content "#{second_card.id}"
    end

    it 'starts with (only) the first card selected' do
      visit '/admin'

      expect(page).to have_css('.selected#card-summary-' + first_card.id.to_s)
      expect(page).to have_css('.not-selected#card-summary-' + second_card.id.to_s)
    end

  end

end
