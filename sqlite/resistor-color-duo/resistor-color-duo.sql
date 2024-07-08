-- Schema: CREATE TABLE "color_code" ("color1" TEXT, "color2" TEXT, "result" INT);
-- Task: update the color_code table and set the result based on the two colors.

CREATE TEMP TABLE "color_code_map" (
  "color" TEXT PRIMARY KEY,
  "value" INT
);

INSERT INTO "color_code_map" ("color", "value") VALUES 
  ('black', 0),
  ('brown', 1),
  ('red', 2),
  ('orange', 3),
  ('yellow', 4),
  ('green', 5),
  ('blue', 6),
  ('violet', 7),
  ('grey', 8),
  ('white', 9);

UPDATE color_code SET result = (
  SELECT 
    (color_1.value * 10) + color_2.value
  FROM 
    color_code_map color_1,
    color_code_map color_2
  WHERE 
    color_1.color = color_code.color1 AND
    color_2.color = color_code.color2
);