var x = 3;
var y = "Utkarsh";

let  a = 4;

const p="Albert";




console.log(x,y,a,p)


x=5
y="Riyaz"
a = 10
// p= "Monika"

console.log(x,y,a,p)


//global Scope
    // Functional Scope
        // Block Scope
        
        var x = 2
        let y = 3
        const z= 5
        
        function abc(){
            var p="a";
            let q="b";
            const r= "c";
            
            console.log(x,y,z)
            if(y>x){
                var m="m";
                let n="n";
                const o= "o";
                console.log(x,y,z,p,q,r,m,n,o)
            }
             console.log(m,n,o)
        }
        
        abc()
        // console.log(p,q,r)
                
        let x = 2;
        let name = "Guptacdcwcfeecf"
        const temp = `Utkarsh ${x+2} ${name}
        jjhsajds
        `
        console.log(temp)