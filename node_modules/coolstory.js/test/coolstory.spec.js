describe("coolstory.js", function() {
    it("should generate titles", function() {
        for(var i = 0; i < 1000; ++i) {
            var title = coolstory.title();
            expect(typeof title).toBe('string');
            expect(title.length).toBeGreaterThan(0);
            expect(title).not.toContain(':');
        }
    });

    it("should be able to generate titles of some maximum length", function() {
        for(var i = 0; i < 1000; ++i) {
            var length = 10;
            var title = coolstory.title(length);
            expect(typeof title).toBe('string');
            expect(title.length).toBeGreaterThan(0);
            expect(title.length).toBeLessThan(length+1);
            expect(title).not.toContain(':');
        }
    });
});