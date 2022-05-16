## Load a JSON file

According to [this link](https://stackoverflow.com/questions/66239213/svelte-reading-json-file-from-local-folder)
there are two ways of loading a JSON file:

1. Put the JSON file in `src/` and bundle it with the app
2. Put the JSON file int `public/` and access it from the app

Here I choose Option 1 because don't want the JSON file to be publicly accessible (and hope that it's
the proper way to do it)

Option 1 is summarised [here](https://stackoverflow.com/questions/60779816/how-to-access-local-json-file-via-svelte)

These are the steps I did:

1. Run `npm install @rollup/plugin-json --save-dev`
2. Add this to `rollup.config.js`:
   ```typescript
   // Top of the file
   import json from '@rollup/plugin-json'
   
   ...
   
   // Plugin section
   json({
		compact: true
	})
   ```
3. Put the JSON file in `./src/data`
4. Load the JSON file from a Svelte component:
   ```
   <script>
   import * as sardinia_quiz from "./data/sardinia-quiz.json";
   </script>
   ```
