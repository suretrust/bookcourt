class AddCourtNameToBookings < ActiveRecord::Migration[6.0]
  def change
    add_column :bookings, :court_name, :string
  end
end
