class Api::ObjectivesController < ApplicationController
  def create
    @objective = Objective.new(objective_params)
    if @objective.save
      render :show
    else
      render json: @objective.errors.full_messages, status: 422
    end
  end

  private
  def objective_params
    params.require(:objective).permit(
      :description,
      :lesson_id
    )
  end
end
