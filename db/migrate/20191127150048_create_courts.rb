class CreateCourts < ActiveRecord::Migration[6.0]
  def change
    create_table :courts do |t|
      t.string :name
      t.string :location
      t.string :court_type
      t.integer :cost
      t.string :image

      t.timestamps
    end
  end
end
