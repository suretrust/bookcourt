# frozen_string_literal: true

class ChangeTimeToTimeInBookings < ActiveRecord::Migration[6.0]
  def change
    def up
      change_column :bookings, :time, :time
    end

    def down
      change_column :bookings, :time, :string
    end
  end
end
