// expecting time to be a string in the format like '8:15' or '12:30'
/*
- '0:00' > 'midnight'
- '12:00' > 'midday'
- '2:00' > 'two o'clock'
- '2:03' > 'three past two'
- '2:11' > 'eleven past two'
- '2:15' > 'quarter past two' 
- '2:30' > 'half past two'
- '2:33' > 'twenty seven to three'
- '2:40' > 'twenty to three'
- '2:45' > 'quarter to three' 
- '2:55' > 'five to three'

Convert time string to english word (string to string)
So for input it is only 0-12hr
12:30 is possible
Single digit hour dont start with zero
Before 30min mark it is minute past hour
After 30min mark it is minute to next hour

Solution
SPlit hour and minutes
00 minute
30 minute
<30 minute
>30 minute
*/

function convertTimeToWords(time) {
  // TODO: real code goes here!
  let [hour, minute] = time.split(":");
  hour = Number(hour);
  minute = Number(minute);
  int_to_string = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
  };

  if (minute === 0) {
    if (hour === 0) {
      return "midnight";
    } else if (hour === 12) {
      return "midday";
    } else {
      return int_to_string[hour] + " o'clock";
    }
  } else if (minute === 30) {
    return `half past ${int_to_string[hour]}`;
  } else if (minute < 30) {
    if (minute === 15) {
      return "quarter past " + int_to_string[hour];
    } else {
      return int_to_string[minute] + " past " + int_to_string[hour];
    }
  } else {
    if (minute === 45) {
      return "quarter to " + int_to_string[hour + 1];
    } else {
      return int_to_string[60 - minute] + " to " + int_to_string[hour + 1];
    }
  }
}

module.exports = { convertTimeToWords };
