const build = require("./team_quest.js");
//let build = require("./build_team");

function generateHTML(team_cards) {

    return `
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
       <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
       <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
       <link rel="stylesheet" href="/style.css">
       <title>TeamCards</title>
   </head>
   <body>
     <style>
       body{
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       background-color: #EFEEEE;
       display: flex;
       justify-content: center;
       flex-wrap: wrap;
       height: 100%;
       width: 100%;
       letter-spacing: 2px;
   }
   
   .header{
     width: 100%;
     font-family: 'Bebas Neue', cursive;
     text-align: center;
     padding: 7%;
     background-color: rgb(202, 88, 88);
     color: #EFEEEE;
     box-shadow: -6px -6px 26px 0 rgba(255, 255, 255, 0.83),6px 6px 16px 0 rgba(217, 210, 200, 0.51);
     border: 1px solid rgba(255, 255, 255, 0.20);
     margin-bottom: 30px;
   
   }
   
   .card{
     margin-top: 20px;
     margin-right: 20px;
     margin-left: 20px;
     color: rgb(202, 88, 88);
     background-color: #EFEEEE;
     font-family: 'Bebas Neue', cursive;
     box-shadow: -6px -6px 26px 0 rgba(75, 69, 158, 0.83), 6px 6px 16px 0 rgba(217, 210, 200, 0.51);
     border: 2px solid rgba(255, 255, 255, 0.2)
   }
   
   .card ul li{
       background-color: #EFEEEE;
       border-bottom: 1px solid rgba(206, 189, 189, 0.657);
   }
   
   .card-header{
     font-family: 'Bebas Neue', cursive;
     background-color: #3b39b8;
     border-bottom: 1px solid rgba(206, 189, 189, 0.685);
   }
   .footer{
     width: 100%;
     padding: 7%;
   }
    </style>
    <div class="header"><h1>My Current Team</h1></div>
     ${team_cards}
   
     <div class="footer"></div>  
</body>
</html>`;

}


module.exports = {
    generateHTML: generateHTML
}