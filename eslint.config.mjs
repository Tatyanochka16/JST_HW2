import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    "env": { // предоставляет предопределенные глобальные переменные
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
      "standard",
      "prettier"
    ], // рекомендуемый набор правил
    "parserOptions": {
        // версия синтаксиса ECMAScript: 5 (по умолчанию), 6 (или 2015), ..., 12 (2021), 13 (2022)
        "ecmaVersion": "latest",
        // script (значение по умолчанию) или module (если используются модули ECMAScript)
        "sourceType": "module"
    },
    "rules": {
        // можно переопределять recommended правила и добавлять правила, которых нет в recommended
    }
}
];