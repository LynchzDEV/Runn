export interface AnimeHug {
  anime_name: string;
  url: string;
}

export async function fetchRandomHug(): Promise<AnimeHug> {
  try {
    const response = await fetch("https://nekos.best/api/v2/hug?amount=1");
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      return {
        anime_name: data.results[0].anime_name,
        url: data.results[0].url,
      };
    } else {
      throw new Error("API response not successful");
    }
  } catch (error) {
    // Fallback if API fails
    return {
      anime_name: "Fallback",
      url: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    };
  }
}
