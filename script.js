function firstWord(s) {
  // your code here
	if(!s) return '';
	s=s.trim();
	const firstSpaceIndex = str.indexOf(' ');
    return firstSpaceIndex === -1 ? str : str.slice(0, firstSpaceIndex);

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
