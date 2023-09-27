+++
title = 'awk'
description = "string manipulation"
date = 2023-09-27T14:01:32+02:00
draft = false
+++

## column manipulation

Print the 1st 3rd and 5th columns in a file sucessfully

```awk '{print $1 $3 $5}' file```

Print the first column with "/" as separator

```awk -F "/" '{print $1}' file```

Print the last column 

```awk '{print $NF}' file```

## Pattern searching

Print 2nd column on line where pattern is found

```awk '/pattern/ {print $2}' file```

Print 2nd column on line where pattern is found on 1st column

```awk '$1 ~ /pattern/ {print $2} file```

## Arithmetics 

Add/concatenate 1st and 2nd columns

```awk {print $1 + $2} file```

If statements 

```awk { if($2 + $3 > 10) print } file```

## Line number

Print from line 2 to 4 with line number next to it

```awk 'NR==2, NR==4 {print NR, $0} file```
