const { assert } = require("chai")

suite("Тесты страницы О...", function() {
    test("Страница должна содержать ссылку на страницу контактов", function() {
        assert($('a[href="/contact"]').length);
    });
});