# frozen_string_literal: true

class AddDateAndTimeToBookings < ActiveRecord::Migration[6.0]
  def change
    add_column :bookings, :date, :date, null: false
    add_column :bookings, :time, :string, null: false

    add_index :bookings, %i[user_id court_id date time], unique: true
  end
end
