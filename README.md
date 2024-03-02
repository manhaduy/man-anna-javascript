# man-anna-javascript

Trello:
https://trello.com/b/DlLUbeEp/ha-duy-man-task

Example To Do Tracker:
https://scintillating-swan-248b51.netlify.app/todo-tracker/


# Step to step to perform git

## Clone code 

```bash
$ git clone https://github.com/manhaduy/man-anna-javascript
$ cd man-anna-javascript
```

## how to push code

```bash
# add file
$ git add .

# commit message 
$ git commit -m "do variable"

# push code
$ git push
```

## step to step to implement an new feature

```bash
# 1. check current branch
$ git branch --show-current

# 2. checkout 1 new branch from develop branch
$ git checkout -b feature/{name branch}

# 3. check status file
$ git status

# 4. add all file changes in current branch
$ git add .

# 5. commit message
$ git commit -m "xxxxx"

# 6. push code on current branch
$ git push

## if the branch is first in local, then:
$  git push --set-upstream origin feature/overview-git
```

project 2-4 branch:  main/master, develop, qc, uat
- main/master: code use to live production for user.
    - code A
- develop: use to developer implement new feature and test before up len main/master & deploy live production
    - feature B -> code B
    - feature C -> code C