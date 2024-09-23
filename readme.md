# Pair Programming exercise

Write an function that converts time into the corresponding english words - eg. '8:30' -> 'half past eight'

## Examples

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
