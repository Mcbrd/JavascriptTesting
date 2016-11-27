<html>
    <head>
        <title>Test Suite<title>
        <script>

            function assert(value, desc) {
                var li = document.createElement("li");
                li.className = value ? "pass" : "fail";
                li.appendChild(document.createTextNode(desc));
                document.getElementById("results").appendChild(li);
            }

            window.onload - function(){
                assert(true, "The test suite is running");
                assert(false, "Failed");
            };
        </script>

        <style>
            #results li.pass {color: green; }
            #results li.fail {color: red; }
        </style>
    </head>

    <body>
        <ul id="results"></ul>
    </body>
</html>