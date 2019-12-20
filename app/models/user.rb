class User < ApplicationRecord
  validates :email, presence: true, 'valid_email_2/email': true, uniqueness: true

  has_many :bookings, dependent: :destroy
  has_many :courts, through: :bookings
end
