function calculateSalary(grossSalary) {
    let taxRate = 0.13;
    let netSalary = grossSalary * (1 - taxRate);
    return Math.round(netSalary);
  }