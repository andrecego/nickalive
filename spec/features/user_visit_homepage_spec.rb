require 'rails_helper'

feature 'User visited homepage' do
  scenario 'successfully' do
    #criar dados

    #ação do usuario
    visit root_path

    #expectativas
    expect(page).to have_css('h1', text: 'Nickaliv')
  end

  scenario 'and view new post button' do
    visit root_path
    click_on 'Novo post'

    expect(page).to have_css('h3', text: 'Envie uma nova foto')
  end
end