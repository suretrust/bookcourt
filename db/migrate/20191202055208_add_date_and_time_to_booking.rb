# frozen_string_literal: true

class AddDateAndTimeToBooking < ActiveRecord::Migration[6.0]
  def change
    add_column :bookings, :date, :date, null: false
    add_column :bookings, :time, :time, null: false

    add_index :bookings, %i[user_id date time], unique: true
  end
end
