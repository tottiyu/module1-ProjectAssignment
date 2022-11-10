import { sort, search, newsList } from "./main.js";


/**
 * @jest-environment jsdom
 */

test("Search 'Night', outputs 'Nightmare' TV show 'Euphoria — health threat or high art?'", () => {
    const inputValue = "Night";
    expect(newsList.filter(value => value.match(inputValue))).toEqual([
        "'Nightmare' TV show 'Euphoria — health threat or high art?"
    ]);
});

test("Test ascending sort", () => {
    expect(sort("ascending")).toEqual([
        "'Nightmare' TV show 'Euphoria — health threat or high art?",
        "Buried underpants and tea bags help scientists evaluate soil",
        "Decoder: Armenia in a bind as Ukraine war resets global order",
        "Decoder: Mining asteroids for minerals can help spare Earth",
        "Marie Colvin shined a light on war-torn corners of the world",
        "Media glare can enrich tennis pros yet imperil mental health",
        "What books should an aspiring journalist read?",
        "What films should an aspiring journalist watch?"
    ]);
});

test("Test descending sort", () => {
    expect(sort(!"ascending")).toEqual([
        "What films should an aspiring journalist watch?",
        "What books should an aspiring journalist read?",
        "Media glare can enrich tennis pros yet imperil mental health",
        "Marie Colvin shined a light on war-torn corners of the world",
        "Decoder: Mining asteroids for minerals can help spare Earth",
        "Decoder: Armenia in a bind as Ukraine war resets global order",
        "Buried underpants and tea bags help scientists evaluate soil",
        "'Nightmare' TV show 'Euphoria — health threat or high art?"
    ]);
});