-- Schema: CREATE TABLE "bob" ("input" TEXT, "reply" TEXT);
-- Task: update the bob table and set the reply based on the input.

UPDATE bob
SET reply = 
    CASE
      WHEN input REGEXP '^\s*$'
        THEN 'Fine. Be that way!'
      WHEN input REGEXP '[A-Z]\?\s*$' AND NOT input REGEXP '[a-z]'
        THEN 'Calm down, I know what I''m doing!'
      WHEN input REGEXP '[A-Z]' AND NOT input REGEXP '[a-z]'
        THEN 'Whoa, chill out!'
      WHEN input REGEXP '\?\s*$'
        THEN 'Sure.'
      ELSE 'Whatever.'
    END;