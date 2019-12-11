# frozen_string_literal: true

class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :ok
    else
      reder json: @user.errors
    end
  end

  private

  def user_params
    params.require(:user).permit(:email)
  end
end
