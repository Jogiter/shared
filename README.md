# shared

## dev

```sh
# add dependency
lerna add pkg --scope pkgName --save
# remove dependency
lerna exec yarn remove pkg --scope pkgName

# better git-commit
yarn commit

# prepare to publish to npm
lerna run prepare

# update version
lerna version

# publish
lerna publish from-package
```
