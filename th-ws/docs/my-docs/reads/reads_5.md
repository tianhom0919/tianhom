---
sidebar_position: 5
---

# Regular Expressions

## What Are Regular Expressions?

Regular expressions (commonly abbreviated as `regex` or `regexp`) are sequences of characters that define search patterns. They are like powerful search tools used to match, find, and manipulate text based on specific patterns.

In simpler terms, they allow you to:
- Search for specific patterns of text.
- Extract data from strings.
- Validate input formats (e.g., email addresses, phone numbers).
- Perform search-and-replace operations.

Examples:
- A regex like `\d+` finds sequences of digits.
- A regex like `^[a-z]+$` checks if a string contains only lowercase letters.

### Who Invented Regular Expressions?

The concept of regular expressions was developed in the 1950s by American mathematician Stephen Cole Kleene. He introduced regular sets and the Kleene star (*), a mathematical notation used to describe patterns in strings, as part of his work on automata theory and formal language.

Ken Thompson, a computer scientist, implemented regular expressions in the 1960s as part of early text-processing tools for Unix systems, making regex practical and accessible in computer science.

## List of Regex Syntax

### Character Classes

| Syntax  | Description                                                   |
|---------|---------------------------------------------------------------|
| `[abc]` | Matches any single character in the set (a, b, or c).         |
| `[^abc]`| Matches any single character not in the set.                  |
| `[a-z]` | Matches any character in the range a to z.                    |
| `\d`    | Matches any digit (equivalent to `[0-9]`).                    |
| `\D`    | Matches any non-digit.                                        |
| `\w`    | Matches any word character (letters, digits, or `_`).         |
| `\W`    | Matches any non-word character.                               |
| `\s`    | Matches any whitespace character (spaces, tabs, etc.).        |
| `\S`    | Matches any non-whitespace character.                         |

### Anchors

| Syntax  | Description                             |
|---------|-----------------------------------------|
| `^`     | Matches the start of a string.          |
| `$`     | Matches the end of a string.            |
| `\b`    | Matches a word boundary.                |
| `\B`    | Matches a non-word boundary.            |

### Quantifiers

| Syntax     | Description                                                      |
|------------|------------------------------------------------------------------|
| `*`        | Matches 0 or more occurrences of the preceding element.          |
| `+`        | Matches 1 or more occurrences of the preceding element.          |
| `?`        | Matches 0 or 1 occurrence of the preceding element (non-greedy). |
| `{n}`      | Matches exactly n occurrences of the preceding element.          |
| `{n,}`     | Matches n or more occurrences of the preceding element.          |
| `{n,m}`    | Matches between n and m occurrences of the preceding element.    |

### Group and Capturing

| Syntax      | Description                                                           |
|-------------|-----------------------------------------------------------------------|
| `(abc)`     | Matches and captures `abc` as a group.                                |
| `(?:abc)`   | Matches `abc` without capturing it (non-capturing group).             |
| `(?=abc)`   | Positive lookahead (asserts that `abc` follows without consuming it). |
| `(?!abc)`   | Negative lookahead (asserts that `abc` does not follow).              |
| `(?<=abc)`  | Positive lookbehind (asserts that `abc` precedes).                    |
| `(?<!abc)`  | Negative lookbehind (asserts that `abc` does not precede).            |

### Flags

| Flag | Description                                              |
|------|----------------------------------------------------------|
| `i`  | Case-insensitive matching.                               |
| `g`  | Global search (matches all occurrences).                 |
| `m`  | Multiline mode (`^` and `$` match the start/end of lines).|
| `s`  | Dotall mode (`.` matches newlines).                      |
| `x`  | Extended mode (ignores whitespace for readability).      |

## Example

**Example Regex:**
```regex
(?<name>[A-Za-z]+)\s(?<age>\d{1,3})\syears\sold,\semail:\s(?i)([a-z\d._%+-]+@[a-z\d.-]+\.[a-z]{2,4})(?-i)\s\((?#flags)\d{3}-\d{3}-\d{4}\)
```

**Sample Input:**
```plaintext
John 28 years old, email: john.doe123@example.com (123-456-7890)
```

### Explanation

The regex starts by capturing a name using `[A-Za-z]+` in a named group called `name`.

It matches a space (`\s`) and then captures an age using `\d{1,3}` in the `age` group.

It continues with matching the text "years old" exactly as it appears.

Next, it captures an email:
- The `(?i)` flag ensures case-insensitive matching for the email address.
- Matches one or more valid email characters (`[a-z\d._%+-]+`).
- Matches the `@` symbol, followed by the domain and a top-level domain.
- The `(?-i)` flag turns off case-insensitivity.
- Finally, it captures a phone number in the format `(123-456-7890)` using parentheses and `\d{3}-\d{3}-\d{4}`.

---