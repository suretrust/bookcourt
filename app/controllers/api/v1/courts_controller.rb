# frozen_string_literal: true

class Api::V1::CourtsController < ApplicationController
  def index
    @courts = Court.all
    render json: @courts
  end
end
