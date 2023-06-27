// Array of long words
const longWords = ['polymorphism', 'encapsulation', 'inheritance', 'recursion', 'variable', 'algorithm', 'debugging', 'concatenation'];
const correctlyGuessedWords = ['polymorph', 'isopropyl', 'propolis', 'isomorph','pompom','propyl','morph',
'morpho','shrimp','polio','orlop','primp','poori','polypi','spoil','promo','oomph','polyp','sholom','hommo',
'holism','pylori','simoom', 'polish', 'hippo', 'lymph', 'polis','osmol','sophy','spoor','proso','sopor','sylph',
'primo','shool','spool', 'prism', 'primp','polyp','hippy','hooly','pimp', 'prop','room', 'romp','prom','silo',
'pomp','roil','mool','soph','poly','milo', 'pool', 'homo', 'hoop','hippy','loop','limo','limp','loom','moor',
'posh', 'prim', 'pooh','pomp', 'pop', 'lisp', 'romp', 'room', 'ship', 'shop', 'plop', 'solo', 'pimp', 'simp', 
'slip', 'miso', 'polo', 'slop', 'ploy','lop', 'soil', 'moil', 'sip', 'sir', 'yip', 'sim', 'soy', 'sop', 'hip', 
'hop', 'spy', 'mop', 'ply', 'pip', 'oil', 'mom', 'mim','mil','rim', 'lip','rip','pry','psi','pro','pop','loo','sol', 
'encapsualtion starts -','cantaloupe', 'escalation', 'nucleation', 'peculation', 'cantaloup', 'cantilena', 'caseation', 'causation', 
'coastline', 'continual', 'nanotesla', 'neoplasia', 'pantalone', 'peninsula', 'placation', 'planation', 
'pulsation', 'santolina', 'scapolite', 'acaulose', 'alopecia', 'analcite', 'anconeal', 'annalist', 'annulose', 
'antipole', 'canalise', 'cannulae', 'canoeist', 'canonist', 'capitula', 'capstone', 'conepatl', 'continua', 
'estancia', 'insectan', 'instance', 'insulant', 'laitance', 'locustae', 'lunation', 'national', 'nauseant', 
'oceanaut', 'osculant', 'palatine', 'panelist', 'pentanol', 'pentosan', 'pinnacle', 'pinnulae', 'placenta', 
'pleuston', 'poultice', 'sanction', 'santalic', 'saponine', 'saponite', 'saucepan', 'scalepan', 'scapulae', 
'scopulae', 'solanine', 'sonatina', 'spiculae', 'spinulae', 'stapelia', 'talapoin', 'tenacula', 'tieclasp', 
'tonneaus','acinose', 'aconite', 'actinon', 'alanine', 'alation', 'alencon', 'alunite', 'anapest', 'anisole',
'annulet', 'anopsia', 'antlion', 'apolune', 'apostil', 'apostle', 'auction', 'auspice', 'cannula', 'cantina', 
'canulae', 'capelan', 'capelin', 'capital', 'capitol', 'capstan', 'capsule', 'captain', 'caption', 'cauline', 
'caution', 'celosia', 'censual', 'cineast', 'cleanup', 'consent', 'consult', 'contuse', 'copulae', 'counsel', 
'couplet', 'cutline', 'ectopia', 'elastic', 'elastin', 'elation', 'elusion', 'elution', '1enation', 'entasia', 
'epsilon', 'escalop', 'espanol', 'inanest', 'inocula', 'inscape', 'inulase', 'lactase', 'lactone', 'lactose', 
'lacunae', 'lection', 'linecut', 'linocut', 'locusta', 'lunatic', 'nailset', 'nascent', 'neuston', 'noctule', 
'nuclein', 'nucleon', 'nutcase', 'octuple', 'oculist', 'onanist', 'opaline', 'opuntia', 'outleap', 'outline', 
'paction', 'paesani', 'panicle', 'pantile', 'pastina', 'patinae', 'peacoat', 'peasant', 'peculia', 'pelican', 
'pension', 'petunia', 'pinnace', 'pinnula', 'pinocle', 'pintano', 'pistole', 'placate', 'plastic', 'platane', 
'plateau', 'platina', 'plenist', 'poetics', 'polecat', 'polenta', 'pontine', 'potline', 'pulsant', 'pulsion', 
'sacaton', 'saltpan', 'sanicle', 'saponin', 'scaleni', 'scaleup', 'scapula', 'scopula', 'sculpin', 'sealant', 
'section', 'senopia', 'slainte', 'slipout', 'solanin', 'solatia', 'sonance', 'spancel', 'spaniel', 'spatula', 
'specula', 'spicula', 'spinout', 'spinula', 'spinule', 'splenia', 'stencil', 'suction', 'sultana', 'talcose', 
'tapioca', 'tension', 'toenail', 'tonneau', 'topline', 'topsail', 'tunicae', 'tunicle', 'unction', 'upcoast', 
'upsilon', 'utensil', 'acetin', 'acinus', 'actins', 'action', 'aculei', 'alanin', 'alnico', 'alpine', 'ancone', 
'annual', 'annuli', 'anopia', 'apnoea', 'ascent', 'aslant', 'aspect', 'auntie', 'calesa', 'canape', 'cannel', 
'cannie', 'canola', 'cantle', 'canton', 'cantus', 'canula', 'capita', 'caplet', 'caplin', 'capote', 'captan', 
'casein', 'casino', 'casita', 'castle', 'catalo', 'catena', 'cation', 'catlin', 'catnap', 'catnip', 'catsup', 
'cestoi', 'cineol', 'citola', 'citole', 'claspt', 'clause', 'client', 'clonus', 'closet', 'coitus', 'coleus', 
'consul', 'copula', 'cosine','costae', 'coteau', 'couple', 'cousin', 'cuesta', 'culpae', 'cupola', 'encina', 
'ennuis', 'etalon', 'insect', 'insult', 'lacuna', 'lacune', 'lanais', 'lancet', 'lanose', 'latino', 'lectin', 
'lepton', 'lesion', 'leucin', 'lineup', 'linnet', 'lipase', 'locust', 'lutein', 'nasion', 'nation', 'nausea', 
'nelson', 'nonuse', 'notice', 'nuance', 'nuclei', 'nuncio', 'nuncle', 'octane', 'oilcan', 'oilcup', 'opiate', 
'oscine', 'oscula', 'paesan', 'palace', 'palais', 'palate', 'pascal', 'pastel', 'pastil', 'patina', 'patine', 
'patois', 'paulin', 'peanut', 'pectin', 'pelota', 'pencil', 'pennia', 'pennis', 'pensil', 'penult', 'petsai', 
'pilose', 'pinata', 'pineal', 'pineta', 'pinnae', 'piolet', 'pistol', 'piston', 'placet', 'plaice', 'plaint', 
'planet', 'platan', 'plicae', 'plutei', 'pluton', 'poilus', 'pointe', 'poleis', 'police', 'ponent', 'pontil', 
'postin', 'ptisan', 'puisne', 'punnet', 'salina', 'saline', 'salpae', 'salute', 'sancta', 'sannop', 'sannup', 
'santol', 'sapota', 'scotia', 'secant', 'sennit', 'sienna', 'solace', 'sonata', 'sonnet', 'spicae', 'spinel', 
'spinet', 'spinto', 'splent', 'splice', 'splint', 'spoilt', 'stance', 'staple', 'stelai', 'stipel', 'sultan', 
'suntan', 'taenia', 'taipan', 'talion', 'tapalo', 'teacup', 'telson', 'tenail', 'tennis', 'tenpin', 'tenuis', 
'teopan', 'tincal', 'tineal', 'tinsel', 'tocsin', 'toecap', 'tolane', 'tonsil', 'toucan', 'tousle', 'tunica', 
'tunnel', 'tupelo', 'unison', 'usance', 'utopia', 'aceta', 'actin', 'aecia', 'aisle', 'alane', 'alias', 'alien', 
'ancon', 'anent', 'anion', 'anise', 'ansae', 'antae', 'apnea', 'ascot', 'aspen', 'atlas', 'canal', 'canna', 'canoe', 
'canon', 'capon', 'caput', 'caste', 'cause', 'cento', 'clapt', 'clasp', 'clast', 'cline', 'clout', 'coala', 'colin',
'conin', 'conte', 'conus', 'copen', 'copse', 'coset', 'cosie', 'costa', 'cotan', 'count', 'coupe', 'culet', 'culpa',
'culti', 'cupel','cutie', 'cutis', 'eclat', 'elain', 'elint', 'eloin', 'ennui', 'entia', 'eosin', 'epact', 'escot', 
'etuis', 'inset', 'islet', 'istle', 'lanai', 'lance', 'lapin', 'lapis', 'lapse', 'laten', 'lauan', 'lenis', 'lenos',
'lento', 'lepta', 'letup', 'liana', 'liane', 'linac', 'linen', 'locus', 'lotus', 'louie', 'louis', 'loupe', 'loups',
'louse', 'lunet', 'lupin', 'lutea', 'nance', 'neist', 'netop', 'nicol', 'niton', 'noise', 'ocean', 'octan', 'oculi',
'olein', 'onset', 'opsin', 'ostia', 'ounce', 'ousel', 'paeon', 'paint', 'paisa', 'paise', 'palea', 'palet', 'panel',
'panic', 'panne', 'panto', 'paseo', 'pasta', 'patin', 'patio', 'pause', 'pecan', 'pelon', 'penal', 'penis', 'penna',
'penni', 'pesto', 'petal', 'piano', 'pical', 'picot', 'picul', 'pieta', 'pilau', 'pilea', 'pilot', 'pilus', 'pinna',
'pinon', 'pinot', 'pinta', 'pinto', 'pisco', 'piste', 'piton', 'place', 'plain', 'plait', 'plane', 'plant', 'plate',
'pleat', 'plena', 'plica', 'poilu', 'point', 'poise', 'ponce', 'posit', 'poult', 'psoae', 'psoai', 'pulis', 'pulse',
'punto', 'puton', 'saice', 'salep', 'salon', 'salpa', 'satin', 'sauce', 'sault', 'sauna', 'saute', 'scale', 'scalp',
'scant', 'scape', 'scaup', 'scena', 'scent', 'scone', 'scope', 'scout', 'sculp', 'scuta', 'senna', 'senti', 'sepal',
'sepia', 'septa', 'setal', 'seton', 'setup', 'situp', 'slant', 'slate', 'slice', 'slipe', 'slipt', 'slope', 'snail',
'sneap', 'snipe', 'snout', 'socle', 'solan', 'solei', 'sonic', 'space', 'spail', 'spait', 'spica', 'spice', 'spiel',
'spile', 'spilt', 'spine', 'spite', 'splat', 'spoil', 'spout', 'sputa', 'stain', 'stein', 'stela', 'steno', 'stile',
'stipe', 'stoae', 'stoai', 'stoic', 'stone', 'stope', 'stoup', 'stupa', 'stupe', 'suint', 'suite', 'sulci', 'sunna',
'talon', 'talus', 'tapas', 'tapis', 'taupe', 'telia', 'teloi', 'telos', 'tenia', 'tenon', 'tepal', 'tesla', 'tinea',
'toile', 'tolan', 'tolus', 'tonal', 'tonic', 'tonne', 'tonus', 'topic', 'touse', 'tulip', 'tunic', 'ulnae', 'ulpan',
 'unais', 'uncia', 'uncle', 'union', 'unset', 'usnea', 'utile', 'asian', 'latin', 'spain','acne', 'acta', 'aeon', 
 'alae', 'alan', 'aloe', 'alto', 'anal', 'anil', 'anis', 'anon', 'ansa', 'anta', 'ante', 'anus', 'apse', 'asci', 
 'asea', 'aunt', 'auto', 'cain', 'calo', 'cane', 'cant', 'cape', 'casa', 'case', 'cast', 'cate', 'caul', 'ceil', 
 'celt', 'cent', 'cine', 'cion', 'cist', 'cite', 'clan', 'clap', 'clip', 'clon', 'clop', 'clot', 'clue', 'coal', 
 'coat', 'coil', 'coin', 'cola', 'cole', 'colt', 'cone', 'cost', 'cote', 'coup', 'cult', 'cusp', 'east', 'elan', 
 'enol', 'etna', 'etui', 'icon', 'ilea', 'iota', 'isle', 'lace', 'laic', 'lain', 'lane', 'lase', 'lati', 'leap', 
 'leis', 'leno', 'lens', 'lent', 'lest', 'lice', 'lien', 'lies', 'lieu', 'line', 'lint', 'lion', 'lisp', 'list', 
 'lite', 'loan', 'loin', 'lone', 'lope', 'lota', 'loti', 'loup', 'luna', 'lune', 'lunt', 'lust', 'lute', 'naan', 
 'nail', 'nana', 'naoi', 'nape', 'neap', 'neon', 'nest', 'noel', 'noil', 'nona', 'nose', 'nota', 'note', 'noun', 
 'olea', 'opal', 'opus', 'paca', 'pace','pact', 'pail', 'pain', 'pane', 'pant', 'pase', 'past', 'peal', 'pean', 
 'pein', 'pelt', 'peon', 'peso', 'pest', 'pial', 'pian', 'pica', 'pice', 'pile', 'pina', 'pine', 'pint', 'pion', 
 'piso', 'pita', 'plan', 'plat', 'plea', 'plie', 'plot', 'plus', 'poet', 'pois', 'pole', 'pone', 'pose', 'post', 
 'pout', 'puce', 'puli', 'puna', 'punt', 'sail', 'sain', 'sale', 'salp', 'salt', 'sate', 'sati', 'saul', 'scan', 
 'scat', 'scop', 'scot', 'scup', 'scut', 'seal', 'seat', 'sect', 'seta', 'sial', 'sice', 'silo', 'silt', 'sine', 
 'sipe', 'site', 'slap', 'slat', 'slip', 'slit', 'slop', 'slot', 'slue', 'snap', 'snip', 'snit', 'snot', 'soap', 
 'soil', 'sola', 'sole', 'soli', 'sone', 'soul', 'soup','spae', 'span', 'spat', 'spin', 'spit', 'spot', 'spue', 
 'step', 'stoa', 'stop', 'stun', 'suet', 'suit', 'sunn', 'supe', 'tace', 'taco', 'tael', 'tail', 'tain', 'tala', 
 'talc', 'tale', 'tali', 'taos', 'tapa', 'tape', 'taus', 'teal', 'tela', 'tepa', 'tile', 'tine', 'toea', 'toil', 
 'tola', 'tole', 'tone', 'topi', 'tule', 'tuna', 'tune', 'ulan', 'ulna', 'unit', 'asia', 'ace', 'act', 'ail', 
 'ain', 'ais', 'ait', 'ala', 'ale', 'alp', 'alt', 'ana', 'ane', 'ani', 'ant', 'ape', 'apt', 'asp', 'can', 'cap', 
 'cat', 'cel', 'cep', 'cis', 'col', 'con', 'cop', 'cos', 'cot', 'cue', 'cup', 'cut', 'eon', 'eta', 'ice', 'inn', 
 'ion', 'lac', 'lap', 'las', 'lat', 'lea', 'lei', 'let', 'leu', 'lie', 'lin', 'lip', 'lop', 'lot', 'nae','nan', 'nap', 
 'net', 'nil', 'nip', 'nit', 'nos', 'nun', 'nut', 'oat', 'oil', 'ole', 'opt', 'ose', 'pac', 'pal', 'pan', 'pas', 
 'pat', 'pea', 'pen', 'pes', 'pet', 'pia', 'pic', 'pie', 'pin', 'pis', 'pit', 'pol', 'pot', 'psi', 'pun', 'pus', 
 'put', 'sac', 'sal', 'sap', 'sat', 'sea', 'sec', 'sel', 'set', 'sic', 'sin', 'sip', 'sit', 'sol', 'son', 'sop', 
 'spa', 'sue', 'sun', 'sup', 'tae', 'tan', 'tap', 'tea', 'tel', 'tic', 'tie', 'til', 'tin', 'tip', 'toe', 'ton', 
 'top', 'use',
'creatinine','nectarine', 'carnitine','creatine','entrance','ceratine','enhancer','ethician','iterance','citrine',
'centner','centare','chanter','enticer','erethic','herniae','inertia','heretic','trainee','tranche','teacher',
'cheater','hairnet','intern','nectar','heater','hernia','rachet','cretin','canner','neater','niacin','acetin',
'canter','tenace','tanner','careen','techie','carnet','center','trench','centre','chitin','ranch',
'heat','trance','trace','react','niece','chair','chain','chant','cheat','antic','crate','chart',
'cart','earth','china','cheer','cane','hater','hate','chart', 'heart','char','chat','chin','tear','air','tree',
'teen','hint','rice','train','heat','heir','hair','itch','hare','cane','race','rain','hat','art','hit','era',
'arc','net','ear','rat','ace','car','acre','tier','rein','chia','ache','tire','rent','tare','tarn','care','arch',
'rich','rite','etch','inia','inch','hire','race','tic','hen','chi','tee',
'coinsurer','insurer','scourer','courier','cirrose','cruiser','scorner','currie','curser','ironer','nurser','rouser',
'ruiner','scorer','snorer','orrice','rinser','censor','scour','score','snore','crone','rerun','scone','ounce','urine',
'course','corner','iron','coin','ruin','nose','cursor','nurse','curse','cruise','rinse','crier','sire','sore',
'user','rune','ruse','nori','noir','corn','senior','source','run','siren','euro','rise','rose','core','cure','sir',
'son','roue','cue','urn',
'larvae', 'realia','rival','liver','blare','avail','brail','libra','larva','brava','ariel',
'vibe','rave', 'arab','vile','lava','lair','lari','rave','rail','virl','live','lira','lire','real','vial','vera',
'bile','bail','veil','vail','veal','brie','liar','evil','verb','bear','area','rib','var','bal','lie','lib','ire',
'bar','bra','ear','lab',
'logarithm','tailor','mortal', 'glioma','mohair','harlot','galiot','gloria','glamor','mortal','ratio','moira',
'loath','mirth','molar','triol','might','grail','gator','trail','girth','glair','argil','light','gloat','moral',
'right','trial','math','trio','mail','goal','halo','lair','tora','toil','malt','moat','trim','loam','mair','tram',
'oath','moth','roam','riot','tail','omit','harm','halt','giro','atom','holm','gait','hilt','gilt','hail','gram',
'grit','grim','girl','grot','giro','alto','lima','holt','got','rom','rot','rim','goa','tar','til','gal','gat','tom',
'rig','aim','tag','arm','git','log','ram','ham','lit','lat','hat','hog','mat','lag','rat','hag','rag','mot',
'begging','budging','bugging','beduin','budgie','indue','being','dine','bend','budge','guide','debug','binge',
'nudge','nude','dune','bind','gig','gin','gun','nub','gen','bid','ben','dig','bun','bed','bug','bud','bin','den',
'egg','end',
'annotation', 'connection','catenation','continent','notation',
'cocaine','content','contact','connect','tenant','notion','nannie','cotton','tactic','accent','tonic',
'onion','canon','cocoa','cacao','cone','noon','note','tent','ant','ace'];
let currentWordIndex = 0; // Index of the current word in the array
let correctCount = 0; // Count of correctly guessed words
let attemptCount = 0; // Count of user attempts for the current word

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

