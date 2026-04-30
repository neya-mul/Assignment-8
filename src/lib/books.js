export async function getBooks () {
    const res = await fetch('https://neyamul-assignment-8.vercel.app/books.json')
    const data = res.json()
    return data
}