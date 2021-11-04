$('#search-button').on('click', function(){

    $.ajax({
        url: 'https://api.themoviedb.org/3/discover/movie',
        type: 'get',
        dataType: 'json',
        data: {
            api_key: '13f86932a4d0a7198e1de2278e7f08c0',
            language: 'en-US',
            page: 1,
            region: 'US',

        },
        success: function (result) {
            if (result.page != 0) {
                let movies = result.results;
                console.log(movies);

                $.each(movies, function(i, data){
                    $('#movie-list').append(`
                        <div class="col-md-4">
                            <div class="card" id="navbar-example2">
                                <img src="https://www.themoviedb.org/t/p/w220_and_h330_face`+data.poster_path+`" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">`+data.original_title+`</h5>
                                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                                <h4 id="scrollspyHeading1">Overview</h4>
                                    <p class="card-text">`+data.overview+`</p>
                                </div>
                                </div>
                            </div>                    
                        </div>
                    `);
                });
                
            } else {
                $('#movie-list').html('<h1>Movie Not Found!</h1>');
            }
        }
    })
});

$('#upcoming-button').on('click', function(){

    $.ajax({
        url: 'https://api.themoviedb.org/3/movie/upcoming',
        type: 'get',
        dataType: 'json',
        data: {
            api_key: '13f86932a4d0a7198e1de2278e7f08c0',
            language: 'en-US',
            page: 1,
            region: 'US',

        },
        success: function (result) {
            if (result.page != 0) {
                let movies = result.results;
                console.log(movies);

                $.each(movies, function(i, data){
                    $('#movie-list').append(`
                        <div class="col-md-4">
                            <div class="card" id="navbar-example2">
                                <img src="https://www.themoviedb.org/t/p/w220_and_h330_face`+data.poster_path+`" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">`+data.original_title+`</h5>
                                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                                <h4 id="scrollspyHeading1">Overview</h4>
                                    <p class="card-text">`+data.overview+`</p>
                                </div>
                                </div>
                            </div>                    
                        </div>
                    `);
                });
                
            } else {
                $('#movie-list').html('<h1>Movie Not Found!</h1>');
            }
        }
    })
});