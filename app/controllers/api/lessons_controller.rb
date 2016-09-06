class Api::LessonsController < ApplicationController
  def create
    @lesson = Lesson.new(lesson_params)

    if @lesson.save
      params[:lesson][:objectives].each do |objective|
        Objective.create(lesson_id: @lesson.id,
        description: objective)
      end

      params[:lesson][:key_points].each do |key_point|
        KeyPoint.create(lesson_id: @lesson.id,
        point: key_point)
      end

      render :show
    else
      render json: @lesson.errors.full_messages, status: 422
    end
  end

  def update
    @lesson = Lesson.find(params[:id])
    if @lesson.update_attributes(lesson_params)
      render :show
    else
      render json: @lesson.errors.full_messages, status: 422
    end
  end

  def show
    @lesson = Lesson.find(params[:id])
  end

  def index
    @lessons = Lesson.all
    render :index
  end

  def destroy
    @lesson = Lesson.find(params[:id])
    @lesson.destroy
    render :show
  end

  private
  def lesson_params
    params.require(:lesson).permit(
      :title,
      :user_id,
      :subject,
      :grade,
      :lesson_date,
      :image_url,
      :thumbnail_url,
      :date,
      :objectives,
      :key_points
    )
  end
end
