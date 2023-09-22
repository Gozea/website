+++
title = 'Useful git commands'
description = "Some git commands I'm always using"
date = 2023-09-22T13:30:06+02:00
draft = false
+++

## branching

New branch

```git checkout -b <new-branch>```

push branch on remote

```git push -u origin <branch>```

switch branch 

```git checkout <branch>```

## history

check old commits and get their hash

```git log```

go back in time (definitive)

```git reset --hard <commit-hash>```

go back in time 

```git revert <commit-hash>```

## stash

stash your current uncommited edits and go back to last commit-hash

```git stash```

reapply stash

```git stash pop```
