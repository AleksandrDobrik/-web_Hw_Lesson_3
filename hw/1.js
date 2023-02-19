const num1 = Number.parseFloat(prompt('Введите температуру в градусах Цельсия: '));


alert(` Цельсий: ${(num1).toFixed(2)}, Фаренгейт: ${celFor(num1)}`);

function celFor(num1)
{
    let foreng = ((9/5)*num1 + 32).toFixed(2);
    return foreng
}