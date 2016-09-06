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

      params[:lesson][:sections].each do |section|
        section_object = section[1]
        section_name = section_object[:name]
        section_description = section_object[:description]
        new_section = Section.create(lesson_id: @lesson.id,
        name: section_name, description: section_description)
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
    @lessons = Lesson.all.includes(:user)
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
      :date
    )
  end
end
