# frozen_string_literal: true

class Api::V1::CourtsController < ApplicationController
  def index
    respond_to do |format|
      format.json do
        render json: {
          name: 'some-thing',
          location: 'Nigeria',
          cost: 5000,
          court_type: 'Carpet'
        }
      end
    end
  end
end
