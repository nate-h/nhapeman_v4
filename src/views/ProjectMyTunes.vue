<template>
    <project-template>
        <template v-slot:summaryImage>
            <img src="../assets/recordName.png" />
        </template>

        <template v-slot:summaryText>
            <p>
                Before I got into streaming, I had a pretty big music
                collection. I was really into making playlists but was
                frustrated at how iTunes didn't have the best UI for managing
                playlists. Trying to improve my coding skills, I thought it
                would be fun to create my own version of iTunes with some cool
                features for managing playlists. So I created MyTunes. In
                creating it, I learned a good amount about multithread
                synchronization, object serialization, regex filters, swing
                components
            </p>
        </template>

        <template v-slot:demo>
            <div style="position: relative; padding-top: 56.25%">
                <iframe
                    src="https://www.youtube.com/embed/1c4erMvMnVQ"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    "
                ></iframe>
            </div>
        </template>

        <template v-slot:demoDetails>
            <p>
                I created this media player for the soul purpose of having
                greater management over my music. The layout and functionality
                is similar to iTunes but it has some additional features like
                hotkeys for inserting songs into playlists or checkmarks to see
                which playlist a song is in. Speed was a big concern while
                implementing this media player. When a user adds music to the
                library, all the information for each song is calculated only
                once (not each time myTunes start) then stored in a hashmap that
                way I can access information in constant time. Also, I do not
                copy the songs to a folder, rather I copy the address then load
                it when the user wants to play. Lastly, when I save the
                information, I serialize it that way it loads fast. Two of the
                most difficult things to implement were the regex filter for the
                search bar and the multi-threading for playing the sound.
            </p>
        </template>
    </project-template>
</template>

<script setup lang="ts">
const name = "MyTunes"
const path = "mytunes"
const listed = true
const title = "MyTunes: a music player"
const description = "Java and JavaZOOM"
const moreInfoButtonText = "Demo"
</script>
