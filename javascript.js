var quotes=[
  'Don\'t cry because it\'s over, smile because it happened.</br> (Dr. Seuss)',
  'Be yourself everyone else is already taken. </br>(Oscar Wilde)',
  'So many books, so little time.  </br> (Frank Zappa)',
  'A room without books is like a body without a soul. </br> (Marcus Tullius Cicero)',
'You only live once, but if you do it right, once is enough.</br>  (Mae West)',
'Be the change that you wish to see in the world.</br>  (Mahatma Gandhi)',
'If you tell the truth, you don\'t have to remember anything.</br>  (Mark Twain)',
'A friend is someone who knows all about you and still loves you.</br>  (Elbert Hubbard)',
'A hand ready to hit, may cause you great trouble. </br> (Maori)',
'A man in a passion, rides a mad horse.</br>(Ben Franklin)',
'Anger is a short madness. </br> (Horace)',
'Clouds gather before a storm. </br> (Anonymous)',
'And those who were seen dancing were thought to be insane by those who could not hear the music.</br>  (Friedrich Nietzsche)',
'Nobody cares if you can\'t dance well. Just get up and dance. </br> (Dave Barry)',
'Dance is the hidden language of the soul of the body. </br> (Martha Graham)',
'Always forgive your enemies; nothing annoys them so much.</br>  (Oscar Wilde)',
'Live as if you were to die tomorrow. Learn as if you were to live forever. </br> (Mahatma Gandhi)',
'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. </br> (Martin Luther King Jr)',
'To live is the rarest thing in the world. Most people exist, that is all. </br> (Oscar Wilde)',
'I am so clever that sometimes I don\'t understand a single word of what I am saying. </br> (Oscar Wilde)',
'Without music, life would be a mistake.</br>  (Friedrich Nietzsche)',
'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. </br> (Ralph Waldo Emerson)',
'We accept the love we think we deserve. </br> (Stephen Chbosky)',
'Insanity is doing the same thing, over and over again, but expecting different results. </br> (Narcotics Anonymous)',
'If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals. </br> (J.K. Rowling)',
'In three words I can sum up everything I\'ve learned about life: it goes on. </br> (Robert Frost)',
'Find people who will make you better. </br> (Michelle Obama)',
'We look forward to the time when the Power of Love will replace the Love of Power. Then will our world know the blessings of peace. </br> (William Ewart Gladstone)',
'How can we know the dancer from the dance? </br> (William Butler Yeats)',
'Dance is the only art of which we ourselves are the stuff of which it is made.</br>  (Ted Shawn)',
'Dancing is the poetry of the foot.</br>  (John Dryden)'
]
//var authors[
  //'-Dr. Seuss','-Oscar Wilde','-Frank Zappa','-Marcus Tullius Cicero','-Mae West','-Mahatma Gandhi','-Elbert Hubbard','-Oscar Wilde','-Mahatama Gandhi','-Martin Luther King',
  //'-Oscar Wilde','-Oscar Wilde','-Friedrich Nietzsche','-Ralph Waldo Emerson','-Stephen Chbosky','-Narcotics Anonymous','-J.K. Rowling','-Robert Frost','-Michelle Obama'
//]

function next(){
  var randomNumber=Math.floor(Math.random()*(quotes.length));
document.getElementById('qdisplay').innerHTML=quotes[randomNumber];
}
