# REGEXSAURUS - A Journey into Artificial Intelligence Via Regular Expressions

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

Briefly summarize the regex you will be describing and what you will explain. Include a code snippet of the regex. Replace this text with your summary.

You can tell if something is REGEX in JavaScript when it is sandwitched between two forward slashes: / and /.
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

### Quantifiers

### OR Operator

### Character Classes

### Flags

### Grouping and Capturing

### Bracket Expressions

### Greedy and Lazy Match

### Boundaries

### Back-references

### Look-ahead and Look-behind

## Author

A short section about the author with a link to the author's GitHub profile (replace with your information and a link to your profile)
