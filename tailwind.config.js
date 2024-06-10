/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'movie-dark-blue': '#041836'
      },
      backgroundImage: {
        'movie-main-background':
          "linear-gradient(90deg, #0249A6 30%, rgba(0, 0, 0, 0) 50%), url('https://s3-alpha-sig.figma.com/img/d542/cac4/ccb9e28de864eebb622f93cce72345f2?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DmkXK9aCYFq0ih4auaIIlKTfVmpMEUGfvJXyfsWggWAyeACydsjYyIEMh7Npi0VdTRh3xjgaLUQ3GTr33WomwF5cR0Ja~XkfyZthzzgZj8Zj7JxvYHNuixdRx4t4M61WXuqzC5rAwiFAvSX7St2~M5WYdy3RKpMxVhmSizOigSZP4TwrfElGjwwhzzy~uZBzDne2cV4KpC5wRYuTewIdC5-SYof0EWYVZcJ5LJcS2Bmz9mZUApndizCiFvGuze18YHtR5~OHzsXKw6GhGiOxAWpiZH8iT0-LbU0x7OpfDp1nzXsAa~qWZNPuVN0aaesDHdw9NL7boDtJ9lStWSZ9JA__')",
      },
    },
  },
  plugins: [],
}



