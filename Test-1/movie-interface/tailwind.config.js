module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.ts',
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'arial': 'Arial',
    },
    // Font Size
    fontSize: {
      '10r': ['0.625rem', '0.75rem'],
      '11r': ['0.688rem', '0.875rem'],
      '12r': ['0.75rem', '1rem'],
      '14r': ['0.875rem', '1.125rem'],
      '16r': ['1rem', '1.375rem'],
      '18r': ['1.125rem', '1.5rem'],
      '20r': ['1.25rem', '1.625rem'],
      '22r': ['1.375rem', '1.75rem'],
      '24r': ['1.5rem', '2rem'],
      '26r': ['1.625rem', '2.125rem'],
      '28r': ['1.75rem', '2.25rem'],
      '30r': ['1.875rem', '2.375rem'],
      '32r': ['2rem', '2.5rem'],
      '36r': ['2.25rem', '2.5rem'],
      '40r': ['2.5rem', '2.5rem'],
      '48r': ['3rem', '1'],
    },
    extend: {
      flex: {
        '1/2': '1 1 50%',
        '1/4': '1 1 25%',
        '3/5': '1 1 60%'
      },
      // backdrop Filter Blur
      backdropBlur: {
        '75': '75px',
        '100': '100px',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
      },
      // SLB Shadow Effects
      boxShadow: {
        glass: '0px 6px 40px rgba(0, 0, 0, 0.2)',
        glassM: '0px 6px 16px rgba(0, 0, 0, 0.25)',
        modal: '0px 4px 24px rgba(0, 0, 0, 0.08)',
        btn: '8px 8px 24px rgba(0, 0, 0, 0.15)',
        btnHvr: '4px 4px 12px rgba(0, 0, 0, 0.15)',
        inputT: '0px 0px 1px rgba(0, 0, 0, 0.48), 0px 0px 4px rgba(0, 0, 0, 0.12);',
        recom: '4px 4px 24px rgba(0, 0, 0, 0.1)',
        inset: 'inset 4px 4px 8px rgba(0, 0, 0, 0.25)',
        btnS: '0px 4px 8px rgba(0, 0, 0, 0.25)',
        base: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);',
        mb: '2px 2px 16px rgba(0, 0, 0, 0.08)',
      },
      // SLB Bg Color
      backgroundColor: {
        glass: {
          95: 'rgba(255, 255, 255, 0.95)',
          85: 'rgba(255, 255, 255, 0.85)',
          75: 'rgba(255, 255, 255, 0.75)',
          65: 'rgba(255, 255, 255, 0.65)',
          60: 'rgba(255, 255, 255, 0.60)',
          55: 'rgba(255, 255, 255, 0.55)',
          45: 'rgba(255, 255, 255, 0.45)',
          40: 'rgba(255, 255, 255, 0.4)',
          15: 'rgba(255, 255, 255, 0.15)',
        }
      },
      // SLB Bg image Color
      backgroundImage: {
        'linear-glass85': 'linear-gradient(89.52deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.255) 100%)',
        'linear-glass15': 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.0375) 100%)',
        'signin-modal': 'linear-gradient(85.1deg, rgba(179, 179, 179, 0.15) 0%, rgba(255, 255, 255, 0.0375) 100%)',
        'modal-border': 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)',
        'call-modal': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 60.42%, rgba(0, 0, 0, 0.8) 100%)',
      },
      colors: {
        'sticky-field': '#f7f6f6',
        'slb':{
          // SLB Black Color with Transparancy
          'black': {
            '10': 'rgba(0, 0, 0, 0.1)',
            '20': 'rgba(0, 0, 0, 0.2)',
            '30': 'rgba(0, 0, 0, 0.3)',
            '40': 'rgba(0, 0, 0, 0.4)',
            '50': 'rgba(0, 0, 0, 0.5)',
            '60': 'rgba(0, 0, 0, 0.6)',
            '70': 'rgba(0, 0, 0, 0.7)',
            '80': 'rgba(0, 0, 0, 0.8)',
            '90': 'rgba(0, 0, 0, 0.9)',
          },
          // SLB Gray Color
          'gray': {
            50: '#FAFAFA',
            100: '#F3F3F3',
            200: '#E6E6E6',
            300: '#CECECE',
            400: '#A0A0A0',
            500: '#717171',
            600: '#585858',
            700: '#444444',
            800: '#2D2D2D',
            900: '#1A1A1A',
          },
          // SLB Blue Color
          'blue': {
            50: '#F0F5FF',
            100: '#CADDFF',
            200: '#AFCDFF',
            300: '#94BCFF',
            400: '#79ABFF',
            500: '#5F9BFF',
            600: '#2979FF',
            700: '#1F5BBF',
            800: '#153C80',
            900: '#0F2D60',
          },
          // SLB Orange Color
          'orange': {
            50: '#FFEDDF',
            100: '#FFDBBF',
            200: '#FFC99F',
            300: '#FFB680',
            400: '#FFA460',
            500: '#FF9240',
            600: '#FF6E00',
            700: '#DF6000',
            800: '#BF5200',
            900: '#9F4500',
          },
          // SLB Gray Text Color with Opacity (#1A1A1A)
          'gray-op': {
            10: 'rgba(26, 26, 26, 0.1)',
            20: 'rgba(26, 26, 26, 0.2)',
            30: 'rgba(26, 26, 26, 0.3)',
            40: 'rgba(26, 26, 26, 0.4)',
            50: 'rgba(26, 26, 26, 0.5)',
            60: 'rgba(26, 26, 26, 0.6)',
            70: 'rgba(26, 26, 26, 0.7)',
            80: 'rgba(26, 26, 26, 0.8)',
            90: 'rgba(26, 26, 26, 0.9)',
          },
          // Custom White Color with Opacity (#FFF)
          'white': {
            90: 'rgba(255, 255, 255, 0.9)',
            80: 'rgba(255, 255, 255, 0.8)',
            70: 'rgba(255, 255, 255, 0.7)',
            60: 'rgba(255, 255, 255, 0.6)',
            50: 'rgba(255, 255, 255, 0.5)',
            40: 'rgba(255, 255, 255, 0.4)',
            30: 'rgba(255, 255, 255, 0.3)',
            20: 'rgba(255, 255, 255, 0.2)',
            10: 'rgba(255, 255, 255, 0.1)',
          }
        },
      },
      // SLB Animation Keyframes
      keyframes: {
        bottomToTop: {
          '0%': { transform: 'translateY(16px)' },
          '50%': { transform: 'translateY(8px)'},
          '100%': { transform: 'translateY(0)' },
        },
        leftToRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        rightToLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        ringBell: {
          '0%': { transform: 'rotate(-30deg)' },
          '33%': { transform: 'rotate(0deg)' },
          '66%': { transform: 'rotate(30deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        menuTap: {
          '0%': { transform: 'scale(.8)' },
          '100%': { transform: 'scale(1)' },
        },
        bounce: {
          '0%, 50%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(.4)' },
          '75%': { transform: 'scale(.4)' },
        },
        calling: {
          '0%': { height: '30px' },
          '25%': { height: '20px' },
          '50%': { height: '40px' },
          '75%': { height: '20px' },
          '100%': { height: '30px' },
        }
      },
      // SLB Animation
      animation: {
        'bottom-to-top': 'bottomToTop .4s forwards',
        'left-to-right': 'leftToRight .4s forwards',
        'right-to-left': 'rightToLeft .4s forwards',
        'fade-in': 'fadeIn .4s forwards',
        'fade-out': 'fadeOut .4s forwards',
        'menu-tap': 'menuTap .4s forwards .1s',
        'ring-bell': 'ringBell .3s forwards 2',
        'bounce': 'bounce 2s linear infinite',
        'calling': 'calling 1.2s linear infinite'
      }
    },
    screens: {
      'xs': {'min': '375px'},
      // => @media (min-width: 375px) { ... }
      'sm': {'min': '414px'},
      // => @media (min-width: 414px) { ... }
      'md': {'min': '768px'},
      // => @media (min-width: 768px) { ... }
      'lg': {'min': '1024px'},
      // => @media (min-width: 1024px) { ... }
      'xl': {'min': '1280px'},
      // => @media (min-width: 1280px) { ... }
      '2xl': {'min': '1366px'},
      // => @media (min-width: 1366px) { ... }
      '3xl': {'min': '1440px'},
      // => @media (min-width: 1440px) { ... }
      '4xl': {'min': '1570px'},
      // => @media (min-width: 1570px) { ... }

      // Only For Mobile's Conditional Classs, max width 767px
      'xsm': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  shortcuts: {
    't-12b': ['text-12r, font-bold'],
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".flex-center": {
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
        },
        ".flex-dc": {
          display: "flex",
          "flex-direction": "column",
        },
        ".flex-dr": {
          display: "flex",
          "flex-direction": "row",
        },
        ".flex-ic": {
          display: "flex",
          "align-items": "center",
        },
        ".flex-jc": {
          display: "flex",
          "justify-content": "center",
        },
        ".flex-je": {
          display: "flex",
          "justify-content": "flex-end",
        },
        ".flex-js": {
          display: "flex",
          "justify-content": "flex-start",
        },
        ".flex-jb": {
          display: "flex",
          "justify-content": "space-between",
        },
        ".flex-ic-jb": {
          display: "flex",
          "align-items": "center",
          "justify-content": "space-between",
        },
        ".flex-ic-je": {
          display: "flex",
          "align-items": "center",
          "justify-content": "flex-end",
        },
        ".flex-ic-js": {
          display: "flex",
          "align-items": "center",
          "justify-content": "flex-start",
        },
        ".ellipsis": {
          overflow: "hidden",
          "white-space": "nowrap",
          "text-overflow": "ellipsis",
        },
        ".text-shadow": {
          "text-shadow": "2px 2px 16px rgba(0, 0, 0, 0.25)",
        },
        ".card-focus:focus-visible, .card-selected": {
          outline: "1px solid #2979FF",
          "border-radius": "8px",
          background: "#fff",
        },
        ".hide-scroll-bar": {
          "&::-webkit-scrollbar": {
            "display": "none",
          }
        }
      };
      addUtilities(newUtilities, ["responsive"]);

      const actionStatusProgress = {
        // action Status Progress
        '.default-progress': {
          'display': 'block',
          'background-color': 'rgba(26, 26, 26, 0.2)',
          "margin-right": '1.5px',
          'height': '2px',
          "width": '10px',
            '&:first-child': {
              'border-radius': '4px 0 0 4px',
            },
            '&:last-child': {
              'border-radius': '0 4px 4px 0',
            },
            // adding Responsiveness
            '@media (min-width: 1280px)': {
              'margin-right': '2px',
              'height': '4px',
              'width': '16px',
            }
        },
        // action Status Progress active state
        '.progress-active': {
          'height': '4px',
          'background-color': '#2979FF',
          // adding Responsiveness
          '@media (min-width: 1280px)': {
            'height': '6px'
          }
        },
        // action Status Progress complete state
        '.progress-complete': {
          'background-color': '#5F9BFF',
        },
      };
      addUtilities(actionStatusProgress, ["responsive"]);

      const borderGlassEffect = {
        // transparent Border For Glass Effect
        '.glass-border': {
          '&:after': {
            'content': "''",
            'width': '100%',
            'height': '100%',
            'position': 'absolute',
            'top': '0',
            'left': '0',
            'padding': '1px',
            'z-index': '-1',
            'background-image': 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)',
            '-webkit-mask':  'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            '-webkit-mask-composite': 'xor',
            'mask-composite': 'exclude',
            // adding Radius only for ipad and desktop
            '@media (min-width: 768px)': {
              'border-radius': '8px'
            }
          }
        },
        // Glass Effect
        '.glass-effect': {
          'background': 'linear-gradient(85.1deg, rgba(179, 179, 179, 0.15) 0%, rgba(255, 255, 255, 0.0375) 100%)',
          'backdrop-filter': 'blur(100px)',
        }
      };
      addUtilities(borderGlassEffect, ['responsive'])

      const pickerStyle = {
        '.indicator': {
          'background-color': '#fff',
          'border-radius': '100px',
          'box-shadow': '4px 4px 12px rgba(0, 0, 0, 0.15)',
          'position': 'absolute',
          'top': '4px',
          'left': '4px',
          'height': '34px',
          'min-width': '98px',
          'z-index': '-1',
          'transition': 'transform 200ms ease-out',
        },
        '.picker': {
          'padding': '4px',
          'background-color': 'rgba(255, 255, 255, 0.75)',
          'border-radius': '100px',
          'backdrop-filter': 'blur(64px)',
          'cursor': 'pointer',
          'width': 'max-content',
          'height': '42px',
          'position': 'relative',
          '&-item': {
            'padding': '0 12px',
            'min-width': '98px',
            'font-size': '14px',
            'text-align': 'center',
            'height': '100%',
            'color': '#585858',
            '&.item-active': {
              'font-weight': '700',
              'color': '#2979FF',
            },
            '&:nth-child(1).item-active ~ .indicator': {
              'transform': 'translateX(calc(98px * 0))',
            },
            '&:nth-child(2).item-active ~ .indicator': {
              'transform': 'translateX(calc(98px * 1))',
            },
            '&:nth-child(3).item-active ~ .indicator':{
              'transform': 'translateX(calc(98px * 2))',
            },
            '&:nth-child(4).item-active ~ .indicator':{
              'transform': 'translateX(calc(98px * 3))',
            },
            '&:nth-child(5).item-active ~ .indicator': {
              'transform': 'translateX(calc(98px * 4))',
            },
            '&:nth-child(6).item-active ~ .indicator':{
              'transform': 'translateX(calc(98px * 5))',
            }
          }
        }
      };
      addUtilities(pickerStyle, ["responsive"]);
    },
    function({ addComponents }) {
      const buttons = {
        '.slb-btn': {
          'display': 'inline-block',
          'padding': '8px 24px',
          'font-weight': '700',
          'font-size': '14px',
          'transition': '150ms ease',
          '&:focus': {
            'outline': 'none',
          }
        },
        '.slb-btn-blue': {
          'background': '#2979FF',
          'color': '#fff',
          '&:hover': {
            'background': '#1F5BBF',
          }
        },
        '.slb-btn-white': {
          'background': '#fff',
          'color': '#A0A0A0',
          '&:hover': {
            'color': '#2979FF',
          }
        },
        '.slb-blue-outline': {
          'color': '#585858',
          'border': '1px solid #2979FF',
          '&:hover': {
            'color': '#2979FF',
          }
        },
        '.slb-white-outline': {
          'color': '#fff',
          'border': '1px solid #fff',
          '&:hover': {
            'color': '#fff',
          }
        },
        '.slb-no-border': {
          'border-color': 'transparent',
        },
        '.slb-btn-xsm': {
          'padding': '6px 16px',
          "font-size": '10px',
        },
        '.slb-btn-sm': {
          'padding': '8px 24px',
          "font-size": '12px',
        },
        '.slb-btn-md': {
          'padding': '10px 32px',
          "font-size": '14px',
        },
        '.slb-btn-lg': {
          'padding': '12px 48px',
          "font-size": '16px',
        },
        '.slb-btn-xlg': {
          'padding': '16px 56px',
          "font-size": '18px',
        },
      };
      addComponents(buttons);

      const dropdownBtn = {
        '.slb-dropdown': {
          'position': 'absolute',
          'top': 'calc(100% + 12px)',
          'z-index': '1',
          'background': '#fff',
          'min-width': '160px',
          'width': 'max-content',
          'list-style': 'none',
          'border-radius': '8px',
          'filter': 'drop-shadow(4px 4px 12px rgba(0, 0, 0, 0.15))',
          'max-height': '0',
          'overflow-y': 'auto',
          'transition': '300ms ease-in-out',
          'visibility': 'hidden',
          '&-item': {
            'font-size': '14px',
            'line-height': '18px',
            'display': 'block',
            'padding': '8px 24px',
            'font-weight': '400',
            'cursor': 'pointer',
            'white-space': 'nowrap',
            'color': '#585858',
            '&:hover':{
              'background': '#F0F5FF',
            },
            '&.active':{
              'background': '#F0F5FF',
              'font-weight': '700',
            },
            '&:empty':{
              'display': 'none',
            },
          }
        },
        '.slb-drop-btn': {
          'display': 'flex',
          'align-items': 'center',
          'font-weight': '700',
          'font-size': '14px',
          'line-height': '24px',
          'transition': '150ms ease',
          '@media (min-width: 1280px)': {
            'font-size': '18px',
          },
          '&:focus': {
            'outline': 'none',
          },
          '&-icon': {
            'font-size': '12px',
            'margin-left': '8px',
            'transition': '300ms ease-in-out',
          }
        },
        '.slb-drop-btn-blue': {
          'background': '#2979FF',
          'color': '#fff',
          '&:hover': {
            'background': '#1F5BBF',
          }
        },
        '.slb-drop-btn-white': {
          'background': 'rgba(255, 255, 255, 0.85)',
          'color': '#585858',
          '&:hover': {
            'background': '#fff',
          }
        },
        '.slb-drop-blue-outline': {
          'color': '#585858',
          'border': '1px solid #2979FF',
          '&:hover': {
            'border': '1px solid #1F5BBF',
          }
        },
        '.slb-drop-white-outline': {
          'color': '#fff',
          'border': '1px solid #fff',
          '&:hover': {
            'color': '#fff',
          }
        }
      };
      addComponents(dropdownBtn);
    }
  ],
}
