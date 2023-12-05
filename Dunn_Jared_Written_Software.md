# Thought Process and Written Documentation

## Process and Decision Making

### Considering the Input
The input that `findSearchTermInBooks` receives is a list a books in the following JSON structure:
```
[
  {
    "Title": string,
    "ISBN": string,
    "Content": [
      {
        "Page": integer,
        "Line": integer,
        "Text": string
      }, zero or more...
    ],
  }, zero or more...
]
```
We are also given a "word or search term" as a string. It is not made explicit exactly what this search term can look like:
1. Can it be a phrase?
2. Can it be a part of a word?
3. Can it have punctuation or other non-alphabetical characters?

I will have to make assumptions for these questions in my implementation. 

### Considering the Output
The output of `findSearchTermInBooks` should be the following JSON structure that collects book ids, page numbers, and line numbers for the instances of the search term:
```
{
  "SearchTerm": string,
  "Results": [
    {
      "ISBN": string,
      "Page": integer,
      "Line": integer
    }, zero or more...
  ]
}
```
For the output, I will also have to make assumptions. It is not clear if the output should include inexact matches. For example, is "then" a match for "the"? What about "the!" or "the,".

### Other Considerations
It may also be important to consider a space-time tradeoff for my implementation. The most brute force implementation would loop through all the books and for every book it would look through each line and for each line it would loop through every character/word in the text. This is **O(b x l x w)** time (**b** is number of books, **l** is number of lines, and **w** is number of words) which is not that good. A potential way to get better time would be to change the input structure to a different lookup structure so that I could map words to pages and lines:
```
[
  {
    "Title": string,
    "ISBN": string,
    "Words": {
      "the": [
          "Page": integer,
          "Line": integer,
        ], one or more...
    }
  }, zero or more...
]
```
With this input structure, I could loop through each book and then in constant time grab a list of all the lines that the word occurs. The question here is: is it worth it to do this restructuring? I think it **is not**. As the function is outlined now, each call passes in the full list of books, meaning that I wouldn't be able to take advantage of the restructured lookup multiple times in a row. Having the restructuring step would then mean that each call to the function is slower than the brute force implementation. 

### Final Assumptions
I will assume that the user is looking for matches of whatever they type in as the search term (partial words, words with punctuation, phrases, etc.) since this is how finders tend to work in most tools. This also means that I don't have to handle parsing punctuation or identifying specific words within text (if I were to attempt that, I would likely bias the function towards English-language texts, which I don't want to do). 
