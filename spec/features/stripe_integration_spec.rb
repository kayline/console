require 'rails_helper'

describe 'Stripe integration', js: true do
  let!(:card_template) { CardTemplate.create!(greeting: 'so be it') }
  
  it 'the card generation form includes payment section' do
    visit "card_templates/#{card_template.id}/cards/new"     

    expect(page).to have_css '.checkout-container'
  end

  it 'includes a stripe payment button' do 
    visit "card_templates/#{card_template.id}/cards/new"     

    expect(page).to have_css 'button.StripeCheckout'
  end

end
