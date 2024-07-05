-- Schema: CREATE TABLE "gigasecond" ("moment" TEXT, "result" TEXT);
-- Task: update the gigasecond table and set the result based on the moment.

UPDATE gigasecond
SET result = 
  CASE 
    WHEN strftime('%Y-%m-%d', moment) IS NOT NULL THEN strftime('%Y-%m-%dT%H:%M:%S', datetime(moment, '+1000000000 seconds'))
    ELSE 'invalid moment'
  END;