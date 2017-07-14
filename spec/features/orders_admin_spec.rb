require 'rails_helper'

describe 'Orders admin' do

  it 'displays an admin page' do
    visit '/admin'

    expect(page).to have_content 'Admin'
  end

  describe 'Order list' do

  end

end
