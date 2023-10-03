

function dayRate(ratePerHour){
    return ratePerHour * 8;
}
    let test = dayRate;

function daysInBudget (budget, ratePerHour){
    return Math.floor(budget / dayRate(ratePerHour));
}

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    const BILLABLE_DAYS = 22;
    const months = Math.floor(numDays / BILLABLE_DAYS);
    const monthlyRate = BILLABLE_DAYS * dayRate(ratePerHour);
    const monthlyDiscount = (1 - discount) * monthlyRate;
    const extraDays = numDays % BILLABLE_DAYS;
    const extraDayPrice = extraDays * dayRate(ratePerHour);
    return Math.ceil(months * monthlyDiscount + extraDayPrice);
  }

