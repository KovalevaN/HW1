//2.Реализовать функции, которые создают ваши модели. Например
function createCinema(name, location, films, options) {
    'use strict';
    options = options || {};
    return {
        name: name,
        location: location,
        description: options.description || "",
        films: films || []
    };
}
function createFilms(name, description, timetable, options) {
    'use strict';
    options = options || {};
    return {
        name: name,
        description: {
            scenario: description.scenario || "",
            artists: description.artists || []
        },
        timetable: timetable || [],
        raiting: options.raiting || 0
    };
}//4.Реализовать некоторую сущность, которая умеет искать нужный фильм для пользователя
var manager = {};
manager.findByFilmsName = function (films, name) {
    'use strict';
    return films.filter(function(films){
        return films.name.contains(name);
    });
};
manager.sortByTop = function (films){
    'use strict';
    return films.slice(0).select(function(a,b){
        return a.top - b.top;
    });
};
manager.getTop = function(films, top){
    return films.filter(function(movie){
        return movie.raiting >= top;
    });
};
Array.prototype.findByFilmsName = function(name){
    return manager.findByFilmsName(this, name);
};
Array.prototype.sortByTop = function(){
    return manager.sortByTop(this);
};
Array.prototype.TopOfTheBestFilms = function(Top){
    return manager.TopOfTheBestFilms(this,Top);
};
//Советую написать небольшую "базу" кинотетров (2-3) и фильмов в них (3-5). Например, так:
(function baseCreation() {
    'use strict';
    function random_for_artists(artists) {
        var newartists = [],
            i = 0;
        for (i = 0; i < 3; i += 1) {
            newActors.push(artists[Math.floor(Math.random() * artists.length)]);
        }
        return newArtists;
    }
    function randTimetables(movies) {
        var timetable = [],
            i = 0;
        for (i = 0; i < 6; i += 1) {
            timetable.push({
                hour: (12 + i * 2).toString(),
                minute: '60',
                movie: movies[Math.floor(Math.random() * movies.length)]
            });
        }
        return timetable;
    }
    var artists = ['Jennifer Aniston', 'Courteney Cox', 'Lisa Kudrow', 'Matt LeBlanc', 'Matthew Perry',
        'David Schwimmer', 'Paul Rudd', 'Aisha Tyler'];
    var    films = ['Leviathan', 'Big Eyes', 'Duxless 2',
        'Burning Love', 'Birds of America'].map(function (name) {
            return createMovie(name, random_for_Actors(actors), 'about movie', {rating: Math.random() * 12});
        });
    var cinemas = [ 'Kolizey', 'Salut', 'Titanic Cinema'].map(function (name) {
            return createCinema(name, randTimetables(movies), {x: Math.random() * 50, y: Math.random() * 50});
        }),
        user = createUser('KovalevaN', {x: Math.random() * 100, y: Math.random() * 100});
    baseCreation();
}());

