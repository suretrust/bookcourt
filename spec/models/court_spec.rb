# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Court, type: :model do
  context 'Validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:cost) }
    it { should validate_presence_of(:court_type) }
    it { should validate_presence_of(:location) }
    it { should validate_presence_of(:image) }
    it { should validate_presence_of(:phone) }
  end

  context 'Associations' do
    it { should have_many(:bookings) }
    it { should have_many(:users) }
  end
end
