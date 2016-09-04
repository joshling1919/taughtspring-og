class Api::KeyPointsController < ApplicationController
  def create
    @key_point = KeyPoint.new(key_point_params)
    if @key_point.save
      render :show
    else
      render json: @key_point.errors.full_messages, status: 422
    end
  end
  private
  def key_point_params
    params.require(:key_point).permit(
      :point,
      :key_point_id
    )
  end
end
