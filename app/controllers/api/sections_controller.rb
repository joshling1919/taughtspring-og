class Api::SectionsController < ApplicationController
  def create
    @section = Section.new(section_params)
    if @section.save
      render :show
    else
      render json: @section.errors.full_messages, status: 422
    end
  end

  def update
    @section = Section.find(params[:id])
    if @section.update_attributes(section_params)
      render :show
    else
      render json: @section.errors.full_messages, status: 422
    end
  end


  def destroy
    @section = Section.find(params[:id])
    @section.destroy
    render :show
  end

  private
  def section_params
    params.require(:section).permit(
      :name,
      :lesson_id,
      :description,
      :minutes
    )
  end
end
