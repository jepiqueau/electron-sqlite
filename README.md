Build
```
yarn
yarn build
IF NEEDED -> npm install -g node-pre-gyp
yarn rebuild-electron
npx cap open @capacitor-community/electron
```
 Debug:
```
Dev Tools - cmd-P 
  open the Login.ts
break point on line 9
Click CreateDB on UI
Console Shows error
definitions.js
   line 79 shows connection created
   line 238 show open promise rejection

```
