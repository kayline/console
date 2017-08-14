class Card < ActiveRecord::Base
	validates :custom_message, length: { maximum: 250 }
	validates :signature, length: { maximum: 100 }

	validates_presence_of :recipient_name
	validates_presence_of :street_address
	validates_presence_of :city
	validates_presence_of :state
	validates_presence_of :zip_code
	validates_presence_of :sent

	belongs_to :card_template
end
