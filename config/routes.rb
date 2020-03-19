# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'photos#index'
  resources :photos do
    collection do
      # delete 'destroy_multiple'
      # get 'admin_index'         #pesquisar o lugar apropriado
    end
  end
end
