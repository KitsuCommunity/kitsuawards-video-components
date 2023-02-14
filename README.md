# Kitsu Anime Awards Video Components

This repo contains various video components we'll be using for the Kitsu Anime Awards videos.

## Setup

Run

```sh
npm install # first time
npm start # every time
```

To convert the rendered frames into video, install `ffmpeg` and run

```sh
./convert-to-video.sh <project_name>
# ^ This assumes you're using linux
```

Make sure you put any images into the `src/assets` folder before attempting to render
