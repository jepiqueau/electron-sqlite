call yarn build
if %errorlevel% NEQ 0 goto exit
call cap sync @capacitor-community/electron
if %errorlevel% NEQ 0 goto exit
xcopy build\*.* /s /y .\electron\app
if %errorlevel% NEQ 0 goto exit
cd electron
call npm install
if %errorlevel% NEQ 0 goto exit
call npm run electron:build-windows
:exit