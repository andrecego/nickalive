require 'rails_helper'

feature 'User access create photo page' do
  scenario 'Successfully' do
    visit root_path
    click_on 'Novo post'

    expect(page).to have_css('h3', text: 'Envie uma nova foto')
    expect(current_path).to eq(new_photo_path)
  end

  scenario 'create a new photo' do
    visit new_photo_path
    
    fill_in 'Título', with: 'Fotinho maneira'
    select '2019', from: 'Ano'
    click_on 'Enviar'

    expect(page).to have_css('h1', text: 'Fotinho maneira')
    expect(page).to have_css('p', text: '2019')
  end
end