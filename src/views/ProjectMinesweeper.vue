<template>
    <project-template>
        <template v-slot:summaryImage>
            <img src="../assets/minesweeper.png" />
        </template>

        <template v-slot:summaryText>
            <p>
                Minesweeper was one of the first games I remade as a programmer.
                Never played the game too much but thought it would be fun to
                recreate and more importantly achievable. Fair warning the sound
                effects can be jarring.
            </p>
        </template>

        <template v-slot:demo>
            <iframe
                src="https://nate-h.github.io/minesweeper_js/"
                frameborder="0"
                allow="autoplay; encrypted-media"
                scrolling="no"
                allowfullscreen
                style="width: 400px; height: 370px"
            ></iframe>
        </template>

        <template v-slot:demoDetails>
            <p></p>
        </template>
    </project-template>
</template>

<script>
export default {
    name: "Minesweeper",
    path: "minesweeper",
    listed: true,
    data() {
        return {
            title: "Minesweeper Remake",
            description: "Javascript",
            moreInfoButtonText: "Play",
        };
    },
};
</script>
