# frozen_string_literal: true

class Api::V1::CourtsController < ApplicationController
  def index
    @courts = Court.all
    respond_to do |format|
      format.json do
        render json: @courts
      end
    end
  end
end
