function makeSlug(val, sep) { // code largely inspired by http://www.thewebsitetailor.com/jquery-slug-plugin/
	if (typeof sep == 'undefined') sep = '_';
	var alphaNumRegexp = new RegExp('[^a-zA-Z0-9\\' + sep + ']', 'g');	
	var avoidDuplicateRegexp = new RegExp('[\\' + sep + ']{2,}', 'g');
	val = val.replace(/\s/g, sep);
	val = val.replace(alphaNumRegexp, '');
	val = val.replace(avoidDuplicateRegexp, sep);
	return val.toLowerCase();
}