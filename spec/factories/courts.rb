# frozen_string_literal: true

FactoryBot.define do
  factory :court do
    name { 'Court name' }
    location { 'Lagos, NG' }
    court_type { 'Hard Courts' }
    cost { 4000 }
    image { 'image.com' }
    phone { '1234567890' }
  end
end
