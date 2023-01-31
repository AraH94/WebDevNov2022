const Output = document.getElementById('customer_request')

const CoffeeMachine = request => {
    let fullMessage = `Your request is ${request.value}`
console.log(request.value)
    return Output.innerText=fullMessage
}