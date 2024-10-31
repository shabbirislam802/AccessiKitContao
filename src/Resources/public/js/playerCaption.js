document.addEventListener("DOMContentLoaded", function () {
    if(settings[0]['media_caption_function'] == '1') {
        document.querySelectorAll("video[data-subtitle-file], video[data-audio-description]").forEach(function (video) {
            // Subtitle hinzufügen, wenn vorhanden
            const subtitleFile = video.getAttribute("data-subtitle-file");
            const subtitleLanguage = video.getAttribute("data-subtitle-language") || "en";
            if (subtitleFile) {
                const track = document.createElement("track");
                track.setAttribute("kind", "subtitles");
                track.setAttribute("src", subtitleFile);
                track.setAttribute("srclang", subtitleLanguage);
                track.setAttribute("label", subtitleLanguage.toUpperCase());
                video.appendChild(track);
            }

            // Audiobeschreibung hinzufügen, wenn vorhanden
            const audioDescription = video.getAttribute("data-audio-description");
            const audioType = video.getAttribute("data-audio-type") || "audio/mpeg";
            if (audioDescription) {
                const audio = document.createElement("audio");
                audio.setAttribute("controls", "");

                const source = document.createElement("source");
                source.setAttribute("src", audioDescription);
                source.setAttribute("type", audioType);
                audio.appendChild(source);

                // Erklärung für die Audiobeschreibung
                const description = document.createElement("p");
                description.textContent = "Dieses Audio ist die Audiobeschreibung für das Video.";

                // Füge das <audio> und <p> nach dem Video ein
                video.parentNode.insertBefore(description, video.nextSibling);
                video.parentNode.insertBefore(audio, description.nextSibling);
            }
        });
    }
});
