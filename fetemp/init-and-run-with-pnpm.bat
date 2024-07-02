:: 让文本用UTF8编码
@echo off
chcp 65001

:: 获取当前脚本所在目录并赋值给变量
set CURRENT_DIR=%~dp0

:: 使用cmd执行运行项目的命令，进入当前脚本所在的路径
start cmd /k "cd /d %CURRENT_DIR%&&pnpm i && pnpm start"
