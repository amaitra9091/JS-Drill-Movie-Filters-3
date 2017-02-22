var buttonForm = document.getElementById('genreForm');
var clearFilter = document.getElementById('clearBtn');
var list = document.getElementById('list');

var listOfMovies = [
    {
      name: 'Airplane!',
      genre: 'comedy'
    },
    {
      name: 'The Conjuring',
      genre: 'horror'
    },
    {
      name: 'The Shawshank Redemption',
      genre: 'drama'
    },
    {
      name: 'An Inconvenient Truth',
      genre: 'documentary'
    },
    {
      name: 'Anchorman',
      genre: 'comedy'
    },
    {
      name: 'The Shining',
      genre: 'horror'
    },
    {
      name: 'Forrest Gump',
      genre: 'drama'
    },
    {
      name: 'March of the Penguins',
      genre: 'documentary'
    },
    {
      name: 'Dumb and Dumber',
      genre: 'comedy'
    },
    {
      name: 'The Blair Witch Project',
      genre: 'horror'
    },
    {
      name: "Schindler's List",
      genre: 'drama'
    },
    {
      name: 'Food, Inc.',
      genre: 'documentary'
    }
];


function emptyList(list) {
  $('#list').html('');
}

function generateHtmlList(listData){
  var html = [];
  listData.forEach(function(listItem) {
     html.push("<li>" + listItem.name + "</li>");
  });

  return html.join("");
}

function appendList(list, listData) {
  $('#list').append( "<ol>" + listData + "</ol>" );
}



buttonForm.addEventListener('click', function(e) {
  emptyList(list);
  var criteria =  e.target.id;
  var filterByCriteria = filterBy(criteria);
  var filteredList = filter(listOfMovies, filterByCriteria);
  var htmlList = generateHtmlList(filteredList);
  appendList(list, htmlList);
  e.preventDefault();
});

clearFilter.addEventListener('click', function(e) {
  emptyList(list);
  e.preventDefault();
});
