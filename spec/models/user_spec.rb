# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { build :user }
  let(:court) { create :court }
  let(:booking) { create :booking }

  describe 'Validations' do
    it { should validate_presence_of(:email) }

    it "validates uniqueness of email" do
      user.save!(validate: false)
      should validate_uniqueness_of :email
    end

    context 'when email format is invalid' do
      it 'is invalid' do
        user.email = 'test.com'
        expect(user.invalid?).to be(true)
      end

      it 'is invalid' do
        user.email = 'test@com'
        expect(user.invalid?).to be(true)
      end

      it 'is invalid' do
        user.email = 'test'
        expect(user.invalid?).to be(true)
      end

      it 'is invalid' do
        user.email = '@com'
        expect(user.invalid?).to be(true)
      end
    end

    context 'when email format is valid' do
      it 'is valid' do
        user.email = 'a@b.c'
        expect(user.valid?).to be(true)
      end
    end
  end

  context 'Associations' do
    it { should have_many(:bookings) }
    it { should have_many(:courts) }
  end
end
