module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Roboto', 'sans-serif'],
      'body': ['Open Sans'],
      'Inter' : ['Inter', 'sans-serif'],
      'horror' : ['Van Helsing'],
      'phantom' : ['Phantom']
    },



    extend: {
      
      colors : {
        blood : '#E45C08',
        leftRight : '#160000',
        black : '#000',
        white : '#fff',
        grey : '#0F0F0F',
        yellow: '#FFC300',
        navbar : '#731829',
        tailwind : '#38bdf8',
        react : '#61DAFB'
      },

      backgroundImage: {
        frontBg:
          "url('https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80')",
        centerBg:
          "url('https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
      },
    },
  },
  plugins: [],
};
