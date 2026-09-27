// import { defineConfig } from "eslint/config";
// import { FlatCompat } from "@eslint/eslintrc";

// const compat = new FlatCompat({
//   baseDirectory: import.meta.dirname,
// });

// export default defineConfig([
//   ...compat.extends("next/core-web-vitals", "next/typescript"),

//   {
//     rules: {
//       "max-lines": [
//         "warn",
//         {
//           max: 150,
//           skipBlankLines: true,
//           skipComments: true,
//         },
//       ],
//     },
//   },
// ]);

import { defineConfig } from "eslint/config";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default defineConfig([
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      "max-lines": [
        "warn",
        {
          max: 150,
        },
      ],
    },
  },
]);
