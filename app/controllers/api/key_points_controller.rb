class Api::KeyPointsController < ApplicationController
  def create
    @key_point = KeyPoint.create(key_point_params)
    render :destroy
  end

  def destroy
    @key_point = KeyPoint.find(params[:id])
    @key_point.destroy
  end

  private
  def key_point_params
    params.require(:key_point).permit(
      :point,
      :lesson_id
    )
  end
end
