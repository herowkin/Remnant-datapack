
({
    num: 662,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Spirit Shackle",
    pp: 10,
    priority: 0,
    flags: {
        protect: 1,
        mirror: 1,
        distance: 1,
        metronome: 1
    },
    secondary: {
        chance: 100,
        onHit(target, source, move) {
            if (source.isActive) {
                target.addVolatile("trapped", source, move, "trapper");
            }
        }
    },
    target: "normal",
    type: "Ghost",
    contestType: "Clever"
})
