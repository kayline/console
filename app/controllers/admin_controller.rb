class AdminController < ApplicationController
  layout 'react_view'
  http_basic_authenticate_with name: "admin", password: ENV['CONSOLE_ADMIN_PASSWORD'] 

  def index
    @templates = CardTemplate.all
    @cards = Card.all
  end

end
