class Api::SearchController < ApplicationController
  def index
    @lessons = Lesson.where("lower(title) LIKE :query OR lower(subject) LIKE :query",
      query: "%#{search_params[:query].downcase}%")
    render 'api/lessons/index'
    # Track.where("lower(artist) LIKE :query OR lower(title) LIKE :query", query: "%#{search_params[:query].downcase}%")
  end

  private
  def search_params
    params.require(:search).permit(:query)
  end
end
