Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :lessons, only: [:create, :update, :destroy, :index, :show]
    resources :objectives, only: [:create, :destroy]
    resources :key_points, only: [:create, :destroy]
    resources :sections, only: [:create, :update, :destroy]
    resources :cfus, only: [:create, :destroy]
    resources :misconceptions, only: [:create, :destroy]
    resources :search, only:[:index]
  end
end
