var name = location.search.split('first_name=')[1]
var split = name.split('&')[0]
$('h1').append(split)
