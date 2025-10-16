 var typed = new Typed('#element', {
      strings: ['this is so simple', 'easy','Junaid'],
      typeSpeed: 50,
      loop:true,
    });

    class Fruit {
        name;
        tast;
        shap;
        color;
        constructor(a,b,c,d){
            this.name=a;
            this.tast=b;
            this.shap=c;
            this.color=d;
        }
    }
    let apple  = new Fruit("Apple","Sweet","Round","Red");
    console.log(apple)