module.exports = {
  content: ['./**/*.html'], // Adjust based on your file structure
  theme: {
    extend: {},
  },
  plugins: [],
  // Add purge option
  purge: {
    content: ['./**/*.html'], // Add paths to your HTML files
    options: {
      safelist: [], // You can add any classes you want to keep
    },
  },
};


