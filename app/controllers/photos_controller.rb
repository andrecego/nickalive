class PhotosController < ApplicationController
  def index
    @photos = Photo.all
  end

  def new
    @photo = Photo.new
  end

  def create
    byebug
    @photo = Photo.new(photo_params)
    if @photo.save
      flash[:success] = "Foto postada com sucesso"
      redirect_to @photo
    else
      flash[:error] = "Algo deu errado"
      render :new
    end
  end

  def edit
    @photo = Photo.find(params[:id])
  end

  def update
    @photo = Photo.find(params[:id])
    if @photo.update(photo_params)
      flash[:success] = "Foto atualizada com sucesso"
      redirect_to @photo
    else
      flash[:error] = "Algo deu errado"
      render :edit
    end
  end

  def show
    @photo = Photo.find(params[:id])  
  end

  def destroy
    @photo = Photo.find(params[:id])
    if @photo.destroy
      flash[:success] = "Foto apagada com sucesso"
      redirect_to photos_url
    else
      flash[:error] = "Algo deu errado"
      redirect_to photos_url
    end
  end

  private
  def photo_params
    params.require(:photo).permit(:title, :body, :picture)
  end
end