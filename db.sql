CREATE DATABASE videos_database;
--\l lists all your database 
--\c videos_database

CREATE TABLE videos(
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  url VARCHAR(50) NOT NULL,
  rating SERIAL
);

INSERT INTO videos (title, url, rating)
VALUES ('Learn Node JS', 'https://www.youtube.com/watch?v=hGYNW8-_c3U', 60),
	('Coding Adventure: Chess AI', 'https://www.youtube.com/watch?v=U4ogK0MIzqk', 671);