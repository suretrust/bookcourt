# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Booking, type: :model do
  context 'Associations' do
    it { should belong_to(:court) }
    it { should belong_to(:user) }
  end

  context 'Validations' do
    it { should validate_presence_of(:date) }
    it { should validate_presence_of(:time) }
  end
end
