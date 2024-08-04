// /api/submit - POST

export async function POST(req) {
    const data = await req.json();

    // Skickar POST:ade formuläret till php-backend
    const response = await fetch('http://localhost/trainotest/index.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    // Returnerar svar (felhantering skulle nog behövas)
    return new Response(JSON.stringify(result), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });

}