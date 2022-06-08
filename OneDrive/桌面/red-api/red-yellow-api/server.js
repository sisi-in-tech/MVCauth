const { response } = require('express')
const express = require ('express')
const app = express()
const PORT = 8000
const summerCloth ={
    'freepeople' :{
        'name': 'summer tie front maxi shirtdress',
        'style': 'shirtdress' ,
        'size':  'XS=0-2, S=4-6, M=8-10, L=12-14, XL=16',
        'size info': 'true to size.',
        'color': 'black , orchid rain, tangerine tango',
        'wash': 'hand wash, line dry' ,
        'fabric': '81% viscose, 19% linen',
        'item number':'#7187208',
        'price':'$98.00'
    },
    'BP' :{
        //使用大小写会影响到运行吗？还有符号会影响到运行吗？
        'name': 'Slit Rib T-Shirt Dress',
        'style': 'Go from sunny-day stroll to date night in this softly ribbed frock finished with an airy front vent.' ,
        'size':  'XXS=00, XS=0-2, S=4-6, M=8-10, L=12-14, XL=16 (12W-14W), XXL/1X=18 (16W).',
        'size info': 'true to size.',
        'color': 'black ,ivory , olive sarma' ,
        'wash': '88% rayon, 12% spandex' ,
        'fabric': '81% viscose, 19% linen'  ,
        'item number':'#7187208',
        'price':'$98.00'
    },
    'unknow':{
        'name': 'unknow',
        'style': 'unknow' ,
        'size':  'unknow',
        'size info': 'unknow',
        'color': 'unknow' ,
        'wash': 'unknow' ,
        'fabric': 'unknow'  ,
        'item number':'unknow',
        'price':'unknow'
    }

}

app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request , response)=>{
    // .toLocalLowerCase() 
    const clothName = request.params.name
    if(summerCloth[clothName]){
        return response.json(summerCloth[clothName])
    }else{
       return response.json(summerCloth['unknow'])
    }
    // response.json(summerCloth)
})

app.listen(process.env.PORT || PORT , ()=>{
    console.log (`The server is running on port ${PORT}! Betta Go Catch it !`)
})
