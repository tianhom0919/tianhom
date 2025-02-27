---
sidebar_position: 3
---

# Git Commit Best Practices

A good Git commit is essential for collaboration with other developers, tracking changes and documenting the changes made in a project. Here are the best practices for writing an effective commit message.

## Structuring Commit Messages

**Subject**
 - A short summary of the changes made (10 characters or less)
 - Written in imperative mood, e.g. "*Add new Markdown docs*" instead of "*Added new Markdown docs*"

**Body (Optional)**
- A more detailed explanation of the change
- Explain why the change was necessary and how it solves the problem

**Footer (Optional)**
- Metadata such as issue references, breaking changes, etc
- Example: `Closes #123`, `BREAKING CHANGE: Update API signature`

A commit should address one logical change or purpose.

You should also avoid bundling unrelated changes in one commit.

:::tip

Make messages easy to understand for both current and future contributors and avoid vague phrases like *"fix bugs"* or *"update files"*. Instead, *"Fix null pointer exception in user authentication"*.

:::

## Consistent Formatting

Examples of subject prefixes for clarity:

- `feat`: for new features (e.g. `feat: Add user login support`)
- `fix`: for bug fixes (e.g. `fix: Correct typo in README`)
- `docs`: for documentation updates
- `style`: for formatting/code style (e.g. spaces, indentation)
- `refactor`: for code restructuring without functionality changes
- `test`: for adding/modifying tests

Include a ticket number or issue reference when applicable.

Example: `fix: Resolve crash when loading profile (#45)`

:::warning

Ensure the changes are tested thoroughly and works as intended before commiting!

:::

## Example of a Good Commit Message

```
feat: Add user authentication to the API

Add JWT-based user authentication to secure the API. 
This implementation includes:
- User login endpoint
- Middleware for token verification
- Token refresh functionality

Closes #234
```

By following these practices, you ensure that your commit history is meaningful and maintains high-quality documentation for the project.

---