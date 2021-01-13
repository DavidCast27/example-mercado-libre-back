module.exports = {
    "env": {
        "shared-node-browser": true,
        "browser": true,
        "es2020": true,
        "node": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "rules": {
        // Errors
        "no-await-in-loop": 2,
        "no-extra-parens": 2,
        "no-loss-of-precision": 2,
        "no-promise-executor-return": 2,
        "no-template-curly-in-string": 2,
        "no-unreachable-loop": 2,
        "require-atomic-updates": 2,
        "valid-typeof": 2,
        "comma-dangle": [1],
        "no-constant-condition": 2,
        "no-debugger": "error",
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty": 2,
        "no-ex-assign": 2,
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-invalid-regexp": 2,
        "no-obj-calls": 2,
        "no-sparse-arrays": 2,
        "no-unexpected-multiline": 2,
        // Best Practices
        "array-callback-return": 2,
        "block-scoped-var": 2,
        "default-case": 2,
        "dot-location": [2, "property"],
        "dot-notation": 2,
        "eqeqeq": 2,
        "no-div-regex": 2,
        "no-else-return": 2,
        "no-empty-pattern": 2,
        "no-eq-null": 2,
        "no-eval": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-implicit-globals": 2,
        "no-implied-eval": 2,
        // "no-invalid-this": 2,
        "no-iterator": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        // "no-magic-numbers": 2,
        "no-multi-spaces": 2,
        "no-native-reassign": 2,
        "no-new-func": 2,
        "no-new-wrappers": 2,
        "no-new": 2,
        "no-octal-escape": 2,
        "no-param-reassign": 2,
        "no-process-env": 2,
        "no-proto": 2,
        "no-redeclare": [2, { "builtinGlobals": true }],
        "no-return-assign": 2,
        "no-script-url": 2,
        "no-self-assign": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-throw-literal": 2,
        "no-unmodified-loop-condition": 2,
        "no-unused-expressions": 2,
        "no-unused-labels": 2,
        "no-useless-call": 2,
        "no-with": 2,
        "radix": [2, "as-needed"],
        "vars-on-top": 2,
        "wrap-iife": [2, "inside"],
        "yoda": 2,
        // Strict
        "strict": [2, "global"],
        // Variable
        "no-catch-shadow": 2,
        "no-delete-var": 2,
        "no-label-var": 2,
        "no-shadow-restricted-names": 2,
        // "no-shadow": 2,
        "no-undef-init": 2,
        "no-undef": 2,
        "no-undefined": 2,
        // Stylistic Issues
        "block-spacing": [2, "always"],
        "brace-style": [2],
        "comma-spacing": [2, { "before": false, "after": true }],
        "comma-style": [2, "last"],
        "computed-property-spacing": [2, "never"],
        "eol-last": 2,
        "func-names": 2,
        "indent": [2, 4, { "SwitchCase": 1 }],
        "jsx-quotes": [2, "prefer-double"],
        "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
        "keyword-spacing": 2,
        "lines-around-comment": [2, { "beforeBlockComment": true, "beforeLineComment": false }],
        "max-nested-callbacks": [2, 2],
        "max-params": [2, 3],
        "new-parens": 2,
        "newline-per-chained-call": 2,
        "no-array-constructor": 2,
        "no-bitwise": 2,
        "no-continue": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-multiple-empty-lines": [2, { "max": 2, "maxEOF" : 1, "maxBOF": 0 }],
        "no-nested-ternary": 2,
        "no-new-object": 2,
        "no-plusplus": 2,
        "no-whitespace-before-property": 2,
        "no-spaced-func": 2,
        "no-trailing-spaces": 2,
        "no-unneeded-ternary": 2,
        "object-curly-spacing": [2, "always"],
        "one-var-declaration-per-line": [2, "always"],
        "operator-assignment": [2, "always"],
        "semi": [2, "always"],
        "sort-imports": 2,
        "space-before-blocks": 2,
        "space-in-parens": [2, "never"],
        "space-infix-ops": 2,
        "space-unary-ops": 2,
        "wrap-regex": 2,
        // ECMAScript 6
        "arrow-spacing": 2,
        "generator-star-spacing": [2, "both"],
        "no-const-assign": 2,
        "no-new-symbol": 2,
        "no-this-before-super": 2,
        "no-var": 2,
        "no-useless-constructor": 2,
        "object-shorthand": 2,
        "prefer-const": 2,
        "prefer-rest-params": 2,
        "prefer-spread": 2,
        "prefer-template": 2
    }
};
