-- Table Users
INSERT INTO users (username, email, password, first_name, last_name, date_joined)
VALUES
    ('johndoe', 'johndoe@example.com', 'hashed_password_1', 'John', 'Doe', NOW()),
    ('janedoe', 'janedoe@example.com', 'hashed_password_2', 'Jane', 'Doe', NOW()),
    ('alice', 'alice@example.com', 'hashed_password_3', 'Alice', 'Smith', NOW()),
    ('bob', 'bob@example.com', 'hashed_password_4', 'Bob', 'Johnson', NOW());

-- Table Itineraries
INSERT INTO itineraries (user_id, title, description, start_date, end_date)
VALUES
    (1, 'Road Trip in the USA', 'A road trip from New York to Los Angeles with stops in major cities.', '2024-06-01', '2024-06-15'),
    (2, 'Europe Backpacking', 'Backpacking through Europe visiting France, Germany, and Italy.', '2024-07-10', '2024-08-05'),
    (3, 'Japan Tour', 'Cultural exploration of Japan, including Tokyo, Kyoto, and Osaka.', '2024-09-01', '2024-09-14'),
    (4, 'Southeast Asia Adventure', 'Exploring Thailand, Vietnam, and Cambodia.', '2024-10-01', '2024-10-20');

-- Table Steps
INSERT INTO steps (itinerary_id, title, description, location, start_time, end_time)
VALUES
    -- Steps for 'Road Trip in the USA'
    (1, 'New York City', 'Start in New York City with a city tour.', 'New York, USA', '2024-06-01 09:00:00', '2024-06-01 18:00:00'),
    (1, 'Philadelphia', 'Visit historical sites and try the famous Philly cheesesteak.', 'Philadelphia, USA', '2024-06-02 10:00:00', '2024-06-02 17:00:00'),
    (1, 'Washington D.C.', 'Visit the National Mall and Smithsonian museums.', 'Washington D.C., USA', '2024-06-03 10:00:00', '2024-06-03 18:00:00'),

    -- Steps for 'Europe Backpacking'
    (2, 'Paris', 'Explore the Eiffel Tower, the Louvre, and enjoy Parisian cafes.', 'Paris, France', '2024-07-11 09:00:00', '2024-07-11 18:00:00'),
    (2, 'Berlin', 'Tour the Berlin Wall, Brandenburg Gate, and enjoy the nightlife.', 'Berlin, Germany', '2024-07-15 09:00:00', '2024-07-15 18:00:00'),
    (2, 'Rome', 'Visit the Colosseum, Roman Forum, and Vatican City.', 'Rome, Italy', '2024-07-20 10:00:00', '2024-07-20 18:00:00'),

    -- Steps for 'Japan Tour'
    (3, 'Tokyo', 'Visit the Shibuya Crossing, Tokyo Tower, and Akihabara.', 'Tokyo, Japan', '2024-09-02 09:00:00', '2024-09-02 18:00:00'),
    (3, 'Kyoto', 'See the Golden Pavilion and Fushimi Inari Shrine.', 'Kyoto, Japan', '2024-09-05 09:00:00', '2024-09-05 18:00:00'),
    (3, 'Osaka', 'Explore Osaka Castle and Dotonbori.', 'Osaka, Japan', '2024-09-08 09:00:00', '2024-09-08 18:00:00'),

    -- Steps for 'Southeast Asia Adventure'
    (4, 'Bangkok', 'Visit the Grand Palace and Wat Pho.', 'Bangkok, Thailand', '2024-10-02 09:00:00', '2024-10-02 18:00:00'),
    (4, 'Ho Chi Minh City', 'Tour the War Remnants Museum and Cu Chi Tunnels.', 'Ho Chi Minh City, Vietnam', '2024-10-05 09:00:00', '2024-10-05 18:00:00'),
    (4, 'Siem Reap', 'Explore the Angkor Wat temple complex.', 'Siem Reap, Cambodia', '2024-10-10 09:00:00', '2024-10-10 18:00:00');

-- Table Collaborations
INSERT INTO collaborations (itinerary_id, user_id, role)
VALUES
    (1, 2, 'editor'),  -- Jane joins John's itinerary as an editor
    (1, 3, 'viewer'),  -- Alice joins as a viewer
    (2, 3, 'editor'),  -- Alice joins Jane's itinerary as an editor
    (3, 4, 'editor');  -- Bob joins Alice's itinerary as an editor

-- Table Comments
INSERT INTO comments (step_id, user_id, content)
VALUES
    (1, 2, 'This stop in NYC is amazing! You should also visit Central Park.'),
    (5, 2, 'You have to try the local food in Paris, especially croissants!'),
    (9, 3, 'Tokyo is great! Don’t forget to check out the street food around Shibuya.'),
    (11, 4, 'The temples in Cambodia are breathtaking, definitely a must-see!');
