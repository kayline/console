class AdminController < ApplicationController
  layout 'react_view'

  def index
    @templates = CardTemplate.all
    @cards = Card.all
  end

end
