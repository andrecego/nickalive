Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'photos#index'
  resources :photos
  # get '/testes', to: 'photos#testes'
end
