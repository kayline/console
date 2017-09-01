require 'rails_helper'

describe 'Stripe integration', js: true do
  let!(:card_template) { CardTemplate.create!(greeting: 'so be it') }
  
  it 'the card generation form includes payment fields' do
    visit "card_templates/#{card_template.id}/cards/new"     

    expect(page).to have_content 'Card Number'

  end


end
