Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :lessons, only: [:create, :update, :destroy, :index, :show]
  end
end
