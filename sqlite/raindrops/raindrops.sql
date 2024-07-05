-- Schema: CREATE TABLE "raindrops" ("number" INT, "sound" TEXT);
-- Task: update the raindrops table and set the sound based on the number.

UPDATE raindrops 
SET sound = (
  IIF(number % 3 = 0,'Pling','') ||
  IIF(number % 5 = 0,'Plang','') ||
  IIF(number % 7 = 0,'Plong','') ||
  IIF(number % 7 > 0 AND number % 5 > 0 AND number % 3 > 0,number,'')
);