class CardTemplate < ActiveRecord::Base
	validates_presence_of :greeting
	has_many :cards
end