# Quiz Video Generator

A production-ready Remotion app for generating short vertical quiz videos for TikTok, Reels, and Shorts.

## Features

- Data-driven quiz generation from a typed JSON file
- Vertical 9:16 composition at 1080x1920
- Smooth question, countdown, answer, explanation, and end-card sequence
- Remotion preview environment for local testing
- Batch MP4 rendering through Node.js scripts
- Architecture ready for later expansion with audio, multiple templates, and extra quiz types

## Project structure

- `src/components`: reusable video UI pieces
- `src/compositions`: Remotion composition definitions
- `src/data`: typed quiz dataset
- `src/types`: TypeScript interfaces
- `src/utils`: shared config and helpers
- `scripts`: render scripts for sample and batch output
- `output`: generated MP4 files
- `assets/audio`: optional audio assets for future sound design

## Audio assets

Place optional audio files in `assets/audio/`:

- `countdown-tick.mp3`
- `answer-reveal.mp3`
- `background-music.mp3`

The app is designed so these can be integrated later without changing the core composition logic. If the files are missing, rendering still works normally.

## Development

```bash
npm install
npm run dev
```

Then open the Remotion preview in the browser.

## Generate one video

```bash
npm run render
```

This renders `output/quiz-sample.mp4`.

## Generate all quiz videos

```bash
npm run render:all
```

This reads all questions from `src/data/questions.json` and creates files such as:

- `output/quiz-001.mp4`
- `output/quiz-002.mp4`
- `output/quiz-003.mp4`

## Configuration

Edit `src/utils/quiz.ts` to change the video size, timing, fonts, background colors, and animation settings without modifying the composition logic.
