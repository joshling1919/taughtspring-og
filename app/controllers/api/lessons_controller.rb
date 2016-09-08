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
      # @lesson.sections.each do |section|
      #   debugger;
      #   if params[:lesson][:]
      #
      #   end
      #   section.update_attributes(
      #     cfus_attributes: [  ]
      #   )
      # end
      #
      #
      # # if params[:lesson][:sections_attributes]
      # #   params[:lesson][:sections_attributes].each do |section|
      # #     section_data = section[1]
      # #
      # #     if section_data[:cfus]
      # #       section_data[:cfus].each do |cfu|
      # #         cfu_data = cfu[1]
      # #         debugger;
      # #       end
      # #     end
      # #     debugger;
      # #   end
      # # end
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
