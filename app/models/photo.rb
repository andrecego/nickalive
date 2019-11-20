class Photo < ApplicationRecord
  has_one_attached :picture
  validate :correct_image_type

  private

  def correct_image_type
    if picture.attached? && !picture.content_type.in?(%w(image/jpeg image/png))
      errors.add(:picture, 'A imagem precisa ser JPG ou PNG.')
    elsif picture.attached? == false
      errors.add(:picture, 'Uma imagem é necessária.')      
    end
  end
end
