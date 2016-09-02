class AddThumbnailUrl < ActiveRecord::Migration
  def change
    add_column :lessons, :thumbnail_url, :string
  end
end
