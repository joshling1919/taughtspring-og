# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
views           | integer   | not null
favorites       | integer   | not null, indexed, unique

## sections
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
title          | string    | not null
description    | text      |
est_time       | integer   |
author_id      | integer   | not null, foreign key (references users), indexed
lesson_id      | integer   | not null, foreign key (references lessons), indexed

## resources
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
url            | string    | not null
type           | string    | not null
section_id     | integer   | not null, foreign key (references sections), indexed

## ChecksForUnderstanding
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
question       | string    | not null
answer         | string    |
section_id     | integer   | not null, foreign key (references sections), indexed

## Misconceptions
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
misconception| string    | not null
section_id   | integer   | not null, foreign key (references sections), indexed


## lessons
column name | data type | details
------------|-----------|-----------------------
id           | integer   | not null, primary key
author_id    | integer   | not null, foreign key (references users), indexed
title        | string    | not null
subject      | string    | not null
grade_level  | integer   | not null
est_time     | integer   |
lessonDate   | date      |
datecreated  | date      | not null
objective    | text      | not null
key_points   | text      |
