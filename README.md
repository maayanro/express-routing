# express-routing
express framework routing exercise

<ul>
  <li>
    <strong>Downloading express framwork using npm install --save command</strong><br>
      first i have created package.json file via cmd using <strong>npm init</strong> command<br>
      afterwards run the command <strong>npm install express --save</strong> so i can use express framwork<br>
      the <strong>--save</strong> is for adding express dependency to package.json    <br><br>
  </li>
  <li>
    <strong>Writing app.js file to experience with all kinds of routing</strong><br>
    "/" routing - is the default routing to the home page<br><br>
    "/speak/:animal - :animal stands for any parameter that we'll wrote in the url after "/speak/"<br><br>
    <em> in order to avoid a lot of if statements and DRY code </em><br>
    i have created an object (keys: the animal name, values: the way each animal speak) <br><br>
    "/repeat/:message/:times" - :message - any message i want to print , :times - how many times<br><br>
    "*" - any route that doesn't familiar to the server<br><br>
    
    IMPORTANT: the order of the routing metter. 
    when looking for the correct route it will start from the top to the buttom
    so if i'll put the "*" route in the top none of the routing will triggerd.    
    
  </li>  
</ul>
