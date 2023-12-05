/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    // result object to store the instances found
    const result = {
        "SearchTerm": searchTerm,
        "Results": []
    };

    // Loop through all of the books in the scannedTextObj
    for (const bookObj of scannedTextObj) {
      // Loop through all of the page-line objects in the "Content"
      // of the book object
      for (const pageLineObj of bookObj["Content"]) {
        // if the search term is found in the text, add
        // a new result object to the Results list
        if (pageLineObj["Text"].includes(searchTerm)) {
          result["Results"].push({
            "ISBN": bookObj["ISBN"],
            "Page": pageLineObj["Page"],
            "Line": pageLineObj["Line"]
          });
        }
      }
    }
    
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/** Jared's Objects for Testing */

// a list that has one book that has two pages
const bookTwoPages = [
  {
      "Title": "A Two Page Book",
      "ISBN": "2",
      "Content": [
          {
              "Page": 1,
              "Line": 1,
              "Text": "This is the beginning of a book."
          },
          {
              "Page": 1,
              "Line": 2,
              "Text": "It is a very short book."
          },
          {
              "Page": 1,
              "Line": 3,
              "Text": "It has very few pages."
          },
          {
              "Page": 2,
              "Line": 1,
              "Text": "But, it has big text!"
          },
          {
              "Page": 2,
              "Line": 1,
              "Text": "Which means it fits on two pages!"
          },
      ] 
  }
];

// a list that has two books which each have one page
const booksOnePage = [
  {
    "Title": "One Page Book",
    "ISBN": "1",
    "Content": [
        {
            "Page": 1,
            "Line": 12,
            "Text": "-where in the middle of page one of book 1."
        },
        {
            "Page": 1,
            "Line": 14,
            "Text": "Picking up here and there."
        },
    ] 
  },
  {
    "Title": "One Page Book The Sequel",
    "ISBN": "12",
    "Content": [
        {
            "Page": 1,
            "Line": 24,
            "Text": "Outside in the dark, it is scary!"
        },
        {
            "Page": 1,
            "Line": 46,
            "Text": "Good thing I am inside with a book."
        },
    ] 
  },
];

const booksNoContent = [
  {
    "Title": "Empty Book 1",
    "ISBN": "0",
    "Content": []
  },
  {
    "Title": "Empty Book 2",
    "ISBN": "02",
    "Content": []
  },
]

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/* ---------------------------------------------------------- */

const basicPositiveOut1 = {
  "SearchTerm": "book",
  "Results": [
    {
        "ISBN": "2",
        "Page": 1,
        "Line": 1
    },
    {
        "ISBN": "2",
        "Page": 1,
        "Line": 2
    }
  ]
};

const testBasicPositive1 = findSearchTermInBooks("book", bookTwoPages);
if (JSON.stringify(basicPositiveOut1) === JSON.stringify(testBasicPositive1)) {
  console.log("PASS: Basic Positive 1");
} else {
  console.log("FAIL: Basic Positive 1");
  console.log("Expected:", basicPositiveOut1);
  console.log("Received:", testBasicPositive1);
}

const basicPositiveOut2 = {
  "SearchTerm": "dark",
  "Results": [
    {
        "ISBN": "12",
        "Page": 1,
        "Line": 24
    }
  ]
};

const testBasicPositive2 = findSearchTermInBooks("dark", booksOnePage);
if (JSON.stringify(basicPositiveOut2) === JSON.stringify(testBasicPositive2)) {
  console.log("PASS: Basic Positive 1");
} else {
  console.log("FAIL: Basic Positive 1");
  console.log("Expected:", basicPositiveOut2);
  console.log("Received:", testBasicPositive2);
}

const basicNegativeOut1 = {
  "SearchTerm": "foo",
  "Results": []
};

const testBasicNegative1 = findSearchTermInBooks("foo", bookTwoPages);
if (JSON.stringify(basicNegativeOut1) === JSON.stringify(testBasicNegative1)) {
  console.log("PASS: Basic Negative 1");
} else {
  console.log("FAIL: Basic Negative 1");
  console.log("Expected:", basicNegativeOut1);
  console.log("Received:", testBasicNegative1);
}

const basicNegativeOut2 = {
  "SearchTerm": "bar",
  "Results": []
};

const testBasicNegative2 = findSearchTermInBooks("bar", booksOnePage);
if (JSON.stringify(basicNegativeOut2) === JSON.stringify(testBasicNegative2)) {
  console.log("PASS: Basic Negative 2");
} else {
  console.log("FAIL: Basic Negative 2");
  console.log("Expected:", basicNegativeOut2);
  console.log("Received:", testBasicNegative2);
}

const upperAndLowerCaseDifferentOut = {
  "SearchTerm": "Book",
  "Results": []
};

const testUpperAndLowerCaseDifferent = findSearchTermInBooks("Book", bookTwoPages);
if (JSON.stringify(upperAndLowerCaseDifferentOut) === JSON.stringify(testUpperAndLowerCaseDifferent)) {
  console.log("PASS: Upper and lower case different");
} else {
  console.log("FAIL: Upper and lower case different");
  console.log("Expected:", upperAndLowerCaseDifferentOut);
  console.log("Received:", testUpperAndLowerCaseDifferent);
}

const testEmptyInputEmptyOutput = findSearchTermInBooks("bar", []);
if (JSON.stringify(basicNegativeOut2) === JSON.stringify(testEmptyInputEmptyOutput)) {
  console.log("PASS: Empty input => empty output");
} else {
  console.log("FAIL: Empty input => empty output");
  console.log("Expected:", basicNegativeOut2);
  console.log("Received:", emptyInputEmptyOutput);
}


const testEmptyBookEmptyOutput = findSearchTermInBooks("bar", booksNoContent);
if (JSON.stringify(basicNegativeOut2) === JSON.stringify(testEmptyBookEmptyOutput)) {
  console.log("PASS: Empty books => empty output");
} else {
  console.log("FAIL: Empty books => empty output");
  console.log("Expected:", basicNegativeOut2);
  console.log("Received:", testEmptyBookEmptyOutput);
}

const partsOfWordsOut = {
  "SearchTerm": "side",
  "Results": [
    {
      "ISBN": "12",
      "Page": 1,
      "Line": 24
    },
    {
      "ISBN": "12",
      "Page": 1,
      "Line": 46
    }
  ]
};

const testPartsOfWords = findSearchTermInBooks("side", booksOnePage);
if (JSON.stringify(testPartsOfWords) === JSON.stringify(partsOfWordsOut)) {
  console.log("PASS: parts of words");
} else {
  console.log("FAIL: parts of words");
  console.log("Expected:", partsOfWordsOut);
  console.log("Received:", testPartsOfWords);
}

const phrasesOut = {
  "SearchTerm": "beginning of a book",
  "Results": [
    {
      "ISBN": "2",
      "Page": 1,
      "Line": 1,
    }
  ]
}

const testPhrases = findSearchTermInBooks("beginning of a book", bookTwoPages);
if (JSON.stringify(testPhrases) === JSON.stringify(phrasesOut)) {
  console.log("PASS: phrases");
} else {
  console.log("FAIL: phrases");
  console.log("Expected:", phrasesOut);
  console.log("Received:", testPhrases);
}