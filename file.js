    <!-- Get us some jQuery goodness! -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>

<script type="text/javascript">
        $(function(){
            // Setup our method to retrieve the file list
    var getFiles = function(){
        // Call the /dl/ directory, which should serve 
        // back the directory-listing default page
        // NOTE: This WILL NOT work if you have your server's 
        // default index/home page in this folder, as that will
        // be returned instead of a directory listing!
        $.get("/dl/", function(data) {
            // get a reference to the ul I want to populate
            var $s    = $(".shell ul");
            // get a list of a tags from the returned data
            var links = $(data).find("a");
            // for each item in links...
            links.each(function(){
                // extract the href attr
                var href = $(this).attr("href");
                // filter out any links you don't want to display... 
                                    // in this case, I didn't want to display the 
                                    // sort-links and any links starting with a /
                if(href.charAt(0) != "?" && href.charAt(0) != "/"){
                    // append a new li with an anchor tag inside 
                                            // it that has the href, and the link's text
                    $s.append("<li><a href=\"" + href + "\">" +
                                                        $(this).text() + "</a></li>");
                    }
                });
            });
        };
            // assign my click handler to #btnGet
    $("#btnGet").click(getFiles);
        });
    </script>