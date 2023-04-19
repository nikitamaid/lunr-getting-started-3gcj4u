import * as lunr from 'lunr';


// Import stylesheets
import './style.css';


// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');


appDiv.innerHTML = `
This is based on <a href="https://lunrjs.com/guides/getting_started.html">Getting Started: lunr</a> but the TypeScript version is quite different (but don't worry about that).
`;


function prtt(s) {
  appDiv.innerHTML += ("<br><br>"+JSON.stringify(s));
}


const documents = [{
  "name": "5722018301_1",
  "text": "Why do democrats continuously whine when their supposed heros are attacked on policy?"
}, {
  "name": "5722018301_2",
  "text": "One doesn't have to hate the kids in the Special Olympics to recognize that they are not, in fact, capable of competing on an explore level playing field with regular Olympic athletes."
}, {
  "name": "5722018496_1",
  "text": "There had been a son, now old enough to take care of himself.  I didn't think he cared too much for Darlanis, or what she represented."
},
{
  "name": "5722018496_2",
  "text": "The long heavy sword as used by those to  the north of Dularn is not really as effective a weapon as thought."
}, {
  "name": "5722018508_1",
  "text": "Qualified candidates will have a minimum of five years non-profit experience in positions of increasing responsibility, an exemplary track record in funding development through grant writing, individual solicitations, and marketing, in-depth knowledge of the performing arts, and excellent written and verbal communication skills"
}, {
  "name": "5722018508_2",
  "text": "Be sure to look for our future call for works - we will be looking for original and unusual art projects for accessible viewing on the web"
},{
  "name": "5722018101_1",
  "text": "I am a Licensed Professional Counselor in Colorado as well as a National Certified Counselor."
}, {
  "name": "5722018101_2",
  "text": "I have a realistic, humanistic counseling philosophy, with a desire to help my clients explore and begin to love the person they truly are."
}, {
  "name": "5722018235_1",
  "text": "In the present climate, a good combat movie wouldn't be such a bad thing."
},
{
  "name": "5722018235_2",
  "text": "An underprivileged Mexican immigrant growing up in the poor section of Los Angeles, Santiago Munez seems destined to follow his father's path in life."
}];


const builder = new lunr.Builder();
builder.ref('name');
builder.field('text');


documents.forEach(i => builder.add(i));


const idx = builder.build();


//prtt({idx})
prtt('Searching for word : have')


const results0 = idx.search("have"); // should return 0 results
// const results1 = idx.search("bright."); // should return 1 result
// const results2 = idx.search("bright*"); // should return 1 result
prtt('Documents fetched :' + results0.length)
prtt(results0);