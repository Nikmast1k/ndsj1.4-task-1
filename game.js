const fs = require('fs')
const path = require('path')
const readline = require('readline')

const randNum = Math.floor(Math.random()*2) + 1
const rl = readline.createInterface(process.stdin, process.stdout)

fs.appendFile('log.txt', 'Партия началась \n', (err) => {
    if (err) throw Error(err)
})

const OrelReshka =function (randNum, file) {
    console.log('Орел или решка (1 или 2)? ')
    rl.question('', (ans) => {
        if (Number(ans) === randNum) {
            console.log('Верно!')
            const result = 'Пользователь ответил верно \n'
            fs.appendFile(file, result, (err) => {
                if (err) throw Error(err)
            })
            rl.question('Хотите сыграть еще? (y-да, n-нет)', (choice) => {
                if (choice ==='y') {
                    const randNum = Math.floor(Math.random()*2) + 1
                    OrelReshka(randNum, file)
                } else {
                    fs.appendFile(file, 'Партия закончилась \n', (err) => {
                        if (err) throw Error(err)
                    })
                    console.log('Лог записан в файл log.txt')
                    return rl.close()
                }
            })

        } else {
            console.log('Неверно!')
            const result = 'Пользователь ответил неверно \n'
            fs.appendFile(file, result, (err) => {
                if (err) throw Error(err)
            })
            rl.question('Хотите сыграть еще? (y-да, n-нет)', (choice) => {
                if (choice ==='y') {
                    const randNum = Math.floor(Math.random()*2) + 1
                    OrelReshka(randNum, file)
                } else {
                    fs.appendFile(file, 'Партия закончилась \n', (err) => {
                        if (err) throw Error(err)
                    })
                    console.log('Лог записан в файл log.txt')
                    return rl.close()
                }
            })
        }
    })
}

OrelReshka(randNum, 'log.txt')
