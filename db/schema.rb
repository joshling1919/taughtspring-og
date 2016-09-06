# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160906224636) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cfus", force: :cascade do |t|
    t.string   "question"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "section_id", null: false
    t.string   "answer"
  end

  add_index "cfus", ["section_id"], name: "index_cfus_on_section_id", using: :btree

  create_table "key_points", force: :cascade do |t|
    t.integer  "lesson_id",  null: false
    t.string   "point"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "key_points", ["lesson_id"], name: "index_key_points_on_lesson_id", using: :btree

  create_table "lessons", force: :cascade do |t|
    t.integer  "user_id",       null: false
    t.string   "title",         null: false
    t.string   "subject"
    t.integer  "grade"
    t.date     "lesson_date"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.string   "image_url"
    t.string   "thumbnail_url"
  end

  add_index "lessons", ["title"], name: "index_lessons_on_title", using: :btree
  add_index "lessons", ["user_id"], name: "index_lessons_on_user_id", using: :btree

  create_table "misconceptions", force: :cascade do |t|
    t.string   "misconception"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "section_id",    null: false
  end

  add_index "misconceptions", ["section_id"], name: "index_misconceptions_on_section_id", using: :btree

  create_table "objectives", force: :cascade do |t|
    t.integer  "lesson_id",   null: false
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "objectives", ["lesson_id"], name: "index_objectives_on_lesson_id", using: :btree

  create_table "sections", force: :cascade do |t|
    t.string   "name"
    t.integer  "minutes"
    t.text     "description"
    t.integer  "lesson_id",   null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "sections", ["lesson_id"], name: "index_sections_on_lesson_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.integer  "grade"
    t.string   "subject"
    t.text     "bio"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["first_name"], name: "index_users_on_first_name", using: :btree
  add_index "users", ["last_name"], name: "index_users_on_last_name", using: :btree

end
