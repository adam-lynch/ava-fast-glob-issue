const fastGlob = require("fast-glob");
const path = require("path");

(async () => {
  const globs = [
    "*.txt",
    "package.json",
    "yarn.lock",
  ];
  const commonOptions = {
    absolute: true,
    cwd: path.join(__dirname, "fixtures"),
    dot: true,
    followSymbolicLinks: false,
    onlyDirectories: false,
    onlyFiles: true,
    globstar: true,
  }

  console.log("UNIQUE=true", await fastGlob(globs, {
    ...commonOptions,
    unique: false
  }));
  console.log("UNIQUE=false", await fastGlob(globs, {
    ...commonOptions,
    unique: false
  }));

  const dynamicGlobs = [
    "*.txt",
    "(package.json|yarn.lock)",
  ];
  console.log("dynamic UNIQUE=true", await fastGlob(dynamicGlobs, {
    ...commonOptions,
    unique: false
  }));
  console.log("dynamic UNIQUE=false", await fastGlob(dynamicGlobs, {
    ...commonOptions,
    unique: false
  }));
})()