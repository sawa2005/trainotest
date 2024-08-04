// /api/submit - POST

export async function POST(req) {

    const data = await req.json();

    const response = await fetch('http://localhost/trainotest/index.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    return new Response(JSON.stringify(result), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });

}