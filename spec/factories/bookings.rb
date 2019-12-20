# frozen_string_literal: true

FactoryBot.define do
  factory :booking do
    time { Time.now }
    date { Date.new }
    association :user
    association :court
  end
end
