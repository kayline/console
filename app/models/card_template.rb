class CardTemplate < ActiveRecord::Base
	validates_presence_of :greeting
end