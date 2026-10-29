
({
    name: "Steam Engine",
    num: 243,
    rating: 3,
    flags: { breakable: 1 },

    onTryHit(target, source, move) {
        if (target !== source && move.type === "Water") {
            this.boost({ spe: 6 }, target, target);
            this.add("-immune", target, "[from] ability: Steam Engine");
            return null;
        }
    },

    onDamagingHit(damage, target, source, move) {
        if (damage && move.type === "Fire") {
            this.boost({ spe: 6 }, target, target);
        }
    }
})
