module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"]
      },
      textColor: {
        "spl-base": "var(--spl-gray)",
        "spl-base-gray": "var(--spl-gray-light)",
        "spl-base-gray-light": "var(--spl-gray-lighter)"
      },
      colors: {
        primary: {
          light: "#fefcbf", // For lighter primary color
          default: "red", // Normal primary color
          dark: "#744210" // Used for hover, active, etc.
        },
        "spl-base-100": "var(--spl-base-100)",
        "spl-base-200": "var(--spl-base-200)",
        "spl-base-300": "var(--spl-base-300)",
        "spl-base-400": "var(--spl-base-400)",
        "spl-base-500": "var(--spl-base-500)",
        "spl-base-600": "var(--spl-base-600)",
        "spl-base-700": "var(--spl-base-700)",
        "spl-base-800": "var(--spl-base-800)",
        "spl-base-900": "var(--spl-base-900)",
        "spl-primary": "var(--spl-primary)",
        "spl-secondary": "var(--spl-secondary)",
        "spl-success": "var(--spl-success)",
        "spl-success-light": "var(--spl-success-light)",
        "spl-success-dark": "var(--spl-success-dark)",
        "spl-info": "var(--spl-info)",
        "spl-warning": "var(--spl-warning)",
        "spl-black": "var(--spl-black)",
        "spl-gray": "var(--spl-gray)",
        "spl-gray-light": "var(--spl-gray-light)",
        "spl-gray-lighter": "var(--spl-gray-lighter)"
      },
      spacing: {
        "0p": "0rem",
        "2.5p": "0.156rem",
        "5p": "0.313rem",
        "10p": "0.625rem",
        "15p": "0.938rem",
        "20p": "1.25rem",
        "25p": "1.563rem",
        "30p": "1.875rem",
        "35p": "2.188rem",
        "40p": "2.5rem",
        "45p": "2.813rem",
        "50p": "3.125rem",
        "60p": "3.75rem",
        "70p": "4.375rem",
        "80p": "5rem",
        "90p": "5.625rem",
        "100p": "6.26rem",
        "120p": "7.5rem",
        "140p": "8.75rem",
        "160p": "9.063rem",
        "180p": "11.25rem",
        "200p": "12.5rem",
        "250p": "15.625rem",
        "300p": "18.75rem",
        "350p": "21.875rem",
        "400p": "25rem",
        "500p": "31.25rem"
      }
    }
  },
  variants: {},
  plugins: [require("kutty")]
};
