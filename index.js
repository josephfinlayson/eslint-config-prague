module.exports = {
    "parser": "babel-eslint",
    "extends": "react-app",
    "env": {
        "browser": true,
        "node": true,
        "mocha": true,
        "es6": true
    },
    "globals": {
        "describe": true,
        "it": true,
        "fetch": true,
        "navigator": true,
        "__DEV__": true,
        "XMLHttpRequest": true,
        "FormData": true,
        "React$Element": true,
        "Generator": true
    },
    "plugins": [
        "react",
        "jsx-a11y"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "curly": [1, "all"],
        "arrow-parens": [0, "as-needed"],
        "arrow-body-style": [0, "as-needed"],
        "comma-dangle": [1, "never"],
        "global-require": 0,
        "import/imports-first": 0,
        "import/newline-after-import": 0,
        "import/no-extraneous-dependencies": 0,
        "import/no-named-as-default": 0,
        "import/no-unresolved": [1, {"caseSensitive": true}],
        "import/prefer-default-export": 0,
        "indent": [1, 2, { "SwitchCase": 1 }],
        "key-spacing": ["error", { "afterColon": true, "mode": "minimum" }],
        "jsx-a11y/aria-props": 1,
        "jsx-a11y/heading-has-content": 0,
        "jsx-a11y/href-no-hash": 1,
        "jsx-a11y/label-has-for": 1,
        "jsx-a11y/mouse-events-have-key-events": 1,
        "jsx-a11y/role-has-required-aria-props": 1,
        "jsx-a11y/role-supports-aria-props": 1,
        "max-len": 0,
        "newline-per-chained-call": 0,
        "no-case-declarations": 0,
        "no-console": 1,
        "no-lonely-if": 0,
        "no-multi-spaces": 0,
        "no-plusplus": 0,
        "no-shadow": 0,
        "no-unused-expressions": 0,
        "no-use-before-define": 0,
        "one-var": 0,
        "one-var-declaration-per-line": 0,
        "prefer-template": 1,
        "class-methods-use-this": 0,
        "react/forbid-prop-types": 0,
        "react/jsx-first-prop-new-line": [
            0,
            "multiline"
        ],
        "react/jsx-filename-extension": 0,
        "react/jsx-no-target-blank": 0,
        "react/require-extension": 0,
        "react/self-closing-comp": 0,
        "react/sort-comp": [1, {
            "order": [
                "type-annotations",
                "static-methods",
                "lifecycle",
                "/^on.+$/",
                "everything-else",
                "render"
            ]
        }],
        "require-yield": 0,
        "semi": [
            1,
            "never"
        ],
        "no-underscore-dangle": [1, { "allow": ["_component", "__REDUX_DEVTOOLS_EXTENSION__"] }]
    }
}
