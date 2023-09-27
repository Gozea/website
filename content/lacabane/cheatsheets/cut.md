+++
title = 'cut'
description = "cut line from an input"
date = 2023-09-27T14:59:19+02:00
draft = false
+++

## Cutting characters in line

Keep only characters 1 to 5 in lines of input

```cut -c 1-5 file```

Keep only characters until the 5th in line

```cut -c -5 file```

## Field separator

Keep only the 5th column

```cut -d ' ' -f5```
