#!/bin/bash

# 拡張機能のIDリスト
extensions=(
    "bradlc.vscode-tailwindcss"
    "ecmel.vscode-html-css"
    "george-alisson.html-preview-vscode"
    "esbenp.prettier-vscode"
    "visualstudioexptteam.vscodeintellicode"
    "visualstudioexptteam.intellicode-api-usage-examples"
)

# 各拡張機能をインストール
for extension in "${extensions[@]}"; do
    code --install-extension $extension
done