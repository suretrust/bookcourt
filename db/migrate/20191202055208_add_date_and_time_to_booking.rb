class AddDateAndTimeToBooking < ActiveRecord::Migration[6.0]
  def change
    add_column :bookings, :date, :date, null: false
    add_column :bookings, :time, :time, null: false

    add_index :bookings, [:date, :time], unique: true
  end
end
