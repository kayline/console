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
  let!(:admin_user) {'admin'}
  let(:admin_password) {ENV['CONSOLE_ADMIN_PASSWORD']}

  def authenticate 
    if page.driver.browser.respond_to?(:authorize)
      # when headless
      page.driver.browser.authorize(admin_user,admin_password)
    else 
      visit "http://#{admin_user}:#{admin_password}@#{host}:#{port}/admin"
    end
  end

  def host
    Capybara.current_session.server.host
  end

  def port
    Capybara.current_session.server.port
  end

  before(:each) do
    Capybara.reset_sessions!
    visit '/admin'
  end

  describe 'Admin Login' do
    
    it 'displays nothing but a login unless already logged in as an admin' do
      Capybara.reset_sessions!
      expect(page).to_not have_content 'Admin'
      expect(page).to_not have_css '.card-list' 
      expect(page).to_not have_content "#{first_card.signature}"
    end

    it 'shows the admin page after login' do
      authenticate      
 
      expect(page).to have_content 'Admin'
    end

  end

  context 'When logged-in' do
    before(:each) do
      authenticate
    end

    describe 'Card list' do
  
      it 'displays a list of ordered cards' do
        expect(page).to have_css '.card-list'
      end
  
      it 'displays the ordered card ids' do
        expect(page).to have_content "#{first_card.id}"
        expect(page).to have_content "#{second_card.id}"
      end
    
      it 'starts with (only) the first card active' do
        expect(page).to have_css('.active#card-summary-' + first_card.id.to_s)
        expect(page).to_not have_css('.active#card-summary-' + second_card.id.to_s)
      end
  
      it 'makes a card active (and only that card) when clicked' do
        find_by_id('card-summary-' + second_card.id.to_s).click
  
        expect(page).to_not have_css('.active#card-summary-' + first_card.id.to_s)
        expect(page).to have_css('.active#card-summary-' + second_card.id.to_s)
      end
  
    end
  
    describe 'Card Details' do
  
      it 'shows the details for the active card' do
        expect(page).to have_content "#{first_card.signature}"
        expect(page).to have_content "#{first_card.recipient_name}"
        expect(page).to have_content "#{first_card.street_address}"
        expect(page).to have_content "#{first_card.city}"
        expect(page).to have_content "#{first_card.state}"
        expect(page).to have_content "#{first_card.zip_code}"
      end
  
      it 'changes the details if the active card changes' do
        find_by_id('card-summary-' + second_card.id.to_s).click
  
        expect(page).to_not have_content "#{first_card.signature}"
        expect(page).to have_content "#{second_card.signature}"
      end
  
    end
  
    describe 'Card Sender' do
  
      it 'displays a button to toggle the sent status' do
        expect(page).to have_button('mark as sent')
        click_button('mark as sent')
        expect(page).to have_button('mark as NOT sent')
        click_button('mark as NOT sent')
        expect(page).to have_button('mark as sent')
      end
  
      it 'remembers the sent status' do
        click_button('mark as sent')
        find_by_id('card-summary-' + second_card.id.to_s).click
        expect(page).to have_button('mark as sent')
        find_by_id('card-summary-' + first_card.id.to_s).click
        expect(page).to have_button('mark as NOT sent') 
      end
  
    end
  end
end
