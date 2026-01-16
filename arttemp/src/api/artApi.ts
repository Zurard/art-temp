export async function fetchArtData() {
    const response = await fetch ("http://localhost:5000/api/data")
    if (!response.ok) {
        throw new Error("Failed to fetch art data");
    }
    return response.json();
}