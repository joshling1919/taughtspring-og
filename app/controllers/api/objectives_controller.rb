class Api::ObjectivesController < ApplicationController
  def create
    @objective = Objective.create(objective_params)
    render :destroy
  end

  def destroy
    @objective = Objective.find(params[:id])
    @objective.destroy
  end

  private
  def objective_params
    params.require(:objective).permit(
      :description,
      :lesson_id
    )
  end
end
