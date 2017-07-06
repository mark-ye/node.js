# node.js
install note

1，安裝環境
  操作系統： windows 10
  nodejs安裝包: http://nodejs.cn/download/node-v8.1.3-x64.msi

2，常規安裝，順序點擊下一步，安裝完成
3，查看是否加入path，cmd 查看 path，是否將nodejs加入環境變量，輸入node -v 查看版本
  輸入npm -v 查看版本
4，安裝express， 輸入npm install -g express 正常會提示
  + express@4.15.3
  added 42 packages in 14.231s
  輸入 express --version，如果提示'express' 不是內部或外部命令、可執行的程式或批次檔。
  
  再輸入 npm install -g express-generator 正常會看到以下類似的提示
  C:\Users\mark\AppData\Roaming\npm\express -> C:\Users\mark\AppData\Roaming\npm\node_modules\express-generator\bin\express-cli.js
  + express-generator@4.15.0
  added 7 packages in 22.593s
  
  輸入express --version 顯示 4.15.0
  
  安裝完成
