-- Schema: CREATE TABLE "allergies" ("task" TEXT, "item" TEXT, "score" INT NOT NULL, "result" TEXT);
-- Task: update the bob allergies and set the result based on the task.
--       - The `allergicTo` task expects `true` or `false` based on the `score` and the `item` fields.
--       - For the `list` task you have to write corresponding items to the result field

CREATE TEMP TABLE "allergies_map" (
  "item" TEXT PRIMARY KEY,
  "code" INT
);

INSERT INTO "allergies_map" ("item", "code") VALUES 
  ('eggs', 1),
  ('peanuts', 2),
  ('shellfish', 4),
  ('strawberries', 8),
  ('tomatoes', 16),
  ('chocolate', 32),
  ('pollen', 64),
  ('cats', 128);


UPDATE allergies
  SET result = (
    SELECT 
      result
    FROM (
      SELECT 
        IIF(score & code = code,'true','false') AS result
      FROM (
        SELECT 
          code
        FROM 
          allergies_map
        WHERE 
          allergies_map.item = allergies.item
      )
    WHERE 
      task = 'allergicTo'
    )
  );

UPDATE allergies
  SET 
    result = (
      SELECT 
        IIF(score = 0,'',group_concat(item ,', '))
    FROM 
      allergies_map
    WHERE 
      score & code = code
    )
WHERE 
  task = 'list';