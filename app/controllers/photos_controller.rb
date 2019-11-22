class PhotosController < ApplicationController
  def index
    # @pagy, @photos = pagy(Photo.all, items: 5)
    @pagy, @photos = pagy_countless(Photo.all, items: 8, link_extra: 'data-remote="true"')
  end

  def new
    @photo = Photo.new
  end

  def create
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

  def admin_index
    @photos = Photo.all
  end

  def destroy_multiple
    if Photo.destroy(params[:photos]) #aqui nao deveria ser photos_id? o param chega só com photos
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