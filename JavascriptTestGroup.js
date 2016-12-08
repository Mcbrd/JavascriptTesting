<html>
    <head>
        <title>Test Group</title>
        <script>

            (function() {
                var results;
                this.assert = function assert(value, desc) {
                    var li = document.createElement("li");
                    li.className = value ? "pass" : "fail";
                    li.appendChild(document.createTextNode(desc));
                    results.appendChild(li);
                    if (!value) {
                        li.parentNode.parentNode.className = "fail";
                    }
                    return li;
                };
                this.test = function test(name, fn) {
                    results = document.getElementById("results");
                    results = assert(true, name).appendChild(
                        document.createElement("ul"));
                    fn();
                };
            })();

            window.onload = function() {
                test("A test.", function() {
                    assert(true, "First Assertion completed");
                    assert(true, "Second Assertion completed");
                    assert(true, "Third Assertion completed");
                });
                test("Another test.", function() {
                    assert(true, "First test completed");
                    assert(false, "Second test failed");
                    assert(true, "Third assertion completed");
                });
                test("A third test.",function() {
                    assert(null, "fail");
                    assert(5, "pass")
                });
            };
            </script>
            <style>
                #results li.pass { color: green; }
                #results li.fail { color: red; }
            </style>
    </head>
    <body>
        <ul id="results"></ul>
    </body>
</html>