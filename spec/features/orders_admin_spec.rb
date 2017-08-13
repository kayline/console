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

    it 'starts with (only) the first card active' do
      visit '/admin'

      expect(page).to have_css('.active#card-summary-' + first_card.id.to_s)
      expect(page).to_not have_css('.active#card-summary-' + second_card.id.to_s)
    end

    it 'makes a card active (and only that card) when clicked' do
      visit '/admin'
      find_by_id('card-summary-' + second_card.id.to_s).click

      expect(page).to_not have_css('.active#card-summary-' + first_card.id.to_s)
      expect(page).to have_css('.active#card-summary-' + second_card.id.to_s)
    end

  end

  describe 'Card Details' do

    it 'shows the details for the active card' do
      visit '/admin'

      expect(page).to have_content "#{first_card.signature}"
      expect(page).to have_content "#{first_card.recipient_name}"
      expect(page).to have_content "#{first_card.street_address}"
      expect(page).to have_content "#{first_card.city}"
      expect(page).to have_content "#{first_card.state}"
      expect(page).to have_content "#{first_card.zip_code}"
    end

    it 'changes the details if the active card changes' do
      visit '/admin'
      find_by_id('card-summary-' + second_card.id.to_s).click

      expect(page).to_not have_content "#{first_card.signature}"
      expect(page).to have_content "#{second_card.signature}"
    end

  end

  describe 'Card Sender' do

    it 'displays a button to mark the active card as sent' do
      visit '/admin'

      expect(page).to have_button('mark as sent')
    end

  end
end
