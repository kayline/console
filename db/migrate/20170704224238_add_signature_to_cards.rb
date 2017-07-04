class AddSignatureToCards < ActiveRecord::Migration[5.1]
  def change
  	add_column :cards, :signature, :text
  end
end
