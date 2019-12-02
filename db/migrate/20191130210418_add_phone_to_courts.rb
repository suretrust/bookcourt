class AddPhoneToCourts < ActiveRecord::Migration[6.0]
  def change
    add_column :courts, :phone, :string
  end
end
