console.log('This is the external Javascipt')
 // console is provided by the developer which is develper tools we can do our rough work such as debuggig
        console.log("Hellow World")
           var names;
          let shows = document.querySelector(".insert")
        
        document.querySelector(".clk").addEventListener("click",(e)=>{
          
        names = document.querySelector(".gets").value
        shows.innerText=names
       
         
        })
      document.querySelector(".clear").addEventListener("click",()=>
        {
      shows.innerText=""
        })



        // let a=+prompt("Enter A value") 
        // let b =+prompt("Enter B value") 





        // console.log(`the sum of ${a} and ${b} is `,a+b)
        // console.log(a-b)
        // console.log(`The area rectangle is of height ${a} and widht ${b} is`,a*b)
        // console.log(a/b)
        // console.log(a%b)


 let a = 20
 a =30
        function getelment(...name){
          console.log(a)
        }
        getelment()
        let arr=[2,4,6,8]
        let arr2=[1,2,3,4]
        let arr3 = [...arr,arr2]
        console.log(arr3)

      