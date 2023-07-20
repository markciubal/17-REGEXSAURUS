# REGEXSAURUS - A Journey into Artificial Intelligence Via Regular Expressions

## Acceptance Criteria
```
GIVEN a regex tutorial
WHEN I open the tutorial
THEN I see a descriptive title and introductory paragraph explaining the purpose of the tutorial, a summary describing the regex featured in the tutorial, a table of contents linking to different sections that break down each component of the regex and explain what it does, and a section about the author with a link to the author’s GitHub profile
WHEN I click on the links in the table of contents
THEN I am taken to the corresponding sections of the tutorial
WHEN I read through each section of the tutorial
THEN I find a detailed explanation of what a specific component of the regex does
WHEN I reach the end of the tutorial
THEN I find a section about the author and a link to the author’s GitHub profile
```

## REGEX Explanation
REGEX is a way of representing patterns in strings. It can be simple, or it can be difficult. Hopefully this interactive guide can help clarify the concept.

By providing patterns to a REGEX parser, we can extract data in a methodical way. Take email addresses, for example. They can be represented in a variety of ways. 

For example, we've all seen the following:

```
a@b.com
a@b.gov
a.b@c.edu
a.b.c@d.e.com
```

With REGEX, we can write a pattern that matches all of these, and more!

## Summary
You can tell if something is REGEX in JavaScript when it is between two forward slashes: / and /.
After that, the inside is just a bunch of letters, numbers, and symbols that represent different patterns.

To start a pattern, you will use a ^ (caret) character. To end a pattern, use the $ character. So to put together what we've learned so far, REGEX can look like /^ to start, and to end: \$/.
After that, it's more symbols! [a-z] means any letter, a through z, lowercase. [A-Z] means the same, but uppercase. To put them together, you'd use [a-zA-Z].
We can start to look at patterns and get a good understanding of more REGEX rules by breaking down a pattern.

- /^ : Represents the beginning of the string.
- ([a-z0-9_\.-]+) : Matches one or more lowercase letters, digits, underscores, dots, or hyphens, which form the username part of the email address.
- @ : Matches the "@" symbol.
- ([\da-z\.-]+) : Matches one or more lowercase letters, digits, dots, or hyphens, which form the domain name (e.g., "example" in "example.com").
- \. : Matches a dot symbol.
- ([a-z\.]{2,6}) : Matches two to six lowercase letters or dots, representing the top-level domain (e.g., "com", "org", "co.uk").
- $/ : Represents the end of the string.

Examples of valid email addresses that match this regular expression:
- john.doe@example.com
- jane_smith1234@example.co.uk
- info@company.org

Examples of invalid email addresses that do not match this regular expression:
- john.doe@example   (missing domain extension)
- john!doe@example.com (contains special characters in the username)
- @example.com (missing username)

## REGEXSAURUS Application
You can find an AI helper I built called REGEXSAURUS that will break down a REGEX statement for you!

https://regexsaurus-a27124d086aa.herokuapp.com/


## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [OR Operator](#or-operator)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Grouping and Capturing](#grouping-and-capturing)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)
- [Boundaries](#boundaries)
- [Back-references](#back-references)
- [Look-ahead and Look-behind](#look-ahead-and-look-behind)

## Regex Components

### Anchors
Anchors denote the start (^) or the end ($) of a pattern to match.

For example,
```
/^[a-z]{3}$/
```

Would match any lowercase letter three times, starting at the beginning of a string, and up to the end of the third letter match.

### Quantifiers
Quantifiers indicate how many symbols will be matched. There are a few quantifier types.

For example,
```
/^[a-z0-9]{3}$/
```

Would match any lowercase letter or number three times.

```
/^[a-z0-9]+$/
```

Would match any lowercase letter zero or more times.

```
/^[a-z0-9]{2, 5}$/
```

Would match any lowercase letter two to five times.

```
/^[a-z0-9]{3,}$/
```

Would match any lowercase letter three or more times.


### OR Operator
The OR operator | will allow for flexibility to match one pattern or another.

For example,

```
/^([a-z]{3})|([0-9]{3})$/
```

Would match either a-z three times, or 0-9 three times. Combinations of letters and numbers would not match.

### Character Classes
Character classes, denoted by square brackets, allow matching any single character from a set of characters. They provide a concise way to define a group of characters to be matched.

For example,

```
/^[a-z0-9]+$/
```

Would match any lowercase letter or number one or more times.

### Flags
Flags modify the behavior of the regular expression. They are appended at the end of the expression after the second slash.
For example,

For example,

```
/^[a-z]+$/i
```

The 'i' flag makes the expression case-insensitive, so it matches both lowercase and uppercase letters.

### Grouping and Capturing
Parentheses ( ) are used for grouping parts of a regular expression together. They also capture the matched substring for further use.

For example,

```
/^(\d{3})-(\d{2})$/
```

Would match three digits followed by a hyphen and then two more digits. The groups capture the three digits before the hyphen and the two digits after it.

### Bracket Expressions
Bracket expressions allow specifying a range of characters inside square brackets to match any single character within that range.

For example,

```
/^[a-zA-Z0-9]+$/
```

Would match any combination of uppercase letters, lowercase letters, and digits.

### Greedy and Lazy Match
Quantifiers are greedy by default, meaning they match as many characters as possible. However, adding a "?" after the quantifier makes it lazy, matching as few characters as possible.
For example,

```
/<.+>/
```

Would match the largest possible string between "<" and ">", including nested brackets.

```
/<.+?>/
```

Would match the smallest possible string between "<" and ">," avoiding nested brackets.

### Boundaries
Boundaries define positions in the string where matches should occur or should not occur. The most common boundaries are the word boundary (\b) and the start/end of a string (^ and $).

For example,

```
/\bcat\b/
```

Would match the word "cat" but not words like "cats" or "scattered."

### Back-references

Back-references allow referencing previously captured groups in the regular expression pattern. They are useful for matching repeated patterns.

For example,

```
/([a-z])\1/
```

Would match any two consecutive identical lowercase letters.

### Look-ahead and Look-behind
Look-ahead and look-behind assertions are used to ensure that a pattern is followed or preceded by another pattern without including the latter in the match result.

For example,

```
/\d+(?=%)/
```

Would match one or more digits followed by a "%" symbol, but the "%" symbol won't be part of the matched result. It uses a positive look-ahead assertion.


## Author

A short section about the author with a link to the author's GitHub profile (replace with your information and a link to your profile)
