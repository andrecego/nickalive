class CreatePhotos
  def initialize (params)
    @title = params[:title]
    @body = params[:body]
    @pictures = [params[:picture]].flatten
  end

  def create_photos
    @pictures.map do |picture|
      Photo.new(title: @title, body: @body, picture: picture)
    end
  end

  def save_photos
    create_photos.map do |photo|
      photo.tap { |object| object.save } 
    end     
  end
end