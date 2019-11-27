class Api::V1::CourtsController < ApplicationController
  def index
    render json: { :courts => [
      {
        name: 'some-thing',
        location: 'Nigeria',
        cost: 5000,
        court_type: 'Carpet'
      }
    ]}.to_json
  end
end
