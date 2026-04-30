export async function getBooks () {
    const res = await fetch('/books.json')
    const data = res.json()
    return data
}