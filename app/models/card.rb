class Card < ActiveRecord::Base
	validates_presence_of :recipient_name
	validates_presence_of :street_address
	validates_presence_of :city
	validates_presence_of :state
	validates_presence_of :zip_code
	
	belongs_to :card_template
end