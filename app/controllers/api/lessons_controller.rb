class Api::LessonsController < ApplicationController
  def create
    @lesson = Lesson.new(lesson_params)

    if @lesson.save
      if params[:lesson][:objectives]
        params[:lesson][:objectives].each do |objective|
          obj = objective[1]
          Objective.create(lesson_id: @lesson.id,
          description: obj[:description])
        end
      end

      if params[:lesson][:key_points]
        params[:lesson][:key_points].each do |key_point|
          kp = key_point[1]
          KeyPoint.create(lesson_id: @lesson.id,
          point: kp[:point])
        end

      end

      if params[:lesson][:sections]
        params[:lesson][:sections].each do |section|
          section_object = section[1]
          section_name = section_object[:name]
          section_description = section_object[:description]
          new_section = Section.create(lesson_id: @lesson.id,
          name: section_name, description: section_description)

          misconceptions = section_object[:misconceptions]
          if misconceptions
            misconceptions.each do |misconception|
              mis = misconception[1];
              Misconception.create(section_id: new_section.id,
              misconception: mis[:misconception])
            end
          end

          cfus = section_object[:cfus]
          if cfus
            cfus.each do |cfu|
              cfu_arr = cfu[1]
              Cfu.create(section_id: new_section.id, question: cfu_arr[:question],
              answer: cfu_arr[:answer])
            end
          end

        end
      end
      render :show
    else
      render json: @lesson.errors.full_messages, status: 422
    end
  end

  def update
    @lesson = Lesson.find(params[:id])
    if @lesson.update_attributes(lesson_params)
        if params[:lesson][:deleted_objectives]
          params[:lesson][:deleted_objectives].each do |obj_id|
            Objective.destroy(obj_id)
          end
        end

        if params[:lesson][:deleted_key_points]
          params[:lesson][:deleted_key_points].each do |kp_id|
            KeyPoint.destroy(kp_id)
          end
        end

        if params[:lesson][:deleted_sections]
          params[:lesson][:deleted_sections].each do |section_id|
            Section.destroy(section_id)
          end
        end

        if params[:lesson][:deleted_cfus]
          params[:lesson][:deleted_cfus].each do |cfu_id|
            Cfu.destroy(cfu_id)
          end
        end

        if params[:lesson][:deleted_misconceptions]
          params[:lesson][:deleted_misconceptions].each do |mis_id|
            Misconception.destroy(mis_id)
          end
        end

      render :show
    else
      render json: @lesson.errors.full_messages, status: 422
    end
  end

  def show
    @lesson = Lesson.find(params[:id])
  end

  def index
    if params[:filter].present?
      if params[:filter][:subject] && params[:filter][:grade]
        grade_int = params[:filter][:grade][0].to_i
        subj = params[:filter][:subject]
        @lessons = Lesson.where(subject: subj,
        grade: grade_int)
      elsif params[:filter][:subject]
        @lessons = Lesson.subject(params[:filter][:subject]).includes(:user)
      end
    else
      @lessons = Lesson.all.includes(:user)
    end
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
      objectives_attributes: [:id, :description],
      key_points_attributes: [:id, :point],
      sections_attributes: [:id, :name, :description,
        cfus_attributes: [ :id, :question, :answer ],
        misconceptions_attributes: [:id, :misconception]
      ]
    )
  end
end
