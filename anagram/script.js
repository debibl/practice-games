// Array of long words
const longWords = ['polymorphism', 'encapsulation', 'inheritance', 'recursion', 'variable', 'algorithm', 'debugging', 'concatenation'];
const correctlyGuessedWords = ['polymorph', 'isopropyl', 'propolis', 'isomorph','pompom','morph','shrimp','polio',
'polish', 'hippo', 'lymph', 'pimp', 'prop', 'spool', 'spoil','promo','oomph','room', 'romp','prism','prom', 'polyp',
'pool', 'homo', 'hoop','hippy','loop','limo','limp','loom','moor','posh','prim', 'pooh','pomp', 'pop', 'lisp',
'romp', 'room', 'ship', 'shop', 'plop', 'solo', 'pimp', 'simp', 'slip', 'miso', 'polo', 'slop', 'ploy',
'soil', 'moil', 'sip', 'sir', 'yip', 'sim', 'soy', 'sop', 'hip', 'hop', 'spy', 'mop', 'ply', 'pip', 'oil', 'mom',
'mim','mil','rim', 'lip','rip','pry','psi','pro','pop','loo', 'cantaloupe', 'nucleation', 'peculation', 
'speculation','analeptic','escalation','inoculant','alopecia','causation', 'coastline','consulate', 'continual',
'national', 'peninsula', 'pinnacle','placenta','pulsation','auction', 'capital','captain', 'caption', 'caution',
'cleanup','lunatic','lection','pelican','outline','toenail','client', 'coast','line','poet','consent','nail',
'nation','capsule','palace','notice','peanut','peasant', 'pencil','pension','planet', 'plastic','police', 
'point','pulse','section', 'space','teacup','tunnel','action','alien','castle', 'catnip','clone','closet',
'count', 'icon','ocean','plane', 'plant','tennis', 'union','canal', 'canon','clip','coil','clan','cult', 'leap',
'leap','lion','noun','opal','pace','pain','panel','panic','paint','pause', 'pilot','plan','pole','pose','salon',
'scalp','slice','tone','tail','top','topic','uncle','act','aloe','auto','aunt','case','cat','cent','clot','coat',
'cola','cop','cap','cue','cup','lap','leap','lint','nap','neon','pan','pal','pea','pen','pet','pose','plus',
'post','sail','scan','seat','soap','salt','sale','slot','sun','seal','soul','soup','spot','step','stop','tea',
'tie', 'tin','tip','toe','tone','tune','unit','act','ale','cut','ice','ion','lap','lie', 'lot','nap','nut','oat',
'pot','pin','pen','sin','spa','tan','use','creatinine','nectarine', 'carnitine','creatine','entrance','creatine',
'teacher','cheater','hairnet','intern','nectar','heater','heat','trance','trace','react','niece','chair','chain',
'cart','earth','china','cheer','cane','hater','hate','chart', 'heart','char','chat','chin','tear','air','tree',
'teen','hint','rice','train','heat','heir','hair','itch','hare','cane','race','rain','hat','art','hit','era',
'arc','net','ear','rat','ace','car','courier','course','corner','iron','coin','ruin','nose','cursor','nurse',
'senior','source','run','siren','euro','rise','rice','rose','core','cure','sir','son','rival','liver',
'vibe','rave', 'arab','liar','evil','verb','bear','area','bar','bra','ear','lab','logarithm','tailor','mortal',
'light','gloat','moral','right','trial','math','trio','mail','goal','halo','lair','rig','aim','tag','arm',
'git','log','ram','ham','begging','budge','guide','debug','binge','nudge','nude','dune','bind','gig','gin',
'bun','bed','bug','bud','bin','den','egg','end','annotation', 'connection','catenation','continent','notation',
'cocaine','content','contact','connect','tenant','notion','nannie','cotton','tactic','accent','tonic',
'onion','canon','cocoa','cacao','noon','note','tent','ant','ace'];
let currentWordIndex = 0; // Index of the current word in the array
let correctCount = 0; // Count of correctly guessed words

// Display the current word
const displayWord = () => {
  const wordElement = document.getElementById('word');
  const randomIndex = Math.floor(Math.random() * longWords.length);
  chosenWord = longWords[randomIndex]; 
  wordElement.textContent = chosenWord;
}

// Check if the entered words are compiled from the correctlyGuessedWords array
const checkWords = () => {
  const inputElement = document.getElementById('input');
  const enteredWords = inputElement.value.trim().split(' ');

  let correctWords = 0;
  const currentWord = longWords[currentWordIndex];

  enteredWords.forEach((word) => {
    if (word.length >= 3 && correctlyGuessedWords.includes(word)) {
      correctWords++;
    }
  });

  if (correctWords >= 5) {
    correctCount++;
    document.getElementById('message').textContent = 'Correct! You can move to the next word.';
    inputElement.value = '';
    inputElement.disabled = true;

    // Move to the next word if all words have been guessed correctly
    if (correctCount === longWords.length) {
      document.getElementById('word').textContent = 'Congratulations! You have completed the game.';
      document.getElementById('submit-button').disabled = true;
    } else {
      currentWordIndex++;
      setTimeout(() => {
        displayWord();
        inputElement.disabled = false;
        document.getElementById('message').textContent = '';
      }, 1500);
    }
  } else {
    document.getElementById('message').textContent = 'Try again. You need to guess at least 5 smaller words.';
  }
}

// Event listener for the submit button
document.getElementById('submit-button').addEventListener('click', checkWords);

// Initial setup
displayWord();
