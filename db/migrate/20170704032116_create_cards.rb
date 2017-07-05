class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
    	t.string :custom_message
    	t.references :card_template

    	t.timestamps
    end
  end
end
