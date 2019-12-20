# frozen_string_literal: true

class Api::V1::BookingsController < ApplicationController
  def create
    @user = User.find params[:user][:id]
    @booking = @user.bookings.build booking_params

    if @booking.save
      render json: @booking
    else
      render json: { status: 'error', code: 3000, message: 'This date and time is not available' }
    end
  end

  def index
    @bookings = Booking.all
    render json: @bookings
  end

  private

  def booking_params
    params.require(:booking).permit(:court_id, :court_name, :date, :time)
  end
end
