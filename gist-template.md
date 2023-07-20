# Title (replace with your title)

## REGEX Explanation
REGEX is a way of representing patterns in strings. It can be simple, or it can be difficult. Hopefully this interactive guide can help clarify the concept.

By providing patterns to a REGEX parser, we can extract data in a methodical way. Take phone numbers, for example. They can be represented in a variety of ways. 

For example, we've all seen the following:

```(###) ###-####
\#### ### ####
(###) #######
##########
```

With REGEX, we can write a pattern that matches all of these, and more!

## Summary

Briefly summarize the regex you will be describing and what you will explain. Include a code snippet of the regex. Replace this text with your summary.

You can tell if something is REGEX in JavaScript when it is sandwitched between two forward slashes: / and /.<br/>
After that, the inside is just a bunch of letters, numbers, and symbols that represent different patterns.<br/>
To start a pattern, you will use a ^ (caret) character. To end a pattern, use the $ character. So to put together what we've learned so far, REGEX can look like /^ to start, and to end: $/.
After that, it's more symbols! [a-z] means any letter, a through z, lowercase. [A-Z] means the same, but uppercase. To put them together, you'd use [a-zA-Z].<br/>
We can start to look at patterns and get a good understanding of more REGEX rules by breaking down a pattern.<br/>
A basic one identifies possible hexadecimal values for colors: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/<br/>
Like we learned before, a pattern starts matching with /^ and ends with $/.<br/>
Then, the # sign is a literal # symbol, the ? next to it indicating that the sign is optional.<br/>
Then, the parentheses indicates a pattern grouping of either a-f, 0-9 repeating either 6 times, annotated by {6}, or 3 times, annotated by {3}.<br/>
Use the text box above to use the rules below, and through practice you can start to see and create REGEX patterns more easily!

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
