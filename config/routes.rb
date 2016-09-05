Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :lessons, only: [:create, :update, :destroy, :index, :show] 
    resources :objectives, only: [:create]
    resources :key_points, only: [:create]
    resources :sections, only: [:create, :update, :destroy]
  end
end
