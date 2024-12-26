var arrayOfQuotes = [
    {'author': 'Oscar Wilde', 
     'quote': 'Be yourself; everyone else is already taken.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Zappa', 
     'quote': 'So many books, so little time'
    },
    {'author': ' Mahatma Gandhi', 
     'quote': 'Be the change that you wish to see in the world.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {
        'author': 'Socrates', 
        'quote': 'The best way to predict the future is to create it.'
    },
   
];

function generateQuote(){
    var randomNumber = Math.floor(Math.random()*arrayOfQuotes.length);
 document.getElementById("quoteOutput").innerHTML=arrayOfQuotes[randomNumber].quote;
 document.getElementById("authorOutput").innerHTML=arrayOfQuotes[randomNumber].author;
}