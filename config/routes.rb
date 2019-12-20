# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :courts, only: :index
      resources :users, only: %i[index create]
      resources :bookings, only: %i[index create]
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '*page', to: 'static#index', constraints: lambda { |req|
    !req.xhr? && req.format.html?
  }
  root 'static#index'
end
