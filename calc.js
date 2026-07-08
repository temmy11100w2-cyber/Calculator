    const appendToExpression = (arg) => {
        let expression = document.getElementById("expression");

        if (arg === `C`) {
            expression.value = "";
            document.getElementById("result").value = "";
        } else if (arg === `Del`) {
            expression.value = expression.value.slice(0, -1);
        } else {
            expression.value += arg;
        }
    };

        const clearExpression = () => {
            document.getElementById("expression").value = "";
            document.getElementById("result").value = "";
        }


        const calculate = () => {
            let expr = document.getElementById("expression").value;
            let result = eval(expr);
            document.getElementById("expression").value = result;

        }


        const raisetopower = () => {
            let expr = document.getElementById("expression").value;
            let result = Math.pow(expr, 2);
            document.getElementById("expression").value = result;
        }

        const squareroot = () => {
            let expr = document.getElementById("expression").value;
            let result = Math.sqrt(expr);
            document.getElementById("expression").value = result;                      
        }

        const sin = () => {
            let expr = document.getElementById("expression").value;
            let result = Math.sin(expr)
            document.getElementById("expression").value = result; 

        }

        const tan = () => {
            let expr = document.getElementById("expression").value;
            let result = Math.tan(expr)
            document.getElementById("expression").value = result; 

        }

        const cos = () => {
            let expr = document.getElementById("expression").value;
            let result = Math.cos(expr)
            document.getElementById("expression").value = result; 

        }

        const PI = () => {
            let expr = document.getElementById("expression").value;
            let result = Math.PI;
            document.getElementById("expression").value = result; 
        }
