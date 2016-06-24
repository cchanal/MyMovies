var moviesAPI = (function () {

    function listMovies() {
        $.getJSON('movies.json', function (data) {
            console.log(data);
            $.each(data.movies, function(i, e){
                console.log(e);
                $.ajax({
                    type: 'GET',
                    url: "http://api.themoviedb.org/3/movie/"+e.TMDB_id+"?api_key="+TMDB.getAPIkey()+"&language=fr",
                    success: function(json) {
                        var html = '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="thumbnail">';
                        html += '<img src="http://image.tmdb.org/t/p/w185/'+json.poster_path+'" alt="movie image">';
                        html += '<div class="caption"><h3>'+json.original_title+'</h3><p>'+json.overview+'</p><p><a href="#" class="btn '+ isWatched(e.see) + '" role="button"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a></p></div></div></div>';
                        $("#affiche").append(html);
                    }
                });
            });
        });
    }

    function isWatched (isWatched){
        return isWatched ? 'btn-success' : 'btn-danger';
    }

    return {
        listMovies: listMovies,
    }
})();
