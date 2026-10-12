// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE THIS FILE
// Update the names, date, messages, captions, and asset filenames here. Images
// and videos live in /assets, so every `src` begins with /assets/.
// ─────────────────────────────────────────────────────────────────────────────

// `main.jpg` is intentionally first: it is used for the hero photo and the
// first image in the scrapbook. Add a filename here whenever you add more media.
const photoFiles = [
  'main.jpg',
  'photo_1_2026-10-12_20-00-50.jpg', 'photo_1_2026-10-12_20-14-09.jpg', 'photo_1_2026-10-12_20-35-17.jpg',
  'photo_2_2026-10-12_20-14-09.jpg', 'photo_2_2026-10-12_20-35-17.jpg',
  'photo_3_2026-10-12_20-00-50.jpg', 'photo_3_2026-10-12_20-14-09.jpg', 'photo_3_2026-10-12_20-35-17.jpg',
  'photo_4_2026-10-12_20-00-50.jpg', 'photo_5_2026-10-12_20-00-50.jpg', 'photo_5_2026-10-12_20-28-00.jpg',
  'photo_6_2026-10-12_20-00-50.jpg', 'photo_6_2026-10-12_20-28-00.jpg', 'photo_7_2026-10-12_20-00-50.jpg',
  'photo_7_2026-10-12_20-28-00.jpg', 'photo_8_2026-10-12_20-00-50.jpg', 'photo_8_2026-10-12_20-28-00.jpg',
  'photo_9_2026-10-12_20-28-00.jpg', 'photo_10_2026-10-12_20-00-50.jpg', 'photo_10_2026-10-12_20-28-00.jpg',
  'photo_11_2026-10-12_20-28-00.jpg', 'photo_12_2026-10-12_20-28-00.jpg', 'photo_13_2026-10-12_20-00-50.jpg',
  'photo_13_2026-10-12_20-28-00.jpg', 'photo_14_2026-10-12_20-00-50.jpg', 'photo_14_2026-10-12_20-28-00.jpg',
  'photo_15_2026-10-12_20-00-50.jpg', 'photo_15_2026-10-12_20-28-00.jpg', 'photo_16_2026-10-12_20-00-50.jpg',
  'photo_16_2026-10-12_20-28-00.jpg', 'photo_17_2026-10-12_20-00-50.jpg', 'photo_17_2026-10-12_20-28-00.jpg',
  'photo_18_2026-10-12_20-00-50.jpg', 'photo_20_2026-10-12_20-00-50.jpg', 'photo_21_2026-10-12_20-00-50.jpg',
  'photo_22_2026-10-12_20-00-50.jpg', 'photo_23_2026-10-12_20-00-50.jpg', 'photo_24_2026-10-12_20-00-50.jpg',
  'photo_25_2026-10-12_20-00-50.jpg', 'photo_26_2026-10-12_20-00-50.jpg', 'photo_27_2026-10-12_20-00-50.jpg',
  'photo_28_2026-10-12_20-00-50.jpg', 'photo_29_2026-10-12_20-00-50.jpg', 'photo_30_2026-10-12_20-00-50.jpg',
  'photo_31_2026-10-12_20-00-50.jpg', 'photo_32_2026-10-12_20-00-50.jpg', 'photo_33_2026-10-12_20-00-50.jpg',
  'photo_34_2026-10-12_20-00-50.jpg', 'photo_35_2026-10-12_20-00-50.jpg', 'photo_36_2026-10-12_20-00-50.jpg',
  'photo_37_2026-10-12_20-00-50.jpg', 'photo_38_2026-10-12_20-00-50.jpg', 'photo_39_2026-10-12_20-00-50.jpg',
  'photo_40_2026-10-12_20-00-50.jpg', 'photo_41_2026-10-12_20-00-50.jpg', 'photo_42_2026-10-12_20-00-50.jpg',
  'photo_43_2026-10-12_20-00-50.jpg', 'photo_44_2026-10-12_20-00-50.jpg', 'photo_45_2026-10-12_20-00-50.jpg',
  'photo_46_2026-10-12_20-00-50.jpg', 'photo_47_2026-10-12_20-00-50.jpg', 'photo_48_2026-10-12_20-00-50.jpg',
  'photo_49_2026-10-12_20-00-50.jpg', 'photo_50_2026-10-12_20-00-50.jpg', 'photo_51_2026-10-12_20-00-50.jpg',
  'photo_52_2026-10-12_20-00-50.jpg', 'photo_53_2026-10-12_20-00-50.jpg', 'photo_54_2026-10-12_20-00-50.jpg',
  'photo_55_2026-10-12_20-00-50.jpg', 'photo_56_2026-10-12_20-00-50.jpg',
]

const photoCaptions = [
  'The kind of moment I want to keep close.', 'A little piece of us.', 'Ordinary days, made beautiful.',
  'One smile, a thousand feelings.', 'A memory I replay in my heart.', 'You make every place feel like home.',
  'The sweetest kind of happy.', 'More of this, forever please.', 'A chapter I never want to finish.',
  'The small moments became the big ones.', 'Still choosing you.',
]

const videoFiles = [
  'IMG_3347.MOV', 'IMG_4758.MOV', 'IMG_4875.MP4', 'IMG_4882.MP4', 'IMG_4994.MOV',
  'IMG_5392.MP4', 'IMG_5557.MOV', 'IMG_5750.MOV', 'IMG_5848.MP4', 'IMG_5850.MP4',
  'IMG_5976.MOV', 'IMG_6143.MP4', 'IMG_6446.MOV',
]

const videoCaptions = [
  'A moment that still makes my heart pause.', 'Proof that the best memories are the ones we lived together.',
  'A little motion picture from our favourite story.', 'One more second I would happily replay forever.',
]

export const site = {
  herName: 'My Love',
  yourName: 'Your person',
  anniversary: 'A beautiful day worth remembering',
  colors: {
    rose: '#d96b83',
    blush: '#fff0f2',
    ink: '#382a31',
  },
  opening: {
    greeting: 'Hey, My Love ❤️',
    message:
      'I made something special just for you. Every picture holds a memory, every moment tells our story, and every second with you means something to me.',
  },
  hero: {
    title: 'Our Little World ❤️',
    subtitle: 'A collection of moments that mean everything to me.',
    image: '/assets/main.jpg',
  },
  memories: photoFiles.map((file, index) => ({
    src: `/assets/${file}`,
    caption: photoCaptions[index % photoCaptions.length],
    date: index === 0 ? 'Our first page' : `Memory ${String(index).padStart(2, '0')}`,
  })),
  videos: videoFiles.map((file, index) => ({
    src: `/assets/${file}`,
    caption: videoCaptions[index % videoCaptions.length],
  })),
  timeline: [
    { date: 'Chapter one', title: 'The day we first met', text: 'The beginning of a story I did not know I was waiting for.' },
    { date: 'A little later', title: 'Our first photo together', text: 'One picture, and suddenly I had something I wanted to keep forever.' },
    { date: 'A favourite memory', title: 'A moment that made me smile', text: 'You have a way of making even the simplest moments feel unforgettable.' },
    { date: 'Somewhere along the way', title: 'The day I realized how special you are', text: 'I realized that life feels warmer, brighter, and more like home with you in it.' },
    { date: 'Today & beyond', title: 'So many memories still waiting for us', text: 'This is only the beginning of all the beautiful things we will share.' },
  ],
  letter: `My love,

Sometimes, I don't know how to explain how much you mean to me. But when I look at our pictures, I remember all the little moments that made me smile, all the times you made ordinary days feel special, and all the memories I wish I could relive again and again.

I made this little website because I wanted to keep those moments somewhere special. Every picture and every video is a small piece of our story.

Thank you for being part of my life. No matter how much time passes, I hope we keep creating beautiful memories together.

This is our little world, and I'm so happy I get to share it with you.

With all my love,
Your person ❤️`,
  finalMessage:
    "If I could choose again, I'd still choose you. And if life gave me a thousand more beautiful moments, I would want to share them with you. This is only a small collection of our memories, and I can't wait to make so many more with you. ❤️",
}
