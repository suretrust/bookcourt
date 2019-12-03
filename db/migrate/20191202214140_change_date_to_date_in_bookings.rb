# frozen_string_literal: true

class ChangeDateToDateInBookings < ActiveRecord::Migration[6.0]
  def up
    change_column :bookings, :date, :date
  end

  def down
    change_column :bookings, :date, :string
  end
end
