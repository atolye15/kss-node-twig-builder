module.exports = ctx => ({
  plugins: {
    autoprefixer: {
      cascade: false,
    },
    'css-mqpacker': ctx.env === 'production' ? {} : false,
    cssnano: ctx.env === 'production' ? {} : false,
  },
});
