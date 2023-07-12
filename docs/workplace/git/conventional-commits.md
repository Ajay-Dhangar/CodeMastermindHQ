---
id: conventional-commits
hide_title: true
sidebar_label: Conventional Commits
---

# How to generate meaningful commits. We apply Conventional Commits standart.

## [Recommendations from docuzaurus team](https://v2.docusaurus.io/docs/contributing#semantic-commit-messages)


### Semantic commit messages

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

**Example**

The various types of commits:

*   `feat`: (new feature for the user, not a new feature for build script)
*   `fix`: (bug fix for the user, not a fix to a build script)
*   `docs`: (changes to the documentation)
*   `style`: (formatting, missing semi colons, etc; no production code change)
*   `refactor`: (refactoring production code, eg. renaming a variable)
*   `test`: (adding missing tests, refactoring tests; no production code change)
*   `chore`: (updating grunt tasks etc; no production code change)

Use lower case not title case!

## Code conventions

### Style guide

[Prettier](https://prettier.io/) will catch most styling issues that may exist in your code. You can check the status of your code styling by simply running `npm run prettier`.

However, there are still some styles that Prettier cannot pick up.

### General

*   **Most important: Look around.** Match the style you see used in the rest of the project. This includes formatting, naming files, naming things in code, naming things in documentation.
*   "Attractive"

### Documentation

*   Do not wrap lines at 80 characters - configure your editor to soft-wrap when editing documentation.

## [Recommendations from yandex team member](https://habr.com/ru/company/yandex/blog/431432/)

*   We write in the body of the commit _what_ has  changed and _why_.
*   We use the following types of commits.

| type | description |  
|-|-|
| **build** | Сборка проекта или изменения внешних зависимостей |
| **ci** | Настройка CI и работа со скриптами |
| **docs** | Обновление документации |
| **feat** | Добавление нового функционала |
| **fix** | Исправление ошибок |
| **perf** | Изменения направленные на улучшение производительности |
| **refactor** | Правки кода без исправления ошибок или добавления новых функций |
| **revert** | Откат на предыдущие коммиты |
| **style** | Правки по кодстайлу (табы, отступы, точки, запятые и т.д.) |
| **test** | Добавление тестов |  


* We write the description in an imperative mood like git itself
