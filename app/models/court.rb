class Court < ApplicationRecord
  validates :name, :phone, :image, :cost, :location, :court_type, presence: true

  has_many :bookings, dependent: :destroy
  has_many :users, through: :bookings
end
