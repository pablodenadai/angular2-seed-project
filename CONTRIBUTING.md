# Contributing to Angular 2 - Seed Project

# <a name="tldr"></a> TL;DR

- Include Node/NPM version when reporting an issue.
- Format your code/stack trace. See [GitHub Flavored Markdown][github-markdown].
- Gulp task isn't working? Try `npm install`.
- Can find NPM module? Try `npm install`.

# Contributing

As a contributor, here are the guidelines we would like you to follow:

 - [Question or Problem?](#question)
 - [Issues and Bugs](#issue)
 - [Feature Requests](#feature)
 - [Submission Guidelines](#submit)
 - [Coding Rules](#rules)
 - [Commit Message Guidelines](#commit)

## <a name="question"></a> Got a Question or Problem?

If you have questions about how to *use* the project, please direct them to the [Gitter][gitter] channel.

## <a name="issue"></a> Found an Issue?
If you find a bug in the source code or a mistake in the documentation, you can help us by [submitting an issue](#submit-issue) to our [GitHub Repository][github]. Even better, you can submit a Pull Request with a fix.

## <a name="feature"></a> Want a Feature?
You can *request* a new feature by [submitting an issue](#submit-issue) to our [GitHub Repository][github]. If you would like to *implement* a new feature, please submit an issue with a proposal for your work first, to be sure that we can use it.

## <a name="submit"></a> Submission Guidelines

### <a name="submit-issue"></a> Submitting an Issue
Before you submit an issue, search the archive, maybe your question was already answered.

If your issue appears to be a bug, and hasn't been reported, open a new issue.
Help us to maximize the effort we can spend fixing issues and adding new
features, by not reporting duplicate issues.  Providing the following information will increase the chances of your issue being dealt with quickly:

* **Overview of the Issue**
* **Browser and Operating System**
* **Node and NPM versions**
* **Related Issues**
* **Suggest a Fix**

## <a name="rules"></a> Coding Rules
To ensure consistency throughout the source code, keep these rules in mind as you are working:

* All features or bug fixes **must be tested** by one or more specs.
* In general we should follow [TypeScript naming conventions][typescript-naming]:

#### Classes:
- Example: `Compiler`, `ApplicationMetadata`
- Camel case with first letter upper-case
- In general prefer single words. (This is so that when appending `Proto` or `Factory` the class is still reasonable to work with.)
- Should not end with `Impl` or any other word which describes a specific implementation of an interface.

#### Methods and functions:
- Example: `bootstrap`, `someMethod`
- Should be camel case with first lower case

#### Constants
- Example: `CORE_DIRECTIVES`
- Should be all uppercase with SNAKE_CASE

## <a name="commit"></a> Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted.  This leads to **more
readable messages** that are easy to follow when looking through the **project history**.

### Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests or correcting existing tests
* **build** Changes that affect the build system, CI configuration or external dependencies (example scopes: gulp, broccoli, npm)
* **chore**: Other changes that don't modify `src` or `test` files

### Scope
The scope could be anything specifying place of the commit change.

### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer
The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

> This file was created based on the [Angular2 Contributing][angular2-contrib] standards.

[readme]: https://github.com/ghpabs/angular2-seed/blob/master/README.md
[gitter]: https://gitter.im/ghpabs/angular2-seed
[github]: https://github.com/ghpabs/angular2-seed
[github-markdown]: https://help.github.com/articles/github-flavored-markdown

[typescript-naming]: https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines
[angular2-contrib]: https://github.com/angular/angular/blob/master/CONTRIBUTING.md
