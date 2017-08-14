class AddSent < ActiveRecord::Migration[5.1]
  def change

    add_column :cards, :sent, :boolean, default: false

  end
end
