var a 
async function f() {
    const answer = await fetch('http://localhost:3000/post/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({a: a++, b: Math.random()})
    }).then(v => v.json())
    console.log(answer)
    $('#a').html(a)
    $('#x').html(answer.x)
    $('#y').html(answer.y)
}
$(() => {
    a = $('#a').text()
})