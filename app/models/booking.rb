# frozen_string_literal: true

class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :court

  validates :date, :time, presence: true
  validates_uniqueness_of :date, scope: %i[time user_id court_id]
end
