CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255)
);
CREATE TABLE post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content INTEGER,
    user_id INTEGER,
    FOREIGN KEY (user_id) references person(id)
);
CREATE TABLE post_img(
    id SERIAL PRIMARY KEY,
    url text,
    post_id INTEGER,
    FOREIGN KEY (post_id) references post(id)
);