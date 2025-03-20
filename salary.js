// Function for calculating net salary from basic salary and benefit
function calculateNetSalary(basicSalary, benefits) {
  
    //tax deductions
    const taxRate = 0.2
    const nhifRate = 0.1
    const nssfRate = 0.2
  
    //GrossSalary calculation by basic salary and benefits addition
    const grossSalary = basicSalary + benefits;

    const tax = grossSalary * taxRate; 
    const nhif = grossSalary * nhifRate;
        const nssf = grossSalary * nssfRate;
  

    
    const netSalary = grossSalary - (tax + nhif + nssf);
  
    return {
      grossSalary,
      tax,
      nhif,
      nssf,
      netSalary
    };
  }
  
 