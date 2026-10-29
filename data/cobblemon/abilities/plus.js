
({
    name: "Plus",
    num: 57,
    rating: 2,

    onModifyAtkPriority: 5,
    onModifyAtk(atk, pokemon) {
        for (const ally of pokemon.allies()) {
            if (ally.hasAbility("minus")) {
                return this.chainModify(1.5);
            }
        }
    },

    onModifySpAPriority: 5,
    onModifySpA(spa, pokemon) {
        for (const ally of pokemon.allies()) {
            if (ally.hasAbility("minus")) {
                return this.chainModify(1.5);
            }
        }
    }
})
