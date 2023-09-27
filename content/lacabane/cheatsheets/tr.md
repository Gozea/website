+++
title = 'tr'
description = "translate characters"
date = 2023-09-27T15:10:54+02:00
draft = false
+++

## Translate 

Replace characters from first field by mapped one in second field

```echo "h3ll0 w0rld" | tr '30' 'eo'```
```>hello world```

Change lower case to upper case

```echo "hello world" | tr  '[:lower:]' '[:upper:]"```
```>HELLO WORLD```

## Delete

Delete all characters in the field

```echo "hetlloy wporlda" | tr -d 'typa'```
```>hello world```

Delete all characters except the ones in the field 

```echo "hetlloy wporlda" | tr -cd 'helowrld'```
```>hello world```

Only keep printable characters

```echo �렃hello world렃" | tr -cd '[:print:]'```

## Squeeze characters in field

Keep only one characters when several identical ones are next to each other

```echo "hellooooooooooooo       woooooorld" | tr -s "o "```
```>hello world```
