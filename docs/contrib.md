## Contribution

### To Get Started

- Clone the repo, cd to repo folder and run `npm run contrib` to install all the dependencies.

### To Contribute:

Please branch from `dev`, commit your work on your branch, then send a pull request to merge to `dev`:

    git checkout dev
    git checkout -b feat/short-name
    # do your work, add, commit
    # when done, make a pull request to merge back to dev. Please write a summary of changes in the pull request overview.

**Maintainer**

Review the changes, bump up the version, update `changelog.md` and merge to master:

  `git checkout master && git merge --no-ff dev`

When done, merge master to dev: `git checkout dev && git merge --no-ff master`
