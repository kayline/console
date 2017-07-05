class AddAddressFieldsToCard < ActiveRecord::Migration[5.1]
  def change
  	add_column :cards, :recipient_name, :text, not_null: true
  	add_column :cards, :street_address, :text, not_null: true
  	add_column :cards, :city, :text, not_null: true
  	add_column :cards, :state, :text, not_null: true
  	add_column :cards, :zip_code, :text, not_null: true
  end
end
