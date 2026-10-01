let seed = 0;

function generate() {
	let date = Date.now();
	let day = date / (24 * 60 * 60 * 1000);

	//day -= Math.floor(Math.random() * 1000);

	seed = Math.floor(day);

	let noun_1 = NOUNS[rng() % NOUNS.length];
	let noun_2 = NOUNS[rng() % NOUNS.length];

	let adjective_1 = ADJECTIVES[rng() % ADJECTIVES.length];
	let adjective_2 = ADJECTIVES[rng() % ADJECTIVES.length];
	let adjective_3 = ADJECTIVES[rng() % ADJECTIVES.length];
	let adjective_4 = ADJECTIVES[rng() % ADJECTIVES.length];

	let verb = VERBS[rng() % VERBS.length];

	let r_verb = rng() % 2 == 0;

	let r_noun_2;
	if(r_verb) {
		r_noun_2 = rng() % 4 == 0;
	}

	let r_adjective_1 = rng() % 4 == 0;
	let r_adjective_3 = rng() % 4 == 0;

	let r_adjective_2 = rng() % 8 == 0;
	let r_adjective_4 = rng() % 8 == 0;

	if(!r_adjective_1) {
		adjective_1 = "";
	}

	if(!r_adjective_2) {
		adjective_2 = "";
	}

	if(!r_adjective_3) {
		adjective_3 = "";
	}

	if(!r_adjective_4) {
		adjective_4 = "";
	}

	if(r_verb && (verb == "Dressed Up As" || verb == "Hitting")) {
		r_noun_2 = true;
	}

	if(r_verb) {
		if(r_noun_2) {
			prompt = `${adjective_1} ${adjective_2} ${noun_1} ${verb}, ${adjective_3} ${adjective_4} ${noun_2}`;
		} else {
			prompt = `${adjective_1} ${adjective_2} ${noun_1} ${verb}`;
		}
	} else {
		prompt = `${adjective_1} ${adjective_2} ${noun_1}`;
	}
	
	document.getElementById("result").innerHTML = prompt;
}

function rng() {
	let original_length = seed.toString().length;

	let str = (seed * seed * seed).toString();
	let l = str.length/3;

	let random = parseInt(str.substring(l, l + original_length + 1));
	seed = random;

	return random;
}