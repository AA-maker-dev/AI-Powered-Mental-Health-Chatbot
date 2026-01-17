@echo off
echo.
echo ========================================
echo  MindCare Setup Script
echo ========================================
echo.

REM Install backend dependencies
echo Installing backend dependencies...
cd backend
call npm install
if errorlevel 1 (
    echo Backend installation failed!
    exit /b 1
)
cd ..

REM Install frontend dependencies
echo.
echo Installing frontend dependencies...
cd frontend
call npm install
if errorlevel 1 (
    echo Frontend installation failed!
    exit /b 1
)
cd ..

echo.
echo ========================================
echo  Installation Complete!
echo ========================================
echo.
echo To start the application:
echo.
echo 1. Open one terminal and run:
echo    cd backend
echo    npm start
echo.
echo 2. Open another terminal and run:
echo    cd frontend
echo    npm start
echo.
echo The application will open at http://localhost:3000
echo.
pause