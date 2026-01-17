#!/bin/bash

echo ""
echo "========================================"
echo "  MindCare Setup Script"
echo "========================================"
echo ""

# Install backend dependencies
echo "Installing backend dependencies..."
cd backend
npm install
if [ $? -ne 0 ]; then
    echo "Backend installation failed!"
    exit 1
fi
cd ..

# Install frontend dependencies
echo ""
echo "Installing frontend dependencies..."
cd frontend
npm install
if [ $? -ne 0 ]; then
    echo "Frontend installation failed!"
    exit 1
fi
cd ..

echo ""
echo "========================================"
echo "  Installation Complete!"
echo "========================================"
echo ""
echo "To start the application:"
echo ""
echo "1. Open one terminal and run:"
echo "   cd backend"
echo "   npm start"
echo ""
echo "2. Open another terminal and run:"
echo "   cd frontend"
echo "   npm start"
echo ""
echo "The application will open at http://localhost:3000"
echo ""