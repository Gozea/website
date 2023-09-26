+++
title = 'sed'
description = "Script EDitor"
date = 2023-09-26T18:14:19+02:00
draft = false
+++

## Substitutions

Substitute first pattern1 of each line by pattern2

```sed 's/pattern1/pattern2/' <originalfile >newfile```

Substitue ALL pattern1 by pattern 2

```sed 's/pattern1/pattern2/g' <originalfile >newfile```

## subpatterns

Apply substitution on line only on lines where patternA appears

```sed '/patternA/s/pattern1/pattern2/' <originalfile >newfile```

## Flags

Apply directly changes on file 

```sed -i 's/pattern1/pattern2/g' file```

Chain commands

```sed -i -e 's/pattern1/pattern2/g' -e 's/pattern3/pattern4/g' file```

## Deletion

Delete line where pattern appear

```sed '/pattern/d'```

