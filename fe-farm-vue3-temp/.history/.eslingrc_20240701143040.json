{
  "root": true,
  "parserOptions": {
    "ecmaVersion": 10,
    "sourceType": "module"
  },
  "extends": [
    "plugin:prettier/recommended"
  ],
  "rules": {
    "no-debugger": 0,
    "no-console": 0,
    "no-plusplus": 0,
    "no-mixed-operators": 0,
    "max-len" : 0
  },
  "globals": {
    "globalThis": false
  },
  "overrides": [
    {
      "files": [
        "*.vue"
      ],
      "plugins": [
        "vue"
      ],
      "env": {
        "browser": true,
        "node": true
      },
      "extends": [
        "plugin:vue/vue3-recommended",
        "@vue/typescript/recommended",
        "prettier"
      ],
      "rules": {
        "linebreak-style": [0, "unix"],
        "vue/v-on-event-hyphenation": 0,
        "vue/require-prop-types": 0,
        "@typescript-eslint/no-explicit-any": "off",
        "vue/multi-word-component-names": "off",
        "vue/no-setup-props-destructure": "off"
      }
    },
    {
      "files": [
        "*.ts",
        "*.tsx"
      ],
      "parserOptions": {
        "env": {
          "es6": true,
          "node": true,
          "browser": true
        },
        "project": [
          "./tsconfig.json"
        ],
        "ecmaFeatures": {
          "legacyDecorators": true
        }
      },
      "rules": {
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/prefer-for-of": 0,
        "@typescript-eslint/naming-convention": [
          "error",
          {
            "selector": "parameter",
            "format": [
              "camelCase"
            ],
            "leadingUnderscore": "allow"
          }
        ],
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            "argsIgnorePattern": "^_"
          }
        ],
        "no-restricted-syntax": 0,
        "prefer-destructuring": 0,
        "no-param-reassign": 0
      }
    }
  ]
}