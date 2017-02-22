var buttonForm = document.getElementById('genreForm');
var clearFilter = document.getElementById('clearBtn');
var list = document.getElementById('list');

var listOfMovies = [
    {
      name: 'joe1',
      genre: 'comedy'
    },
    {
      name: 'joe2',
      genre: 'horror'
    },
    {
      name: 'joe3',
      genre: 'drama'
    },
    {
      name: 'joe4',
      genre: 'documentary'
    },
    {
      name: 'joe5',
      genre: 'comedy'
    },
    {
      name: 'joe6',
      genre: 'horror'
    },
    {
      name: 'joe7',
      genre: 'drama'
    },
    {
      name: 'joe8',
      genre: 'documentary'
    },
    {
      name: 'joe9',
      genre: 'comedy'
    },
    {
      name: 'joe10',
      genre: 'horror'
    },
    {
      name: 'joe11',
      genre: 'drama'
    },
    {
      name: 'joe12',
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


