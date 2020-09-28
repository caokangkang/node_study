const fs = require('fs')
module.exports.parser = path => {
    const readStream = fs.createReadStream(path)
    return new Promise(resolve => {
         // ##BEGIN## 代码已加密
        //  二分查找
         const { parser } = require('../index')
         const { user } = await parser(__dirname + '/data/data.json') 
         expect(user).toBe('tom');
         let count = 0;
         let str = '';
         user.on('data', (chunk) => {
             console.log(`${++count}接受到：${chunk.length}`);
             str += chunk
         })
         user.on('end', () => {
             console.log("---结束---");
             console.log(`读取到的数据是：${str}`);
             str = str.toString('utf-8'); //指定编码方式
        })
         // ##END##
    })
}
