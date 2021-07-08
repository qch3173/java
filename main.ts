input.onButtonPressed(Button.A, function () {
 
for(let i = 1; i < 1000; i++) {
      basic.showLeds(`
 # # # # #
 . # # # .
 . # # # .
 . # # # .
 . # . # .
 `,10) 
 basic.showLeds(`
 . # . # .
 # # # # #
 . # # # .
 . # # # .
 . # # # .
 `,10)   
 basic.showLeds(`
 . # . # .
 . # . # .
 # # # # #
 . # # # . 
 . # # # .`,10)
  basic.showLeds(`
 . # . # .
 . # . # .
 . # . # .
 # # # # # 
 . # # # .`,10)
    basic.showLeds(`
 . # . # .
 . # . # .
 . # . # .
 . # . # . 
 # # # # #`,10)

}
 


})

radio.setGroup(222)
input.onButtonPressed(Button.B, function () {
 radio.sendString("I like little bois")   
})